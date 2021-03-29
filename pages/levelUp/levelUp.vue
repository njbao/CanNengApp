<template>
	<view>
		<back :pageNameFlag="pageNameFlag" :showFlag="showFlag" :pageName='pageName' :errorMsg="errorMsg"></back>
		<view class="levelUp-block">
			<input type="text" value="" placeholder="请输入6位邀请码" placeholder-class="levelUp-input-ph" class="levelUp-input" confirm-type="done" maxlength="6" @input="inputText"/>
			<view class="levelUp-click" v-if="levelUpFlag==0">
				升级
			</view>
			<button class="levelUp-click-high" v-else @click="levelUp" :disabled="disabledFlag"  :loading="loadingFlag">
				升级
			</button>
		</view>
	</view>
</template>

<script>
	import back from '../../components/back.vue';
	export default {
		data() {
			return {
				pageNameFlag:1,
				showFlag:0,
				pageName:'角色升级',
				errorMsg:'',
				levelUpFlag:0,
				content:'',
				loadingFlag:false,
				disabledFlag:false
			}
		},
		methods: {
			levelUp(){
				var that= this;
				if(that.judgeLogin()){
					that.disabledFlag=true;
					that.loadingFlag=true;
					uni.request({
						url: that.serverUrl+'/user/roleUpdate', 
						method:'POST',
						data: {
						   userId:uni.getStorageSync('userInfo').userId,
						   devCode:that.cid(),
						   referralCode:that.content
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						sslVerify:false,
						success: (res) => {
							that.loadingFlag=false;
							that.disabledFlag=false;
							if(res.data.resultCode=='10000'){
								var userInfo= uni.getStorageSync('userInfo');
								var info = eval(res.data.data);
								userInfo.roleName = info.roleName;
								userInfo.roleCode = info.roleCode;
								uni.setStorageSync('userInfo',userInfo);
								uni.showToast({
									icon:'success',
									title:'升级成功',
									duration: 2000,
									mask:true,
								})
								setTimeout(function(){
									uni.switchTab({
										url:'../me/me'
									})
								},2000)				
							}else{
								that.errorMsg=that.showError(res.data.msgCode,res.data.msg);
								that.showFlag=1
								setTimeout(function() {
									that.errorMsg='';
									that.showFlag=0;
								}, 5000);
							}
						},
						fail:(re)=>{
							that.loadingFlag=false;
							that.disabledFlag=false;
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
			inputText(e){
				var that = this;
				if(e.detail.value.length==6){
					that.levelUpFlag=1;
				}else{
					that.levelUpFlag=0;
				}
				that.content = e.detail.value;
			}
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("levelUp.css");
</style>
