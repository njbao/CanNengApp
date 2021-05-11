<template>
	<view>
		<back :pageNameFlag="pageNameFlag" :pageName='pageName'></back>
		<view class="spectrum-block">
			<view class="line-block">
				{{lineInfo.lineName}}
			</view>
			<view class="tab-block">
				<view class="tab-click" v-if="tabNum==1">
					谐波电压频谱
				</view>
				<view class="tab" v-else @click='changeTab(1)'>
					谐波电压频谱
				</view>
				<view class="tab-click" v-if="tabNum==2">
					谐波电流频谱
				</view>
				<view class="tab" v-else @click='changeTab(2)'>
					谐波电流频谱
				</view>
			</view>
			<swiper  :style="{height:scrollHeight}" :current="current" @change="changeTabBySwiper" duration="300" skip-hidden-item-layout="true">
				<swiper-item>
					<view class="echarts-block" :style="{height:scrollHeight}">
						<view class="canvasView" :style="{height:picHeight}">
							<!-- <mpvue-echarts class="ec-canvas" canvasId="line" ref="lineChart" :style="{height:picHeight}"/> -->
							<echarts :option="option1" class="ec-canvas" :style="{height:picHeight}"></echarts>
						</view>
						<view class="legend-block">
							<view class="legend-block-left">
								<view class="legend-block-left-color">
									
								</view>
								<view class="legend-block-left-text">
									国际限值(%)
								</view>
							</view>
							<view class="legend-block-right">
								<view class="legend-block-right-color">
									
								</view>
								<view class="legend-block-right-text">
									谐波电压含有率(%)
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="echarts-block" :style="{height:scrollHeight}">
						<view class="canvasView" :style="{height:picHeight}">
							<!-- <mpvue-echarts class="ec-canvas" canvasId="line2" ref="lineChart2" :style="{height:picHeight}"/> -->
							<echarts :option="option2" class="ec-canvas" :style="{height:picHeight}"></echarts>
						</view>
						<view class="legend-block">
							<view class="legend-block-left">
								<view class="legend-block-left-color">
									
								</view>
								<view class="legend-block-left-text">
									国际限值(A)
								</view>
							</view>
							<view class="legend-block-right">
								<view class="legend-block-right-color">
									
								</view>
								<view class="legend-block-right-text">
									谐波电流幅值(A)
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			
		</view>
	</view>
</template>

<script>
	import back from '../../components/back.vue';
	import echarts from '../../components/myEcharts/echarts.vue'
	// import * as echarts from '@/components/echarts/echarts.simple.min.js';
	// import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';
	export default {
		data() {
			return {
				lineInfo: {
					// lineName: '测试监测点',
					// lineIndex:2161
				},
				pageNameFlag: 1,
				pageName: '谐波频谱',
				scrollHeight: '',
				tabNum: 1,
				option1:{},
				option2:{},
				winWidth:0,
				current:0,
				picHeight:''
			}
		},
		methods: {
			scrollH() {
				var that = this;
				var sys = uni.getSystemInfoSync();
				var winWidth = sys.windowWidth;
				var winrate = 750 / winWidth;
				var winHeight = sys.windowHeight;
				var statusBarHeight = sys.statusBarHeight;
				var picHeight = winHeight-400/winrate;
				that.picHeight =(picHeight*winrate)+'rpx'
				that.scrollHeight = parseInt((winHeight - statusBarHeight) * winrate - 254) + 'rpx';
			},
			changeTab(tabNum) {
				this.tabNum = tabNum;
				this.current=tabNum-1;
			},
			changeTabBySwiper(e){
				this.tabNum=e.detail.current+1;
				this.current=e.detail.current;
			},
			getHarmRateV() {
				var that = this;
				uni.request({
					url: that.serverUrl+'/realtimeinfo/getHarmRateV', 
					method:'POST',
					data: {
					   lineIndex:that.lineInfo.lineIndex
					},
					header: {
					    'content-type': 'application/x-www-form-urlencoded'
					},
					sslVerify:false,
					success: (res) => {
						if(res.data.resultCode=='10000'){
								var list1=[];
								var list2=[];
								var result = res.data.data;
								list1.push(result.harmRateV.v2);
								list1.push(result.harmRateV.v3);
								list1.push(result.harmRateV.v4);
								list1.push(result.harmRateV.v5);
								list1.push(result.harmRateV.v6);
								list1.push(result.harmRateV.v7);
								list1.push(result.harmRateV.v8);
								list1.push(result.harmRateV.v9);
								list1.push(result.harmRateV.v10);
								list1.push(result.harmRateV.v11);
								list1.push(result.harmRateV.v12);
								list1.push(result.harmRateV.v13);
								list1.push(result.harmRateV.v14);
								list1.push(result.harmRateV.v15);
								list1.push(result.harmRateV.v16);
								list1.push(result.harmRateV.v17);
								list1.push(result.harmRateV.v18);
								list1.push(result.harmRateV.v19);
								list1.push(result.harmRateV.v20);
								list1.push(result.harmRateV.v21);
								list1.push(result.harmRateV.v22);
								list1.push(result.harmRateV.v23);
								list1.push(result.harmRateV.v24);
								list1.push(result.harmRateV.v25);
								list2.push(result.vharm.uharm2);
								list2.push(result.vharm.uharm3);
								list2.push(result.vharm.uharm4);
								list2.push(result.vharm.uharm5);
								list2.push(result.vharm.uharm6);
								list2.push(result.vharm.uharm7);
								list2.push(result.vharm.uharm8);
								list2.push(result.vharm.uharm9);
								list2.push(result.vharm.uharm10);
								list2.push(result.vharm.uharm11);
								list2.push(result.vharm.uharm12);
								list2.push(result.vharm.uharm13);
								list2.push(result.vharm.uharm14);
								list2.push(result.vharm.uharm15);
								list2.push(result.vharm.uharm16);
								list2.push(result.vharm.uharm17);
								list2.push(result.vharm.uharm18);
								list2.push(result.vharm.uharm19);
								list2.push(result.vharm.uharm20);
								list2.push(result.vharm.uharm21);
								list2.push(result.vharm.uharm22);
								list2.push(result.vharm.uharm23);
								list2.push(result.vharm.uharm24);
								list2.push(result.vharm.uharm25);
								that.drawVoltage(list1,list2);
						}else{
							uni.showModal({
							    title: '提示',
							    content: '查询失败，请重试',
								confirmText:'重试',
							    success: function (res) {
							        if (res.confirm) {
							            that.getHarmRateV();
							        } else if (res.cancel) {
							            console.log('用户点击取消');
							        }
							    },
							});
						}
					},
					fail() {
						uni.hideLoading()
						uni.showModal({
						    title: '提示',
						    content: '网络或服务器异常，请稍后再试',
							showCancel:false,
						    success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
					}
				});
			},
			drawVoltage(list1, list2) {
				var that = this ;
				that.option1={
					// title: {
					// 	text: 'Wheater Statistics'
					// },
					// tooltip: {
					// 	trigger: 'axis',
					// 	axisPointer: {
					// 		type: 'shadow'
					// 	}
					// },
					// legend: {
					// 	// data:['国际限值(%)','谐波电压含有率(%)']
					// 	data: [{
					// 		name: '国际限值(%)',
					// 		icon: 'triangle',
					// 		// 设置文本为红色
					// 		textStyle: {
					// 			color: 'red'
					// 		}
					// 	},
					// 	{
					// 		name: '谐波电压含有率(%)',
					// 		icon: 'triangle',
					// 		// 设置文本为红色
					// 		textStyle: {
					// 			color: 'red'
					// 		}
					// 	}]
					// },
					// grid: {
					// 	top:200
					// },
					// toolbox: {

					// },
					xAxis: {
						type: 'value',
						name: '谐波电压含有率(%)',
						nameGap:30,
						nameLocation:'center',
						axisLabel: {
							formatter: function (value, index) {
							    return value.toFixed(2)
							},
							margin:10
						}
					},
					yAxis: [{
						name:'(次)',
						nameLocation:'start',
						type: 'category',
						inverse: true,
						data: ['2', '3','4', '5','6', '7','8', '9','10', '11','12', '13','14', '15','16', '17','18', '19','20', '21','21', '23','24', '25'],
					},{
						show:false,
						type: 'category',
						inverse: true,
						data: ['2', '3','4', '5','6', '7','8', '9','10', '11','12', '13','14', '15','16', '17','18', '19','20', '21','21', '23','24', '25'],
					}],
					series: [{
							name: '国际限值(%)',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position:'right'
								}
							},
							data: list2,
							yAxisIndex:0,
							itemStyle:{
								color:'#DAA520',
								position:'top'
							},
							barWidth:'90%',
						},
						{
							name: '谐波电压含有率(%)',
							type: 'bar',
							label: {
								normal: {
									show: true,
									textBorderColor: '#333',
									textBorderWidth: 2,
									position:'right'
								}
							},
							data: list1,
							yAxisIndex:1,
							itemStyle:{
								color:'#2E8B57'
							},
							barWidth:'65%'
						}
					]
				}
				uni.hideLoading()
				// let canvas = that.$refs.lineChart.canvas
				// echarts.setCanvasCreator(() => canvas);
				// let lineChart = echarts.init(canvas, null, {
				// 	width: winWidth,
				// 	height: picHeight
				// })
				// canvas.setChart(lineChart)
				// lineChart.setOption(that.option)
				// that.$refs.lineChart.setChart(lineChart)
			},
			getHarmRateI() {
				var that = this;
				uni.request({
					url: that.serverUrl+'/realtimeinfo/getHarmRateI', 
					method:'POST',
					data: {
					   lineIndex:that.lineInfo.lineIndex
					},
					header: {
					    'content-type': 'application/x-www-form-urlencoded'
					},
					sslVerify:false,
					success: (res) => {
						if(res.data.resultCode=='10000'){
								var list1=[];
								var list2=[];
								var result = res.data.data;
								list1.push(result.harmRateI.i2);
								list1.push(result.harmRateI.i3);
								list1.push(result.harmRateI.i4);
								list1.push(result.harmRateI.i5);
								list1.push(result.harmRateI.i6);
								list1.push(result.harmRateI.i7);
								list1.push(result.harmRateI.i8);
								list1.push(result.harmRateI.i9);
								list1.push(result.harmRateI.i10);
								list1.push(result.harmRateI.i11);
								list1.push(result.harmRateI.i12);
								list1.push(result.harmRateI.i13);
								list1.push(result.harmRateI.i14);
								list1.push(result.harmRateI.i15);
								list1.push(result.harmRateI.i16);
								list1.push(result.harmRateI.i17);
								list1.push(result.harmRateI.i18);
								list1.push(result.harmRateI.i19);
								list1.push(result.harmRateI.i20);
								list1.push(result.harmRateI.i21);
								list1.push(result.harmRateI.i22);
								list1.push(result.harmRateI.i23);
								list1.push(result.harmRateI.i24);
								list1.push(result.harmRateI.i25);
								list2.push(result.iharm.iharm2);
								list2.push(result.iharm.iharm3);
								list2.push(result.iharm.iharm4);
								list2.push(result.iharm.iharm5);
								list2.push(result.iharm.iharm6);
								list2.push(result.iharm.iharm7);
								list2.push(result.iharm.iharm8);
								list2.push(result.iharm.iharm9);
								list2.push(result.iharm.iharm10);
								list2.push(result.iharm.iharm11);
								list2.push(result.iharm.iharm12);
								list2.push(result.iharm.iharm13);
								list2.push(result.iharm.iharm14);
								list2.push(result.iharm.iharm15);
								list2.push(result.iharm.iharm16);
								list2.push(result.iharm.iharm17);
								list2.push(result.iharm.iharm18);
								list2.push(result.iharm.iharm19);
								list2.push(result.iharm.iharm20);
								list2.push(result.iharm.iharm21);
								list2.push(result.iharm.iharm22);
								list2.push(result.iharm.iharm23);
								list2.push(result.iharm.iharm24);
								list2.push(result.iharm.iharm25);
								that.drawCurrent(list1,list2);
						}else{
							uni.showModal({
							    title: '提示',
							    content: '查询失败，请重试',
								confirmText:'重试',
							    success: function (res) {
							        if (res.confirm) {
							            that.getHarmRateI();
							        } else if (res.cancel) {
							            console.log('用户点击取消');
							        }
							    },
							});
						}
					},
					fail() {
						uni.hideLoading()
						uni.showModal({
						    title: '提示',
						    content: '网络或服务器异常，请稍后再试',
							showCancel:false,
						    success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
					}
				});
			},
			drawCurrent(list1, list2) {
				var that = this ;
				that.option2={
					// title: {
					// 	text: 'Wheater Statistics'
					// },
					// tooltip: {
					// 	trigger: 'axis',
					// 	axisPointer: {
					// 		type: 'shadow'
					// 	}
					// },
					// legend: {
					// 	// data:['国际限值(%)','谐波电压含有率(%)']
					// 	data: [{
					// 		name: '国际限值(%)',
					// 		icon: 'triangle',
					// 		// 设置文本为红色
					// 		textStyle: {
					// 			color: 'red'
					// 		}
					// 	},
					// 	{
					// 		name: '谐波电压含有率(%)',
					// 		icon: 'triangle',
					// 		// 设置文本为红色
					// 		textStyle: {
					// 			color: 'red'
					// 		}
					// 	}]
					// },
					// grid: {
					// 	top:200
					// },
					// toolbox: {
			
					// },
					xAxis: {
						type: 'value',
						name: '谐波电流幅值(A)',
						nameGap:30,
						nameLocation:'center',
						axisLabel: {
							formatter: function (value, index) {
							    return value.toFixed(2)
							},
							margin:10
						}
					},
					yAxis: [{
						name:'(次)',
						nameLocation:'start',
						type: 'category',
						inverse: true,
						data: ['2', '3','4', '5','6', '7','8', '9','10', '11','12', '13','14', '15','16', '17','18', '19','20', '21','21', '23','24', '25'],
					},{
						show:false,
						type: 'category',
						inverse: true,
						data: ['2', '3','4', '5','6', '7','8', '9','10', '11','12', '13','14', '15','16', '17','18', '19','20', '21','21', '23','24', '25'],
					}],
					series: [{
							name: '国际限值(%)',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position:'right'
								}
							},
							data: list2,
							yAxisIndex:0,
							itemStyle:{
								color:'#DAA520',
								position:'top'
							},
							barWidth:'90%',
						},
						{
							name: '谐波电流含有率(%)',
							type: 'bar',
							label: {
								normal: {
									show: true,
									textBorderColor: '#333',
									textBorderWidth: 2,
									position:'right'
								}
							},
							data: list1,
							yAxisIndex:1,
							itemStyle:{
								color:'#2E8B57'
							},
							barWidth:'65%'
						}
					]
				}
				uni.hideLoading()
				// let canvas = that.$refs.lineChart2.canvas
				// echarts.setCanvasCreator(() => canvas);
				// let lineChart2 = echarts.init(canvas, null, {
				// 	width: winWidth,
				// 	height: picHeight
				// })
				// canvas.setChart(lineChart2)
				// lineChart2.setOption(that.option)
				// that.$refs.lineChart2.setChart(lineChart2)
			}
		},
		onLoad(e) {
			var that = this;
			that.lineInfo = JSON.parse(e.lineInfo)
			that.scrollH();
		},
		onReady() {
			var that = this;
			uni.showLoading({
				mask:true,
				title:'加载中...'
			})
			that.getHarmRateV();
			that.getHarmRateI();
		},
		components: {
			back,
			echarts
			// mpvueEcharts
		}
	}
</script>

<style>
	@import url("spectrum.css");
</style>
