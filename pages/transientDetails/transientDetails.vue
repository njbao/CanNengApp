<template>
	<view class="">
		<back :pageNameFlag="pageNameFlag" :showFlag="showFlag" :pageName='pageName'></back>
		<scroll-view class="transientDetails-block" v-if="errorFlag==0" :style="{height:scrollHeight}" scroll-y="true">
			<!-- 时间模块 -->
			<view class="time-block">
				<image src="../../static/pic/time.png" class="time-pic"></image>
				<view class="time-text">
					{{baseInfo.showTime}}
				</view>
			</view>
			<!-- 基础信息 -->
			<view class="basic-block">
				<view class="basic-body">
					<view class="basic-title">
						<image src="../../static/pic/rectangle.png" class="basic-title-left"></image>
						<view class="basic-title-right">
							基础信息
						</view>
					</view>
					<view class="basic-content">
						<view class="">
							{{baseInfo.lineName}}
						</view>
						<view class="">
							发生{{transientName}}事件,特征幅值:{{baseInfo.eventValue}}%,持续时间:{{baseInfo.persistTime}}s
						</view>
					</view>
					<view class="basic-line-one">
						<view class="basic-line-one-left">
							台账信息：
						</view>
						<view class="basic-line-one-right">
							{{baseInfo.gdName}}，{{baseInfo.bdzName}}，电压等级：{{baseInfo.scale}}，网络参数:{{baseInfo.ip}}
						</view>
					</view>
					<view class="judge-block">
						<view class="judge-text">
							请您评价本次事件是否对设备造成影响
						</view>
						<!-- <view class="judge-yes" @click="changeRadioFlag(1)">
							<image src="../../static/pic/nochoose.png" class="judge-yes-pic" v-if="radioFlag==0"></image>
							<image src="../../static/pic/choose2.png" class="judge-yes-pic" v-else></image>
						</view>
						<view class="judge-yes-text" @click="changeRadioFlag(1)">
							是
						</view>
						<view class="judge-no" @click="changeRadioFlag(0)">
							<image src="../../static/pic/nochoose.png" class="judge-no-pic" v-if="radioFlag==1"></image>
							<image src="../../static/pic/choose2.png" class="judge-no-pic" v-else></image>
						</view>
						<view class="judge-no-text" @click="changeRadioFlag(0)">
							否
						</view> -->
						<image src="../../static/pic/yes.png" class="judge-pic" v-if="judgeFlag==1" @click="confirmJudge(0)"></image>
						<image src="../../static/pic/no.png" class="judge-pic" v-else @click="confirmJudge(1)"></image>
					</view>
				</view>
				<view class="basic-foot">
					<!-- <view class="basic-foot-left" @click="updateEvaluate" v-if="sendAgainFlag==0">
						{{sendAgain}}
					</view>
					<view class="basic-foot-left-grey" v-else>
						{{sendAgain}}
					</view> -->
					<view class="basic-foot-right-grey" v-if="baseInfo.report==3">
						已申请
					</view>
					<view class="basic-foot-right" @click="downloadReport" v-else-if="baseInfo.report==1">
						下载报告
					</view>
					<button class="basic-foot-right " @click="applyReport" :disabled="disabledFlag"  :loading="loadingFlag" v-else>
						报告申请
					</button>
				</view>
			</view>
			<!-- 多特征值 -->
			<view class="eigenvalues-block" v-if="backNumber>0">
				<view class="eigenvalues-title">
					<image src="../../static/pic/rectangle.png" class="eigenvalues-title-left"></image>
					<view class="eigenvalues-title-right">
						多特征值
					</view>
				</view>
				<!-- <view class="eigenvalues-content-line2">
					<view class="eigenvalues-content-line-left">
						事件段数
					</view>
					<view class="eigenvalues-content-line-right">
						{{backNumber}}
					</view>
				</view> -->
				<view class="eigenvalues-content-line3">
					<view class="eigenvalues-content-line3-left2">
						<view class="eigenvalues-content-line3-left2-left">
							事件段数：
						</view>
						<view class="eigenvalues-content-line3-left2-right">
							{{backNumber}}
						</view>
					</view>
					<view class="eigenvalues-content-line3-right2" v-if="sagReason">
						<view class="eigenvalues-content-line3-right2-left">
							暂降原因：
						</view>
						<view class="eigenvalues-content-line3-right2-right">
							{{sagReason}}
						</view>
					</view>
				</view>
				<view class="" v-for="(eigenvalue,eigenIndex) in eigenvalueList">
					<view class="eigenvalues-content-line2">
						<view class="eigenvalues-content-line-left">
							事件段{{eigenIndex+1}}
						</view>
					</view>
					<view class="eigenvalues-content-line">
						<view class="eigenvalues-content-line-left">
							波形起始点相位(°)
						</view>
						<view class="eigenvalues-content-line-right">
							<view class="eigenvalues-content-line-right-A">
								A相 {{eigenvalue.pow_a}}
							</view>
							<view class="eigenvalues-content-line-right-B">
								B相 {{eigenvalue.pow_b}}
							</view>
							<view class="eigenvalues-content-line-right-C">
								C相 {{eigenvalue.pow_c}}
							</view>
						</view>
					</view>
					<view class="eigenvalues-content-line">
						<view class="eigenvalues-content-line-left">
							跳变段电压变化率(V/ms)
						</view>
						<view class="eigenvalues-content-line-right">
							<view class="eigenvalues-content-line-right-A">
								A相 {{eigenvalue.voltagechange_Va}}
							</view>
							<view class="eigenvalues-content-line-right-B">
								B相 {{eigenvalue.voltagechange_Vb}}
							</view>
							<view class="eigenvalues-content-line-right-C">
								C相 {{eigenvalue.voltagechange_Vc}}
							</view>
						</view>
					</view>
					<view class="eigenvalues-content-line">
						<view class="eigenvalues-content-line-left">
							相位跳变(°)
						</view>
						<view class="eigenvalues-content-line-right">
							<view class="eigenvalues-content-line-right-A">
								A相 {{eigenvalue.angle_diff_ap}}
							</view>
							<view class="eigenvalues-content-line-right-B">
								B相 {{eigenvalue.angle_diff_bp}}
							</view>
							<view class="eigenvalues-content-line-right-C">
								C相 {{eigenvalue.angle_diff_cp}}
							</view>
						</view>
					</view>
					<!-- <view class="eigenvalues-content-line">
						<view class="eigenvalues-content-line-left">
							特征幅值(V)
						</view>
						<view class="eigenvalues-content-line-right">
							<view class="eigenvalues-content-line-right-A">
								A相 {{eigenvalue.ua_min}}
							</view>
							<view class="eigenvalues-content-line-right-B">
								B相 {{eigenvalue.ub_min}}
							</view>
							<view class="eigenvalues-content-line-right-C">
								C相 {{eigenvalue.uc_min}}
							</view>
						</view>
					</view> -->
					<!-- <view class="eigenvalues-content-line2">
						<view class="eigenvalues-content-line-left2">
							<view class="eigenvalues-content-line-left2-left">
								持续时间(ms)
							</view>
							<view class="eigenvalues-content-line-left2-right">
								{{eigenvalue.hold_time_dq}}
							</view>
						</view>
						<view class="eigenvalues-content-line-right2">
							<view class="eigenvalues-content-line-right2-left">
								不平衡度(%)
							</view>
							<view class="eigenvalues-content-line-right2-right">
								{{eigenvalue.bph_max_value}}
							</view>
						</view>
					</view> -->
					<view class="eigenvalues-content-line3">
						<view class="eigenvalues-content-line3-left2">
							<view class="eigenvalues-content-line3-left2-left">
								不平衡度(%)：
							</view>
							<view class="eigenvalues-content-line3-left2-right">
								{{eigenvalue.bph_max_value}}
							</view>
						</view>
						<view class="eigenvalues-content-line3-right2">
							<!-- <view class="eigenvalues-content-line3-right2-left">
								暂降原因：
							</view>
							<view class="eigenvalues-content-line3-right2-right">
								{{eigenvalue.sagReason}}
							</view> -->
							<view class="eigenvalues-content-line3-right2-left">
								暂降类型：
							</view>
							<view class="eigenvalues-content-line3-right2-right">
								{{eigenvalue.sagType}}
							</view>
						</view>
					</view>
					<!-- <view class="eigenvalues-content-line3">
						<view class="eigenvalues-content-line3-left2">
							<view class="eigenvalues-content-line3-left2-left">
								暂降类型：
							</view>
							<view class="eigenvalues-content-line3-left2-right">
								{{eigenvalue.sagType}}
							</view>
						</view>
						<view class="eigenvalues-content-line3-right2">
							<view class="eigenvalues-content-line3-right2-left">
							</view>
							<view class="eigenvalues-content-line3-right2-right">
							</view>
						</view>
					</view> -->
				</view>
			</view>
			<!-- 波形图 -->
			<view class="waveform-block">
				<view class="waveform-title">
					<image src="../../static/pic/rectangle.png" class="waveform-title-left"></image>
					<view class="waveform-title-right">
						瞬时波形图
					</view>
				</view>
				<image :src="wave.instantWaveUrl" class="waveform-pic" @click="previewPic(wave.instantWaveUrl)"  v-if="wave.instantWaveUrl"></image>
				<view  class="waveform-pic no-pic-text" v-else>
					暂无瞬时波形图
				</view>
			</view>
			<view class="waveform-block">
				<view class="waveform-title">
					<image src="../../static/pic/rectangle.png" class="waveform-title-left"></image>
					<view class="waveform-title-right">
						RMS波形图
					</view>
				</view>
				<image :src="wave.rmsWaveUrl" class="waveform-pic" @click="previewPic(wave.rmsWaveUrl)" v-if="wave.rmsWaveUrl"></image>
				<view  class="waveform-pic no-pic-text" v-else>
					暂无RMS波形图
				</view>
			</view>
		</scroll-view>
		<view class="error-block" v-else-if="errorFlag==1">
			<view class="error-text">
				网络出错请重试
			</view>
			<button class="retry_button" @click="retry">重试</button>
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
	export default {
		data() {
			return {
				pageNameFlag: 1,
				showFlag: 0,
				pageName: '暂态消息详情',
				radioFlag: 0,
				eventDetailIndex: '',
				errorFlag: 2,
				baseInfo: {},
				eigenvalueList: [],
				wave: {},
				sendAgain: '更新',
				second: 60,
				sendAgainFlag: 0,
				backNumber:0,
				eventMsgIndex:'',
				scrollHeight:'',
				loadingFlag:false,
				disabledFlag:false,
				judgeFlag:0,
				sagReason:'',
				transientName:'',
				sucessNum:0,
				baseFlag:0
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
				that.scrollHeight = parseInt((winHeight-statusBarHeight)*winrate-94)+'rpx';
			},
			changeRadioFlag(flag) {
				this.radioFlag = flag;
			},
			confirmJudge(judgeFlag){
				var that = this;
				var content = '';
				if(uni.getStorageSync('userInfo').roleCode!=0){
					uni.showModal({
						title: '提示',
						content: '您暂无评价权限',
						showCancel: false
					})
					return;
				}
				if(judgeFlag==0){
					content='确认对设备无影响？'
				}else{
					content='确认对设备有影响？'
				}
				uni.showModal({
					title:'提示',
					content: content,
					success: function (res) {
						if (res.confirm) {
							if(that.judgeLogin()){
								uni.request({
									url: that.serverUrl+'/eventmsg/eventDetailEvaluate',
									method: 'POST',
									data: {
										eventDetailIndex: that.eventDetailIndex,
										evaluate: judgeFlag,
										userId: uni.getStorageSync('userInfo').userId
									},
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									sslVerify: false,
									success: (res) => {
										uni.hideLoading();
										if (res.data.resultCode == '10000') {
											uni.showModal({
												title: '提示',
												content: '评价更新成功',
												showCancel: false
											})
											that.judgeFlag= judgeFlag;
										} else {
											uni.showModal({
												title: '提示',
												content: '评价更新失败，请重试',
												confirmText: '重试',
												success: function(res) {
													if (res.confirm) {
														that.updateEvaluate();
													} else if (res.cancel) {
														console.log('用户点击取消');
													}
												}
											})
										}
									},
									fail: (re) => {
										uni.showModal({
											title: '提示',
											content: '网络或服务器异常，请稍后再试',
											showCancel:false,
											success: function(res) {
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
						} else if (res.cancel) {
							return;
						}
					}
				});
			},
			eventDetailBaseInfo() {
				var that = this;
				uni.request({
					url: that.serverUrl+'/eventmsg/eventDetailBaseInfo',
					method: 'POST',
					data: {
						eventMsgIndex: that.eventMsgIndex
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					sslVerify: false,
					success: (res) => {
						if (res.data.resultCode == '10000') {
							that.baseInfo = eval(res.data.data);
							that.baseInfo.showTime = that.formatTime_mills(that.baseInfo.timeID);
							// that.radioFlag = that.baseInfo.evaluate;
							if(that.baseInfo.eventValue<100){
								that.transientName='暂降'
							}else{
								that.transientName='暂升'
							}
							that.judgeFlag = that.baseInfo.evaluate;
							that.sucessNum++;
							that.baseFlag=0;
							if(that.sucessNum==3){
								uni.hideLoading();
								that.errorFlag=that.baseFlag;
							}
						} else {
							that.sucessNum++;
							that.baseFlag=1
							if(that.sucessNum==3){
								uni.hideLoading();
								that.errorFlag=that.baseFlag;
							}
						}
					},
					fail: (re) => {
						that.sucessNum++;
						that.baseFlag=1
						if(that.sucessNum==3){
							uni.hideLoading();
							that.errorFlag=that.baseFlag;
						}
					}
				});
			},
			eventDetailEigenvalue() {
				var that = this;
				uni.request({
					url: that.serverUrl+'/eventmsg/eventDetailEigenvalue',
					method: 'POST',
					data: {
						eventDetailIndex: that.eventDetailIndex
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					sslVerify: false,
					success: (res) => {
						if (res.data.resultCode == '10000') {
							that.backNumber=res.data.backNumber;
							if(that.backNumber>0){
								that.sagReason=res.data.sagReason;
								that.eigenvalueList = eval(res.data.data);
							}
							that.sucessNum++;
							if(that.sucessNum==3){
								uni.hideLoading();
								that.errorFlag=that.baseFlag;
							}
						} else {
							that.backNumber = 0;
							that.sucessNum++;
							if(that.sucessNum==3){
								uni.hideLoading();
								that.errorFlag=that.baseFlag;
							}
						}
					},
					fail: (re) => {
						that.backNumber = 0;
						that.sucessNum++;
						if(that.sucessNum==3){
							uni.hideLoading();
							that.errorFlag=that.baseFlag;
						}
					}
				});
			},
			eventDetailWave() {
				var that = this;
				uni.request({
					url: that.serverUrl+'/eventmsg/eventDetailWave',
					method: 'POST',
					data: {
						eventDetailIndex: that.eventDetailIndex
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					sslVerify: false,
					success: (res) => {
						if (res.data.resultCode == '10000') {
							that.wave = eval(res.data.data);
							that.sucessNum++;
							if(that.sucessNum==3){
								uni.hideLoading();
								that.errorFlag=that.baseFlag;
							}
						} else {
							that.sucessNum++;
							if(that.sucessNum==3){
								uni.hideLoading();
								that.errorFlag=that.baseFlag;
							}
						}
					},
					fail: (re) => {
						that.sucessNum++;
						if(that.sucessNum==3){
							uni.hideLoading();
							that.errorFlag=that.baseFlag;
						}
					}
				});
			},
			updateEvaluate() {
				var that = this;
				if(that.judgeLogin()){
					that.sendAgainFlag = 1
					uni.request({
						url: that.serverUrl+'/eventmsg/eventDetailEvaluate',
						method: 'POST',
						data: {
							eventDetailIndex: that.eventDetailIndex,
							evaluate: that.radioFlag,
							userId: uni.getStorageSync('userInfo').userId
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						sslVerify: false,
						success: (res) => {
							uni.hideLoading();
							if (res.data.resultCode == '10000') {
								uni.showModal({
									title: '提示',
									content: '评价更新成功',
									showCancel: false
								})
							} else {
								uni.showModal({
									title: '提示',
									content: '评价更新失败，请重试',
									confirmText: '重试',
									success: function(res) {
										if (res.confirm) {
											that.updateEvaluate();
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									}
								})
							}
						},
						fail: (re) => {
							uni.showModal({
								title: '提示',
								content: '网络或服务器异常，请稍后再试',
								showCancel:false,
								success: function(res) {
									if (res.confirm) {
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
					});
					if (that.second != 60) {
						return;
					}
					that.second--;
					var intervalID = setInterval(function() {
						that.sendAgain = '更新(' + that.second-- + "S)";
					}, 1000);
					setTimeout(function() {
						clearInterval(intervalID);
						that.sendAgain = "更新";
						that.second = 60;
						that.sendAgainFlag = 0
					}, 61000)
				}	
			},
			applyReport() {
				var that = this;
				if(that.judgeLogin()){
					that.disabledFlag=true;
					that.loadingFlag=true;
					uni.request({
						url: that.serverUrl+'/report/eventDetailReportApply',
						method: 'POST',
						data: {
							eventDetailIndex: that.eventDetailIndex,
							userId: uni.getStorageSync('userInfo').userId
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						sslVerify: false,
						success: (res) => {
							that.loadingFlag=false;
							that.disabledFlag=false;
							if (res.data.resultCode == '10000') {
								uni.showModal({
									title: '提示',
									content: '申请报告成功',
									showCancel: false
								})
								that.eventDetailBaseInfo();
							} else {
								uni.showModal({
									title: '提示',
									content: that.showError(res.data.msgCode,res.data.msg),
									confirmText: '重试',
									success: function(res) {
										if (res.confirm) {
											that.applyReport();
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									}
								})
							}
						},
						fail: (re) => {
							that.loadingFlag=false;
							that.disabledFlag=false;
							uni.showModal({
								title: '提示',
								content: '网络或服务器异常，请稍后再试',
								showCancel:false,
								success: function(res) {
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
			downloadReport() {
				var that = this;
				if(that.judgeLogin()){
					uni.request({
						url: that.serverUrl+'/report/eventDetailReportDownLoad',
						method: 'POST',
						data: {
							eventDetailIndex: that.eventDetailIndex,
							userId: uni.getStorageSync('userInfo').userId
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						sslVerify: false,
						success: (res) => {
							uni.hideLoading();
							if (res.data.resultCode == '10000') {
								uni.showLoading({
									title:'正在下载',
									mask:true
								})
								uni.downloadFile({
									url: res.data.data.reportUrl,
									success: (r) => {
										uni.hideLoading();
										if (r.statusCode === 200) {
											uni.saveFile({
												tempFilePath: r.tempFilePath,
												success: function(res) {
													 var savedFilePath = res.savedFilePath;
													uni.showModal({
														title: '下载报告成功',
														// content: '文档保存在：jxkj/CanNengApp/apps/'+savedFilePath,
														content: '下载成功，是否直接打开',
														success: function(re) {
															if (re.confirm) {
																 uni.openDocument({
																      filePath: r.tempFilePath
																    });
															} else if (res.cancel) {
																console.log('用户点击取消');
															}
														}
													});
												},
												fail() {
													uni.showModal({
														title: '提示',
														content: '下载报告失败，请重试',
														confirmText: '重试',
														success: function(res) {
															if (res.confirm) {
																that.downloadReport();
															} else if (res.cancel) {
																console.log('用户点击取消');
															}
														}
													})
												}
											});
											
										} else {
											uni.showModal({
												title: '提示',
												content: '下载报告失败，请重试',
												confirmText: '重试',
												success: function(res) {
													if (res.confirm) {
														that.downloadReport();
													} else if (res.cancel) {
														console.log('用户点击取消');
													}
												}
											})
										}
									},
									fail() {
										uni.hideLoading();
										uni.showModal({
											title: '提示',
											content: '下载报告失败，请重试',
											confirmText: '重试',
											success: function(res) {
												if (res.confirm) {
													that.downloadReport();
												} else if (res.cancel) {
													console.log('用户点击取消');
												}
											}
										})
									}
								});
							} else {
								uni.showModal({
									title: '提示',
									content: '下载报告失败，请重试',
									confirmText: '重试',
									success: function(res) {
										if (res.confirm) {
											that.downloadReport();
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									}
								})
							}
						},
						fail: (re) => {
							uni.showModal({
								title: '提示',
								content: '网络或服务器异常，请稍后再试',
								showCancel:false,
								success: function(res) {
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
			previewPic(url) {
				if(url==null||url==undefined||url==''||url.length==0){
					return
				}
				uni.previewImage({
					urls: [url],
					current:0,
					longPressActions: {
						itemList: ['保存图片'],
						success: function(data) {
							if (data.tapIndex == 0) {
								uni.showLoading({
									title: "图片保存中"
								});
								uni.downloadFile({
									url: url,
									success(result) {
										var tempFilePath = result.tempFilePath;
										uni.saveImageToPhotosAlbum({
											filePath: tempFilePath,
											success() {
												uni.showToast({
													icon: "success",
													title: "保存成功",
													duration: 2000
												})
											}
										})
									},
									complete() {
										uni.hideLoading();
									}
								})
							}
						},
						fail: function(err) {
							uni.showModal({
							    title: '保存失败',
							    content: err.errMsg,
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
					}
				});
			},
			retry(){
				this.eventDetailBaseInfo();
				this.eventDetailEigenvalue();
				this.eventDetailWave();
			},
		},
		onLoad(e) {
			this.scrollH();
			uni.showLoading({
				mask:true
			})
			this.eventDetailIndex = e.eventDetailIndex;
			this.eventMsgIndex = e.eventMsgIndex;
			this.eventDetailBaseInfo();
			this.eventDetailEigenvalue();
			this.eventDetailWave();
		},
		components: {
			back
		}
	}
</script>

<style>
	@import url("transientDetails.css");
</style>
