<template>
	<view>
		<view class="title-padding">
			
		</view>
		<view class="data-title">
			<view class="data-title-text">
				实时数据
			</view>
		</view>
		<view class="data-block">
			<view class="status-block" @click='jumpToTerminalStatusAll'>
				<view class="status-block-left">
					终端总数
					<view class="status-block-sucess-text">
						{{allDevCount}}
					</view>
					台，异常终端 
					<view class="status-block-false-text">
						{{errDevCount}}
					</view>
					 台
				</view>
				 <view class="status-block-click-text">
				 	查看详情
				 </view>
			</view>
			<!-- 基本信息 -->
			<view class="data-first-block">
				<view class="data-first-top">
					<view class="data-first-top-text" @click="chooseLine">
						请选择监测点:  {{lineInfo.lineName}}
					</view>
					<image class="data-first-top-pic" src="../../static/pic/pull.png"></image>
				</view>
				<view class="data-first-bottom">
					<view class="data-first-bottom-line-one">
						<view class="data-first-bottom-title">
							所&nbsp;&nbsp;属&nbsp;&nbsp;区&nbsp;&nbsp;域：
						</view>
						<view class="data-first-bottom-line-one-right">
							{{basicInfo.gdName}}
						</view>
					</view>
					<view class="data-first-bottom-line-two">
						<view class="data-first-bottom-title">
							所&nbsp;&nbsp;属&nbsp;&nbsp;单&nbsp;&nbsp;位：
						</view>
						<view class="data-first-bottom-line-two-right">
							{{basicInfo.subName}}
						</view>
					</view>
					<view class="data-first-bottom-line-three">
						<view class="data-first-bottom-title">
							实时通讯状态：
						</view>
						<view class="data-first-bottom-line-three-right" v-if="basicInfo.state==1">
							正常
						</view>
						<view class="data-first-bottom-line-three-false" v-else>
							中断
						</view>
					</view>
					<view class="data-first-bottom-line-four">
						<view class="data-first-bottom-line-four-left">
							<view class="data-first-bottom-title">
								实时通讯流量：
							</view>
							<view class="data-first-bottom-line-four-left-text" v-if="basicInfo.flow!=-1">
								{{basicInfo.flow}}MB
							</view>
							<view class="data-first-bottom-line-four-left-text" v-else>
								无
							</view>
						</view>
						<view class="data-first-bottom-line-four-right">
							<view class="data-first-bottom-line-four-right-title">
								占比：
							</view>
							<view class="data-first-bottom-line-four-right-text" v-if="basicInfo.flowRatio!=-1">
								{{basicInfo.flowRatio}}%
							</view>
							<view class="data-first-bottom-line-four-right-text" v-else>
								无
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 图表 -->
			<view class="data-second-block-button">
				<block v-if="basicInfo.state==1&&basicInfo.flow!=-1">
					<image src="../../static/pic/time.png" class="data-second-block-img"></image>
					<view class="data-second-block-time">
						{{showTime}}
					</view>
					<view class="button-spectrum" @click="jumpToSpectrum">
						谐波频谱
					</view>
				</block>
				<view class="button-refresh" @click="refreshValue" v-if="refreshFlag==0">
					{{refreshText}}
				</view>
				<view class="button-refresh-done" v-else>
					{{refreshText}}
				</view>
			</view>
			<view class="" v-if="doneQuery == 1">
				<scroll-view scroll-y="true" :style="{height:scrollHeight}" v-if="basicInfo.state==1&&basicInfo.flow!=-1">
					<view class="data-second-block">
						<view class="data-second-block-pic">
							<view class="data-second-block-pic-left">
								<view class="data-second-block-pic-left-first">
									<image :animation="animationDataKVA" src="../../static/pic/pointerKVA.png" class="pointer-left"></image>
									<view class="minKVA">
										{{minKVA}}
									</view>
									<view class="maxKVA">
										{{maxKVA}}
									</view>
								</view>
								<view class="data-second-block-pic-left-second">
									<image :animation="animationDataKVB" src="../../static/pic/pointerKVB.png" class="pointer-left"></image>
									<view class="minKVB">
										{{minKVB}}
									</view>
									<view class="maxKVB">
										{{maxKVB}}
									</view>
								</view>
								<view class="data-second-block-pic-left-third">
									<image :animation="animationDataKVC" src="../../static/pic/pointerKVC.png" class="pointer-left"></image>
									<view class="minKVC">
										{{minKVC}}
									</view>
									<view class="maxKVC">
										{{maxKVC}}
									</view>
								</view>
								<view class="data-second-block-pic-left-text">
									电压有效值
								</view>
							</view>
							<!-- 外电压内电流 -->
							<view class="data-second-block-pic-center">
								<view class="data-second-block-pic-center-pic">
									<image :animation="animationDataCurrentA" src="../../static/pic/pointer1.png" class="current" :style="{width:currentAWidth}"></image>
									<image :animation="animationDataCurrentB" src="../../static/pic/pointer2.png" class="current" :style="{width:currentBWidth}"></image>
									<image :animation="animationDataCurrentC" src="../../static/pic/pointer3.png" class="current" :style="{width:currentCWidth}"></image>
									<image :animation="animationDataVoltageA" src="../../static/pic/pointer1.png" class="voltage" :style="{width:voltageAWidth}"></image>
									<image :animation="animationDataVoltageB" src="../../static/pic/pointer2.png" class="voltage" :style="{width:voltageBWidth}"></image>
									<image :animation="animationDataVoltageC" src="../../static/pic/pointer3.png" class="voltage" :style="{width:voltageCWidth}"></image>
								</view>
								<view class="data-second-block-pic-center-text">
									基波电压/电流幅值（相位）
								</view>
							</view>
							<view class="data-second-block-pic-right">
								<view class="data-second-block-pic-right-first">
									<image :animation="animationDataAA" src="../../static/pic/pointerAA.png" class="pointer-right"></image>
									<view class="minAA">
										{{minAA}}
									</view>
									<view class="maxAA">
										{{maxAA}}
									</view>
								</view>
								<view class="data-second-block-pic-right-second">
									<image :animation="animationDataAB" src="../../static/pic/pointerAB.png" class="pointer-right"></image>
									<view class="minAB">
										{{minAB}}
									</view>
									<view class="maxAB">
										{{maxAB}}
									</view>
								</view>
								<view class="data-second-block-pic-right-third">
									<image :animation="animationDataAC" src="../../static/pic/pointerAC.png" class="pointer-right"></image>
									<view class="minAC">
										{{minAC}}
									</view>
									<view class="maxAC">
										{{maxAC}}
									</view>
								</view>
								<view class="data-second-block-pic-right-text">
									电流有效值
								</view>
							</view>
						</view>
					</view>
					<!-- 具体数据 -->
					<view class="data-third-block">
						<view class="data-third-block-line">
							<view class="data-third-block-line-left">
							</view>
							<view class="data-third-block-line-right">
								<view class="data-third-block-line-right-B">
									{{firstName}}
								</view>
								<view class="data-third-block-line-right-B">
									{{secondName}}
								</view>
								<view class="data-third-block-line-right-B">
									{{thirdName}}
								</view>
							</view>
						</view>
						<view class="data-third-block-line">
							<view class="data-third-block-line-left">
								电压有效值(kV)
							</view>
							<view class="data-third-block-line-right">
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.rmsVA}}
								</view>
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.rmsVB}}
								</view>
								<view class="data-third-block-line-right-A" v-if="thirdName">
									 {{constantlyInfo.rmsVC}}
								</view>
							</view>
						</view>
						<view class="data-third-block-line">
							<view class="data-third-block-line-left">
								电流有效值(A)
							</view>
							<view class="data-third-block-line-right">
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.rmsIA}}
								</view>
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.rmsIB}}
								</view>
								<view class="data-third-block-line-right-A" v-if="thirdName">
									 {{constantlyInfo.rmsIC}}
								</view>
							</view>
						</view>
						<view class="data-third-block-line">
							<view class="data-third-block-line-left">
								基波电压幅值(kV)
							</view>
							<view class="data-third-block-line-right">
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.baseWaveVA}}
								</view>
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.baseWaveVB}}
								</view>
								<view class="data-third-block-line-right-A" v-if="thirdName">
									 {{constantlyInfo.baseWaveVC}}
								</view>
							</view>
						</view>
						<view class="data-third-block-line">
							<view class="data-third-block-line-left">
								基波电压相位(°)
							</view>
							<view class="data-third-block-line-right">
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.baseWavePhaseVA}}
								</view>
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.baseWavePhaseVB}}
								</view>
								<view class="data-third-block-line-right-A" v-if="thirdName">
									 {{constantlyInfo.baseWavePhaseVC}}
								</view>
							</view>
						</view>
						<view class="data-third-block-line">
							<view class="data-third-block-line-left">
								基波电流幅值(A)
							</view>
							<view class="data-third-block-line-right">
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.baseWaveIA}}
								</view>
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.baseWaveIB}}
								</view>
								<view class="data-third-block-line-right-A" v-if="thirdName">
									 {{constantlyInfo.baseWaveIC}}
								</view>
							</view>
						</view>
						<view class="data-third-block-line">
							<view class="data-third-block-line-left">
								基波电流相位(°)
							</view>
							<view class="data-third-block-line-right">
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.baseWavePhaseIA}}
								</view>
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.baseWavePhaseIB}}
								</view>
								<view class="data-third-block-line-right-A" v-if="thirdName">
									 {{constantlyInfo.baseWavePhaseIC}}
								</view>
							</view>
						</view>
						<view class="data-third-block-line">
							<view class="data-third-block-line-left">
								电压偏差(%)
							</view>
							<view class="data-third-block-line-right">
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.vudevA}}
								</view>
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.vudevB}}
								</view>
								<view class="data-third-block-line-right-A" v-if="thirdName">
									 {{constantlyInfo.vudevC}}
								</view>
							</view>
						</view>
						<view class="data-third-block-line">
							<view class="data-third-block-line-left">
								电压总畸变率(%)
							</view>
							<view class="data-third-block-line-right">
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.thdVA}}
								</view>
								<view class="data-third-block-line-right-A">
									 {{constantlyInfo.thdVB}}
								</view>
								<view class="data-third-block-line-right-A" v-if="thirdName">
									 {{constantlyInfo.thdVC}}
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="no-data" :style="{height:scrollHeight}" v-else>
					暂无实时数据
				</view>
			</view>
			<view class="data-second-block" v-else>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight:'',
				lineInfo:{
					lineName:'暂无默认监测点',
					lineIndex:''
				},
				refreshText:'刷新',
				refreshFlag:0,
				second:60,
				firstName:'',
				secondName:'',
				thirdName:'',
				animationDataKVA:{},
				animationDataKVB:{},
				animationDataKVC:{},
				animationDataAA:{},
				animationDataAB:{},
				animationDataAC:{},
				animationDataVoltageA:{},
				animationDataVoltageB:{},
				animationDataVoltageC:{},
				animationDataCurrentA:{},
				animationDataCurrentB:{},
				animationDataCurrentC:{},
				minKVA:0,
				maxKVA:0,
				minKVB:0,
				maxKVB:0,
				minKVC:0,
				maxKVC:0,
				minAA:0,
				maxAA:0,
				minAB:0,
				maxAB:0,
				minAC:0,
				maxAC:0,
				currentAWidth:'60rpx',
				currentBWidth:'80rpx',
				currentCWidth:'100rpx',
				voltageAWidth:'130rpx',
				voltageBWidth:'145rpx',
				voltageCWidth:'160rpx',
				basicInfo:{
					"gdName":'',
					"subName":'',
					"flow":0,
					"flowRatio":0
				},
				constantlyInfo:{},
				showTime:'',
				intervalID:'done',
				allDevCount:0,
				errDevCount:0,
				doneQuery:0
			}
		},
		methods: {
			scrollH(){
				var that =this;
				var sys = uni.getSystemInfoSync();
				var winWidth = sys.windowWidth;
				var winrate = 750/winWidth;
				var winHeight= sys.windowHeight;
				var statusBarHeight = sys.statusBarHeight;
				that.scrollHeight = parseInt((winHeight-statusBarHeight)*winrate-666)+'rpx';
			},
			chooseLine(){
				var that=this;
				uni.navigateTo({
					url:'../chooseLine/chooseLine'
				});
				uni.$once('lineInfoSelect',function(data){
					if(that.intervalID!='done'){
						clearInterval(that.intervalID);
						that.intervalID = 'done';
						that.refreshText ="刷新";
						that.second=60;
						that.refreshFlag=0
					}
					that.lineInfo = data;
					that.queryBasicInfo();
					that.queryConstantlyInfo();
				});
				uni.$once('lineInfoQuery',function(data){
					if(that.intervalID!='done'){
						clearInterval(that.intervalID);
						that.intervalID = 'done';
						that.refreshText ="刷新";
						that.second=60;
						that.refreshFlag=0
					}
					that.lineInfo = data;
					that.queryBasicInfo();
					that.queryConstantlyInfo();
				})
			},
			queryDevCount(){
				var that=this;
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/deviceMsg/devCountTJ', 
						method:'POST',
					    data: {
					       userId:uni.getStorageSync('userInfo').userId
					    },
					    header: {
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							if(res.data.resultCode=='10000'){
								that.allDevCount = res.data.data.allDevCount
								that.errDevCount = res.data.data.errDevCount
							}else{
								uni.showModal({
								    title: '提示',
								    content: '查询终端总数失败，请重试',
									confirmText:'重试',
								    success: function (res) {
								        if (res.confirm) {
								            that.queryDevCount();
								        } else if (res.cancel) {
								            console.log('用户点击取消');
								        }
								    },
								});
							}
					    },
						fail() {
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
				}
			},
			queryDefaultLine(){
				var that=this;
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/realtimeinfo/getLineId', 
						method:'POST',
					    data: {
					       userIndex:uni.getStorageSync('userInfo').userId
					    },
					    header: {
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							if(res.data.resultCode=='10000'){
									var lineInfo = res.data.data
									if(lineInfo){
										that.lineInfo= lineInfo
										that.queryBasicInfo();
										that.queryConstantlyInfo();
									}
							}else{
								uni.hideLoading()
								uni.showModal({
								    title: '提示',
								    content: '查询默认监测点失败，请重试',
									confirmText:'重试',
								    success: function (res) {
								        if (res.confirm) {
								            that.queryBasicInfo();
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
				}
			},
			queryBasicInfo(){
				var that=this;
				uni.request({
				    url: that.serverUrl+'/realtimeinfo/getLineBaseInfo', 
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
							that.basicInfo = res.data.data
							switch(that.basicInfo.pttype){
								case 0://星型
									that.firstName = 'A相'
									that.secondName = 'B相'
									that.thirdName = 'C相'
									break;
								case 1://三角形
									that.firstName = 'AB相'
									that.secondName = 'BC相'
									that.thirdName = 'CA相'
									break;
								case 2://开口三角形
									that.firstName = 'AB相'
									that.secondName = 'BC相'
									that.thirdName = ''
									break;
							}
						}else{
							uni.hideLoading()
							uni.showModal({
							    title: '提示',
							    content: '查询基础信息失败，请重试',
								confirmText:'重试',
							    success: function (res) {
							        if (res.confirm) {
							            that.queryBasicInfo();
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
			queryConstantlyInfo(){
				var that=this;
				uni.showLoading({
					mask:true,
					title:'加载中...'
				})
				uni.request({
				    url: that.serverUrl+'/realtimeinfo/getRealData', 
					method:'POST',
				    data: {
				       lineIndex:that.lineInfo.lineIndex
				    },
				    header: {
				        'content-type': 'application/x-www-form-urlencoded'
				    },
					sslVerify:false,
				    success: (res) => {
						uni.hideLoading()
						that.doneQuery = 1
						if(res.data.resultCode=='10000'){
							var result= res.data.data;
							that.constantlyInfo = result;
							that.showTime = that.formatTime_second(result.timeId);
							that.maxAA= result.iMax;
							that.maxAB= result.iMax;
							that.maxAC= result.iMax;
							that.maxKVA= result.vMax;
							that.maxKVB= result.vMax;
							that.maxKVC= result.vMax;
							that.createAnimationKVA(parseFloat(result.rmsVA)/parseFloat(result.vMax)*90);
							that.createAnimationKVB(parseFloat(result.rmsVB)/parseFloat(result.vMax)*90);
							that.createAnimationKVC(parseFloat(result.rmsVC)/parseFloat(result.vMax)*90);
							that.createAnimationAA(parseFloat(result.rmsIA)/parseFloat(result.iMax)*90);
							that.createAnimationAB(parseFloat(result.rmsIB)/parseFloat(result.iMax)*90);
							that.createAnimationAC(parseFloat(result.rmsIC)/parseFloat(result.iMax)*90);
							// that.drawCurrent(0,0,0,45,90,135)
							// that.drawVoltage(0,0,0,-45,-90,-135)
							that.drawCurrent(result.baseWaveIA,result.baseWaveIB,result.baseWaveIC,result.baseWavePhaseIA*-1,result.baseWavePhaseIB*-1,result.baseWavePhaseIC*-1)
							that.drawVoltage(result.baseWaveVA,result.baseWaveVB,result.baseWaveVC,result.baseWavePhaseVA*-1,result.baseWavePhaseVB*-1,result.baseWavePhaseVC*-1)
						}else{
							uni.showModal({
							    title: '提示',
							    content: '查询失败，请重试',
								confirmText:'重试',
							    success: function (res) {
							        if (res.confirm) {
							            that.queryConstantlyInfo();
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
			drawCurrent(currentA,currentB,currentC,angleA,angleB,angleC){
				var that = this;
				if(currentA==currentB&&currentA==currentC){
					that.currentAWidth = '80rpx';
					that.currentBWidth = '80rpx';
					that.currentCWidth = '80rpx';
					that.createAnimationCurrentA(angleA,'20%');
					that.createAnimationCurrentB(angleB,'20%');
					that.createAnimationCurrentC(angleC,'20%');
				}else if(currentA==currentB&&currentA>currentC){
					that.currentAWidth = '80rpx';
					that.currentBWidth = '80rpx';
					that.currentCWidth = '60rpx';
					that.createAnimationCurrentA(angleA,'20%');
					that.createAnimationCurrentB(angleB,'20%');
					that.createAnimationCurrentC(angleC,'26.6%');
				}else if(currentA==currentB&&currentA<currentC){
					that.currentAWidth = '80rpx';
					that.currentBWidth = '80rpx';
					that.currentCWidth = '100rpx';
					that.createAnimationCurrentA(angleA,'20%');
					that.createAnimationCurrentB(angleB,'20%');
					that.createAnimationCurrentC(angleC,'16%');
				}else if(currentA==currentC&&currentA>currentB){
					that.currentAWidth = '80rpx';
					that.currentBWidth = '60rpx';
					that.currentCWidth = '80rpx';
					that.createAnimationCurrentA(angleA,'20%');
					that.createAnimationCurrentB(angleB,'26.6%');
					that.createAnimationCurrentC(angleC,'20%');
				}else if(currentA==currentC&&currentA<currentB){
					that.currentAWidth = '80rpx';
					that.currentBWidth = '100rpx';
					that.currentCWidth = '80rpx';
					that.createAnimationCurrentA(angleA,'20%');
					that.createAnimationCurrentC(angleC,'16%');
					that.createAnimationCurrentB(angleB,'20%');
				}else if(currentB==currentC&&currentA>currentB){
					that.currentAWidth = '100rpx';
					that.currentBWidth = '80rpx';
					that.currentCWidth = '80rpx';
					that.createAnimationCurrentA(angleA,'16%');
					that.createAnimationCurrentB(angleB,'20%');
					that.createAnimationCurrentC(angleC,'20%');
				}else if(currentB==currentC&&currentA<currentB){
					that.currentAWidth = '60rpx';
					that.currentBWidth = '80rpx';
					that.currentCWidth = '80rpx';
					that.createAnimationCurrentA(angleA,'26.6%');
					that.createAnimationCurrentB(angleB,'20%');
					that.createAnimationCurrentC(angleC,'20%');
				}else{
					//排序
					var sortVoltage = [];
					sortVoltage.push({"name":1,"value":currentA});
					sortVoltage.push({"name":2,"value":currentB});
					sortVoltage.push({"name":3,"value":currentC});
					sortVoltage.sort(function(a,b){
						return a.value-b.value;
					})
					for(var i=0;i<sortVoltage.length;i++){
						if(i==0){
							if(sortVoltage[i].name==1){
								that.currentAWidth = '60rpx';
								that.createAnimationCurrentA(angleA,'26.6%');
							}else if(sortVoltage[i].name==2){
								that.currentBWidth = '60rpx';
								that.createAnimationCurrentB(angleB,'26.6%');
							}else{
								that.currentCWidth = '60rpx';
								that.createAnimationCurrentC(angleC,'26.6%');
							}
						}else if(i==1){
							if(sortVoltage[i].name==1){
								that.currentAWidth = '80rpx';
								that.createAnimationCurrentA(angleA,'20%');
							}else if(sortVoltage[i].name==2){
								that.currentBWidth = '80rpx';
								that.createAnimationCurrentB(angleB,'20%');
							}else{
								that.currentCWidth = '80rpx';
								that.createAnimationCurrentC(angleC,'20%');
							}
						}else{
							if(sortVoltage[i].name==1){
								that.currentAWidth = '100rpx';
								that.createAnimationCurrentA(angleA,'16%');
							}else if(sortVoltage[i].name==2){
								that.currentBWidth = '100rpx';
								that.createAnimationCurrentB(angleB,'16%');
							}else{
								that.currentCWidth = '100rpx';
								that.createAnimationCurrentC(angleC,'16%');
							}
						}
					}
				}
			},
			drawVoltage(voltageA,voltageB,voltageC,angleA,angleB,angleC){
				var that = this;
				if(voltageA==voltageB&&voltageA==voltageC){
					that.voltageAWidth = '145rpx';
					that.voltageBWidth = '145rpx';
					that.voltageCWidth = '145rpx';
					that.createAnimationVoltageA(angleA,'11%');
					that.createAnimationVoltageB(angleB,'11%');
					that.createAnimationVoltageC(angleC,'11%');
				}else if(voltageA==voltageB&&voltageA>voltageC){
					that.voltageAWidth = '145rpx';
					that.voltageBWidth = '145rpx';
					that.voltageCWidth = '130rpx';
					that.createAnimationVoltageA(angleA,'11%');
					that.createAnimationVoltageB(angleB,'11%');
					that.createAnimationVoltageC(angleC,'12.3%');
				}else if(voltageA==voltageB&&voltageA<voltageC){
					that.voltageAWidth = '145rpx';
					that.voltageBWidth = '145rpx';
					that.voltageCWidth = '160rpx';
					that.createAnimationVoltageA(angleA,'11%');
					that.createAnimationVoltageB(angleB,'11%');
					that.createAnimationVoltageC(angleC,'10%');
				}else if(voltageA==voltageC&&voltageA>voltageB){
					that.voltageAWidth = '145rpx';
					that.voltageBWidth = '130rpx';
					that.voltageCWidth = '145rpx';
					that.createAnimationVoltageA(angleA,'11%');
					that.createAnimationVoltageB(angleB,'12.3%');
					that.createAnimationVoltageC(angleC,'11%');
				}else if(voltageA==voltageC&&voltageA<voltageB){
					that.voltageAWidth = '145rpx';
					that.voltageBWidth = '160rpx';
					that.voltageCWidth = '145rpx';
					that.createAnimationVoltageA(angleA,'11%');
					that.createAnimationVoltageB(angleB,'10%');
					that.createAnimationVoltageC(angleC,'11%');
				}else if(voltageB==voltageC&&voltageA>voltageB){
					that.voltageAWidth = '160rpx';
					that.voltageBWidth = '145rpx';
					that.voltageCWidth = '145rpx';
					that.createAnimationVoltageA(angleA,'10%');
					that.createAnimationVoltageB(angleB,'11%');
					that.createAnimationVoltageC(angleC,'11%');
				}else if(voltageB==voltageC&&voltageA<voltageB){
					that.voltageAWidth = '130rpx';
					that.voltageBWidth = '145rpx';
					that.voltageCWidth = '145rpx';
					that.createAnimationVoltageA(angleA,'12.3%');
					that.createAnimationVoltageB(angleB,'11%');
					that.createAnimationVoltageC(angleC,'11%');
				}else{
					//排序
					var sortVoltage = [];
					sortVoltage.push({"name":1,"value":voltageA});
					sortVoltage.push({"name":2,"value":voltageB});
					sortVoltage.push({"name":3,"value":voltageC});
					sortVoltage.sort(function(a,b){
						return a.value-b.value;
					})
					for(var i=0;i<sortVoltage.length;i++){
						if(i==0){
							if(sortVoltage[i].name==1){
								that.voltageAWidth = '130rpx';
								that.createAnimationVoltageA(angleA,'12.3%');
							}else if(sortVoltage[i].name==2){
								that.voltageBWidth = '130rpx';
								that.createAnimationVoltageB(angleB,'12.3%');
							}else{
								that.voltageCWidth = '130rpx';
								that.createAnimationVoltageC(angleC,'12.3%');
							}
						}else if(i==1){
							if(sortVoltage[i].name==1){
								that.voltageAWidth = '145rpx';
								that.createAnimationVoltageA(angleA,'11%');
							}else if(sortVoltage[i].name==2){
								that.voltageBWidth = '145rpx';
								that.createAnimationVoltageB(angleB,'11%');
							}else{
								that.voltageCWidth = '145rpx';
								that.createAnimationVoltageC(angleC,'11%');
							}
						}else{
							if(sortVoltage[i].name==1){
								that.voltageAWidth = '160rpx';
								that.createAnimationVoltageA(angleA,'10%');
							}else if(sortVoltage[i].name==2){
								that.voltageBWidth = '160rpx';
								that.createAnimationVoltageB(angleB,'10%');
							}else{
								that.voltageCWidth = '160rpx';
								that.createAnimationVoltageC(angleC,'10%');
							}
						}
					}
				}
			},
			refreshValue(){
				var that = this;
				that.refreshFlag=1
				that.queryBasicInfo();
				that.queryConstantlyInfo();
				if(that.second!=60){
					return;
				}
				that.second--;
				var intervalID =setInterval(function(){
					that.refreshText ='刷新('+that.second-- +"S)";
				},1000);
				that.intervalID = intervalID;
				setTimeout(function(){
					if(that.intervalID!='done'&&that.intervalID==intervalID){
						clearInterval(that.intervalID);
						that.intervalID = 'done';
						that.refreshText ="刷新";
						that.second=60;
						that.refreshFlag=0
					}
				},61000)
			},
			jumpToSpectrum(){
				var that = this;
				uni.navigateTo({
					url: '../spectrum/spectrum?lineInfo='+JSON.stringify(that.lineInfo),
				});
			},
			jumpToTerminalStatusAll(){
				var that = this;
				uni.navigateTo({
					url: '../terminalStatusAll/terminalStatusAll'
				});
			},
			createAnimationKVA(num){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: "100% 50%",
				})
				that.animationKVA = animation;
				animation.rotate(num).step()
				that.animationDataKVA  = animation.export();
			},
			createAnimationKVB(num){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: "100% 50%",
				})
				that.animationKVB = animation;
				animation.rotate(num).step()
				that.animationDataKVB = animation.export();
			},
			createAnimationKVC(num){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: "100% 50%",
				})
				that.animationKVC = animation;
				animation.rotate(num).step()
				that.animationDataKVC = animation.export();
			},
			createAnimationAA(num){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: "50% 100%",
				})
				that.animationAA = animation;
				animation.rotate(num).step()
				that.animationDataAA = animation.export();
			},
			createAnimationAB(num){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: "50% 100%",
				})
				that.animationAB = animation;
				animation.rotate(num).step()
				that.animationDataAB = animation.export();
			},
			createAnimationAC(num){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: "50% 100%",
				})
				that.animationAC = animation;
				animation.rotate(num).step()
				that.animationDataAC = animation.export();
			},
			createAnimationCurrentA(num,percentX){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: percentX+" 50%",
				})
				that.animationCurrentA = animation;
				animation.rotate(num).step()
				that.animationDataCurrentA = animation.export();
			},
			createAnimationCurrentB(num,percentX){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: percentX+" 50%",
				})
				that.animationCurrentB = animation;
				animation.rotate(num).step()
				that.animationDataCurrentB = animation.export();
			},
			createAnimationCurrentC(num,percentX){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: percentX+" 50%",
				})
				that.animationCurrentC = animation;
				animation.rotate(num).step()
				that.animationDataCurrentC = animation.export();
			},
			createAnimationVoltageA(num,percentX){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: percentX+" 50%",
				})
				that.animationVoltageA = animation;
				animation.rotate(num).step()
				that.animationDataVoltageA = animation.export();
			},
			createAnimationVoltageB(num,percentX){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: percentX+" 50%",
				})
				that.animationVoltageB = animation;
				animation.rotate(num).step()
				that.animationDataVoltageB = animation.export();
			},
			createAnimationVoltageC(num,percentX){
				var that=this;
				var animation = uni.createAnimation({
				    duration: 1000,
				    timingFunction: 'ease',
					transformOrigin: percentX+" 50%",
				})
				that.animationVoltageC = animation;
				animation.rotate(num).step()
				that.animationDataVoltageC = animation.export();
			},
			setPointWidth(currentA,currentB,currentC,voltageA,voltageB,voltageC){
				// 60 26.6%
				// 80 20%
				// 100 16%
				// 130 12.3%
				// 145 11%
				// 160 10%
				var that= this;
				that.currentAWidth = '100rpx';
				that.createAnimationCurrentA(90,'16%')
			},
		},
		onLoad() {
			var that =this;
			that.scrollH();
			
			that.queryDefaultLine();
			// console.log(uni.getStorageSync('userInfo').userId)
		},
		onShow() {
			var that =this;
			that.queryDevCount();
		}
	}
</script>

<style>
@import url("data.css");
</style>
