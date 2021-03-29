<template>
	<view>
		<back  :pageNameFlag="pageNameFlag" :pageName='pageName'></back>
		<block v-if="errorFlag==0"><!-- 时间 -->
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
					数据完整性为
				</view>
				<view class="overview-block-text-right">
					{{integrityz}}% 
				</view>
			</view>
		</view>
		<scroll-view class="pic-block" scroll-y="true" :style="{height:srollHeight}">
			<view class="pic-block-title">
				<image class="pic-block-title-left" src="../../static/pic/rectangle.png"></image>
				<view class="pic-block-title-right">
					数据完整性(%)
				</view> 
			</view>
			<view class="canvasView" :style="{height:picHeight}">
				<mpvue-echarts class="ec-canvas"  canvasId="line" ref="lineChart" :style="{height:picHeight}"/>
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
				pageName:'数据完整性详情',
				startDate:'',
				endDate:'',
				picHeight:'',
				option:{},
				dataIntegrity:{},
				timeEnd:'',
				timeStart:'',
				errorFlag:0,
				integrityz:'',
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
			getDataIntegrity(){
				var that=this;
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/dataIntegrity/getDataIntegrity', 
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
								var dataIntegrity =res.data.data;
								that.timeStart = that.formatTime(data.timeStart);
								that.timeEnd = that.formatTime(data.timeEnd);
								that.integrityz=data.integrityz+'';
								that.dataIntegrity=dataIntegrity;
								var list1=[];
								var list2=[];
								for(var i=0;i<dataIntegrity.length;i++){
									list1.push(dataIntegrity[i].lineName);
									list2.push(dataIntegrity[i].integrity)
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
						}
					});
				}
			},
			drawPic(list1,list2) {
				var that = this ;
				var w = '55%';
				var l = '30%';
				that.option={
					grid:{
						// width:'55%',
						// left:'30%'
						width:w,
						left:l
					},
					xAxis: {
						name: '数据完整性(%)',
						type: 'value',
						nameGap:30,
						nameLocation:'center',
						max:100,
						axisLabel: {
							margin:10
						}
					},
					yAxis: {
						type: 'category',
						inverse: true,
						// data: ['伟哥伟哥伟哥伟哥伟哥'],
						data: list1,
						axisLabel:{
							interval:0,  
							fontsize:6,
							formatter:function(value){
								if(value.length>9){
									return value.substring(0,8)+'...'
								}else{
									return value
								}
							}
						}
						// textStyle:{
						// 	fontsize:10
						// }
					},
					series: {
							type: 'bar',
							label: {
								normal: {
									show: true,
									position:'right'
								}
							},
							data:list2,
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
				// var picHeight = parseInt((winHeight - statusBarHeight) * winrate - 400)/winrate;
				that.srollHeight = parseInt((winHeight - statusBarHeight) * winrate - 300)+ 'rpx';
				var picHeight=list1.length*50+50
				that.picHeight =picHeight*winrate+'rpx'
				// that.picHeight = parseInt((winHeight - statusBarHeight) * winrate - 400)+ 'rpx';
				let canvas = that.$refs.lineChart.canvas
				echarts.setCanvasCreator(() => canvas);
				let lineChart = echarts.init(canvas, null, {
					width: winWidth,
					height: picHeight
				})
				canvas.setChart(lineChart)
				lineChart.setOption(that.option)
				that.$refs.lineChart.setChart(lineChart)
			},
			retry(){
				this.getDataIntegrity();
			}
		},
		onLoad() {
			var that=this;
			// that.endDate=that.formatTime(new Date());
			// that.startDate=that.endDate.substring(0,8)+'01';
			uni.showLoading({
				mask:true
			})
		},
		onReady(){
			var that=this;
			that.getDataIntegrity();
		},
		components:{
			back,
			uniCalendar,
			mpvueEcharts
		}
	}
</script>

<style>
@import url("dataIntegrityDetails.css");
</style>
