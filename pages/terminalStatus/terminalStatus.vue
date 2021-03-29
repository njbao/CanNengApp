<template>
	<view>
		<back  :pageNameFlag="pageNameFlag" :pageName='pageName'></back>
		<block  v-if="errorFlag==0">
			<!-- 时间 -->
			<view>
			     <uni-calendar  ref="calendar" :insert="false"  @confirm="confirm" :range='true'></uni-calendar>
			</view>
			<view class="time-block">
				<view class="time-block-left">
					<image class="calendar-pic" src="../../static/pic/calendar.png"></image>
					<view class="time-text">
						{{timeStart}}至{{timeEnd}}
					</view>
				</view>
				<!-- <image src="../../static/pic/jump.png" class="time-block-right"></image> -->
			</view>
			<view class=".line-fine">
				
			</view>
			<view class="overview-block">
				<view class="overview-block-text">
					<view class="overview-block-text-left">
						终端在线率为
					</view>
					<view class="overview-block-text-right">
						{{onlineRatez}}% 
					</view>
					<view class="overview-block-text-left">
						当前通讯异常终端为
					</view>
					<view class="overview-block-text-right">
						{{comError}}台
					</view>
				</view>
			</view>
			<scroll-view class="pic-block" scroll-y="true" :style="{height:srollHeight}">
				<view class="pic-block-title">
					<image class="pic-block-title-left" src="../../static/pic/rectangle.png"></image>
					<view class="pic-block-title-right">
						终端在线率(%)
					</view>
				</view>
				<view class="canvasView" :style="{height:picHeight}">
					<mpvue-echarts class="ec-canvas" canvasId="line" ref="lineChart" :style="{height:picHeight}"/>
				</view>
				<view class="pic-block-title">
					<image class="pic-block-title-left" src="../../static/pic/rectangle.png"></image>
					<view class="pic-block-title-right">
						终端详细信息
					</view>
				</view>
				<view class="info-block" v-for="o in devStatus">
					<view class="info-block-line-one">
						{{o.devName}} 
					</view>
					<view class="info-block-two">
						最新数据时间 {{o.showTime}}
					</view>
					<view class="info-block-three">
						{{o.gdName}}，{{o.subName}}，网络参数:{{o.ip}}
					</view>
				</view>
			</scroll-view>
		</block>
		<view class="error-block" v-else-if="errorFlag==1">
			<view class="error-text">
				网络或服务器出错请稍后再试
			</view>
			<!-- <button class="retry_button" @click="retry">重试</button> -->
		</view>
		<view class="error-block" v-else>
			<view class="error-text">
				加载中...
			</view>
		</view>
	</view>
</template>

<script>
	import back from '../../components/back.vue';
	import uniCalendar from "../../components/uni-calendar/uni-calendar";
	import * as echarts from '@/components/echarts/echarts.simple.min.js';
	import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';
	export default {
		data() {
			return {
				pageNameFlag:1,
				pageName:'终端状态详情',
				startDate:'',
				endDate:'',
				picHeight:'',
				option:{},
				devStatus:{},
				timeEnd:'',
				timeStart:'',
				comError:'',
				onlineRatez:'',
				errorFlag:0,
				srollHeight:''
			}
		},
		methods: {
			chooseDate(){
			    this.$refs.calendar.open();
			},
			confirm(e){
				var that = this;
				var before = e.range.before;
				var after = e.range.after;
				var b = parseInt(before.replace('-','').replace('-',''));
				var a = parseInt(after.replace('-','').replace('-',''));
				if(a>b){
					that.startDate = before;
					that.endDate = after;
				}else{
					that.startDate = after;
					that.endDate = before;
				}
			},
			getDevStatus(){
				var that=this;
				
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/dataIntegrity/getDevStatus', 
						method:'POST',
					    data: {
					       userId:uni.getStorageSync('userInfo').userId
					    },
					    header: {
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							uni.hideLoading()
							if(res.data.resultCode=='10000'){
								var data = res.data;
								var devStatus =res.data.data;
								that.timeStart = that.formatTime(data.timeStart);
								that.timeEnd = that.formatTime(data.timeEnd);
								that.comError=data.comError+'';
								that.onlineRatez=data.onlineRatez+'';
								that.devStatus=devStatus;
								var list1=[];
								var list2=[];
								for(var i=0;i<devStatus.length;i++){
									devStatus[i].showTime = that.formatTime_second(devStatus[i].timeId)
									list1.push(devStatus[i].devName);
									list2.push(devStatus[i].onlineRate)
								}
								that.drawPic(list1,list2)
							}else{
								uni.hideLoading()
								that.errorFlag=1
							}
					    },
						fail() {
							uni.hideLoading()
							that.errorFlag=1
							// uni.showModal({
							//     title: '提示',
							//     content: '网络或服务器异常，请稍后再试',
							// 	showCancel:false,
							//     success: function (res) {
							//         if (res.confirm) {
							//             console.log('用户点击确定');
							//         } else if (res.cancel) {
							//             console.log('用户点击取消');
							//         }
							//     }
							// });
						}
					});
				}
			},
			drawPic(list1,list2) {
				var that = this ;
				that.option={
					grid:{
						width:'55%',
						left:'35%'
					},
					xAxis: {
						name: '在线率(%)',
						type: 'value',
						nameGap:30,
						nameLocation:'center',
						// data:[0,20,40,50,60,80,100],
						max:100,
						axisLabel: {
							margin:10
						}
					},
					yAxis: {
						type: 'category',
						inverse: true,
						name:'监测点名称',
						nameLocation:'start',
						data:list1,
						// data:['伟哥伟哥伟哥伟哥伟哥5伟哥6伟哥7伟哥8','伟哥1伟哥2伟哥3伟哥4伟哥5伟哥6伟哥7','伟哥1伟哥2伟哥3伟哥4伟哥5伟哥6','伟哥1伟哥2伟哥3伟哥4伟哥5','伟哥1伟哥2伟哥3伟哥4','伟哥1伟哥2伟哥3伟哥4伟哥5伟哥6伟哥7','伟哥1伟哥2伟哥3伟哥4伟哥5伟哥6','伟哥1伟哥2伟哥3伟哥4伟哥5','伟哥1伟哥2伟哥3伟哥4'],
						axisLabel:{
							interval:0,  
							fontsize:3,
							formatter:function(value){
								if(value.length>9){
									return value.substring(0,8)+'...'
								}else{
									return value
								}
							}
						}
					},
					series: {
							type: 'bar',
							label: {
								normal: {
									show: true,
									position:'right'
								}
							},
							// data: [100,100,100,100,100,100,100,100,100],
							data: list2,
							itemStyle:{
								color:'#58C1FF',
								position:'top'
							},
							barWidth:'90%',
						}
				}
				var sys = uni.getSystemInfoSync();
				var winWidth = sys.windowWidth;
				var winHeight = sys.windowHeight;
				var winrate = 750 / winWidth;
				var statusBarHeight = sys.statusBarHeight;
				// var picHeight = parseInt((winHeight - statusBarHeight) * winrate - 300)/winrate;
				var picHeight=list1.length*50+50
				// var picHeight=9*50+50
				that.srollHeight = parseInt((winHeight - statusBarHeight) * winrate - 300)+ 'rpx';
				that.picHeight =picHeight*winrate+'rpx'
				let canvas = that.$refs.lineChart.canvas
				echarts.setCanvasCreator(() => canvas);
				let lineChart = echarts.init(canvas, null, {
					width: winWidth,
					height: picHeight,
				})
				canvas.setChart(lineChart)
				lineChart.setOption(that.option)
				that.$refs.lineChart.setChart(lineChart)
				uni.hideLoading()
			},
			retry(){
				this.getDevStatus();
			}
		},
		onLoad() {
			var that=this;
			uni.showLoading({
				mask:true
			})
			// that.endDate=that.formatTime(new Date());
			// that.startDate=that.endDate.substring(0,8)+'01';
		},
		onReady() {
			var that=this;
			that.getDevStatus();
		},
		components:{
			back,
			uniCalendar,
			mpvueEcharts
		}
	}
</script>

<style>
@import url("terminalStatus.css");
</style>
