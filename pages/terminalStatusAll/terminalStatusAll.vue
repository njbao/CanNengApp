<template>
	<view>
		<back  :pageNameFlag="pageNameFlag" :pageName='pageName'></back>
		<scroll-view class="terminal-status-all-block" :style="{height:scrollHeight}" scroll-y="true">
			<view class="terminal-status-all-each-block" v-for="dev in devStatusList">
				<view class="">
					{{dev.devName}}
				</view>
				<view class="terminal-status-all-each-block-fail" v-if="dev.comInfo==0">
					异常
				</view>
				<view class="terminal-status-all-each-block-sucess" v-if="dev.comInfo==1">
					正常
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import back from '../../components/back.vue';
	export default {
		data() {
			return {
				pageNameFlag:1,
				pageName:"终端状态",
				scrollHeight:'',
				devStatusList:[]
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
			queryDevComInfo(){
				var that=this;
				uni.request({
				    url: that.serverUrl+'/deviceMsg/devComInfo', 
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
							that.devStatusList = res.data.data
						}else{
							uni.showModal({
							    title: '提示',
							    content: '查询失败，请重试',
								confirmText:'重试',
							    success: function (res) {
							        if (res.confirm) {
							            that.queryDevComInfo();
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
		onLoad() {
			var that = this;
			that.scrollH();
			that.queryDevComInfo();
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("terminalStatusAll.css");
</style>
