<template>
	<view>
		<back :pageNameFlag="pageNameFlag" :showFlag="showFlag" :pageName='pageName'></back>
		<!-- 波形图 -->
		<view class="waveform-block" v-if="wave.instantWaveUrl">
			<view class="waveform-title">
				<image src="../../static/pic/rectangle.png" class="waveform-title-left"></image>
				<view class="waveform-title-right">
					瞬时波形图
				</view>
			</view>
			<image :src="wave.instantWaveUrl" class="waveform-pic" @click="previewPic(wave.instantWaveUrl)"></image>
		</view>
		<view class="waveform-block"  v-if="wave.rmsWaveUrl">
			<view class="waveform-title">
				<image src="../../static/pic/rectangle.png" class="waveform-title-left"></image>
				<view class="waveform-title-right">
					RMS波形图
				</view>
			</view>
			<image :src="wave.rmsWaveUrl" class="waveform-pic" @click="previewPic(wave.rmsWaveUrl)"></image>
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
				pageName: '暂态波形图',
				eventDetailIndex: '',
				wave: {},
			}
		},
		methods: {
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
							uni.hideLoading();
						} else {
							that.errorFlag = 1
							uni.hideLoading();
						}
					},
					fail: (re) => {
						uni.hideLoading();
						that.errorFlag = 1
					}
				});
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
		},
		onLoad(e) {
			var that = this;
			that.eventDetailIndex = e.eventDetailIndex;
			uni.showLoading({
				mask:true
			})
			that.eventDetailWave();
		},
		components: {
			back
		}
	}
</script>

<style>
@import url("transientWave.css");
</style>
