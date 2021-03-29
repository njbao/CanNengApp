<template>
	<view class="">
		<back :pageNameFlag="pageNameFlag"  :pageName='pageName'></back>
		<view class="steadyIndex-block" v-if="errorFlag==0">
			<!-- 指标类型 -->
			<view class="index-block">
				<view class="index-title">
					<image src="../../static/pic/rectangle.png" class="index-title-left"></image>
					<view class="index-title-right">
						{{typeName}}
					</view>
				</view>
				<view class="index-content">
					<image :src="steadyTargetPicUrl" class="index-content-pic" @click="previewPic(steadyTargetPicUrl)"></image>
				</view>
			</view>
		</view>
		<view class="error-block" v-else>
			<view class="error-text">
				网络出错请重试
			</view>
			<button class="retry_button" @click="retry">重试</button>
		</view>
	</view>
</template>

<script>
	import back from '../../components/back.vue';
	export default {
		data() {
			return {
				pageNameFlag:1,
				pageName:'越限监测点详情',
				radioFlag:0,
				timeID:'',
				typeCode:'',
				lineIndex:'',
				steadyTargetPicUrl:'',
				errorFlag:0,
				typeName:''
			}
		},
		methods: {
			steadyTargetUrl(){
				 var that = this;
				 uni.request({
				 	url: that.serverUrl+'/steadymsg/steadyTargetUrl',
				 	method: 'POST',
				 	data: {
				 		lineIndex: that.lineIndex,
				 		timeID:that.timeID,
						typeCode:that.typeCode
				 	},
				 	header: {
				 		'content-type': 'application/x-www-form-urlencoded'
				 	},
				 	sslVerify: false,
				 	success: (res) => {
				 		uni.hideLoading();
				 		if (res.data.resultCode == '10000') {
				 			that.steadyTargetPicUrl = eval(res.data.data).steadyPath;
				 		} else {
				 			that.errorFlag = 1
				 		}
				 	},
				 	fail: (re) => {
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
			retry(){
				this.errorFlag=0;
				this.steadyTargetUrl();
			}
		},
		onLoad(e) {
			this.lineIndex=e.lineIndex;
			this.typeCode=e.typeCode;
			this.timeID=e.timeID;
			this.typeName=e.typeName;
			this.steadyTargetUrl();
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("steadyIndex.css");
</style>
