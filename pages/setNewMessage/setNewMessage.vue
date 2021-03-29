<template>
	<view>
		<back :pageNameFlag="pageNameFlag" :pageName='pageName'></back>
		<view class="body-block">
			<view class="each-block">
				<view class="each-text">
					暂态消息
				</view>
				<switch class="each-switch" :checked="transientFlag" @change="changeTransientFlag"></switch>
			</view>
			<view class="each-block">
				<view class="each-text">
					稳态越限消息
				</view>
				<switch class="each-switch" :checked="steadyFlag" @change="changeSteadyFlag"></switch>
			</view>
			<view class="each-block">
				<view class="each-text">
					终端消息
				</view>
				<switch class="each-switch" :checked="terminalFlag" @change="changeTerminalFlag"></switch>
			</view>
			<view class="each-block">
				<view class="each-text">
					系统消息
				</view>
				<switch class="each-switch" :checked="systemFlag" @change="changeSystemFlag"></switch>
			</view>
		</view>
	</view>
</template>

<script>
	import back from '../../components/back.vue';
	export default {
		data() {
			return {
				pageNameFlag:1,
				pageName:'新消息提醒',
				transientFlag:true,
				steadyFlag:true,
				terminalFlag:true,
				systemFlag:true
			}
		},
		methods: {
			changeTransientFlag(e){
				uni.showLoading({
					mask:true
				});
				this.transientFlag = e.detail.value;
				this.setFlag(1,this.transientFlag);
			},
			changeSteadyFlag(e){
				uni.showLoading({
					mask:true
				});
				this.steadyFlag = e.detail.value;
				this.setFlag(2,this.steadyFlag);
			},
			changeTerminalFlag(e){
				uni.showLoading({
					mask:true
				});
				this.terminalFlag = e.detail.value;
				this.setFlag(3,this.terminalFlag);
			},
			changeSystemFlag(e){
				uni.showLoading({
					mask:true
				});
				this.systemFlag = e.detail.value;
				this.setFlag(4,this.systemFlag);
			},
			setFlag(flagName,flag){
				var that = this;
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/user/msgSet', 
						method:'POST',
					    data: {
					       userId:uni.getStorageSync('userInfo').userId,
						   eventInfo:that.transientFlag?1:0,
						   targetInfo:that.steadyFlag?1:0,
						   deviceInfo:that.terminalFlag?1:0,
						   systemInfo:that.systemFlag?1:0
					    },
					    header: {
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							uni.hideLoading();
							if(res.data.resultCode=='10000'){
								return;
							}else{
								var f=true;
								if(flag){
									f=false;
								}else{
									f=true;
								}
								if(flagName==1){
									this.transientFlag=f;
								}else if(flagName==2){
									this.steadyFlag=f;
								}else if(flagName==3){
									this.terminalFlag=f;
								}else{
									this.systemFlag=f;
								}
							}
					    },
						fail:(re)=>{
							uni.hideLoading();
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
							    },
							});
						}
					});
				}	
			},
			queryFlag(){
					var that = this;
					if(that.judgeLogin()){
						uni.request({
						    url: that.serverUrl+'/user/getMsg', 
							method:'POST',
						    data: {
						       userId:uni.getStorageSync('userInfo').userId,
							   devCode:that.cid()
						    },
						    header: {
						        'content-type': 'application/x-www-form-urlencoded'
						    },
							sslVerify:false,
						    success: (res) => {
								uni.hideLoading();
								if(res.data.resultCode=='10000'){
									var msg= eval(res.data.data);
									that.transientFlag=msg.eventInfo==1?true:false;
									that.steadyFlag=msg.targetInfo==1?true:false;
									that.terminalFlag=msg.deviceInfo==1?true:false;
									that.systemFlag=msg.systemInfo==1?true:false;
								}else{
									uni.showModal({
									    title: '提示',
									    content: '查询失败，请重试',
										confirmText:'重试',
									    success: function (res) {
									        if (res.confirm) {
												that.transientPage--;
									            that.queryTransientList();
									        } else if (res.cancel) {
									            console.log('用户点击取消');
									        }
									    },
									});
								}
						    },
							fail:(re)=>{
								uni.hideLoading();
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
								    },
								});
							}
						});
					}	
			}
		},
		onLoad() {
			this.queryFlag();
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("setNewMessage.css");
</style>
