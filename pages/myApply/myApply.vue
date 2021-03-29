<template>
	<view>
		<back :pageNameFlag="pageNameFlag" :pageName='pageName'></back>
		<view class="data-block" v-if="errorFlag==0">
			<view class="content-block" v-for="report in reportList">
				<view class="content-line">
					<view class="content-line-one-left">
						{{report.name}}
					</view>
					<view class="content-line-one-right">
						{{report.dateString}}
					</view>
				</view>
				<view class="line-fine">
					
				</view>
				<view class="content-line">
					<view class="content-line-left">
						报告类型
					</view>
					<view class="content-line-right">
						{{report.type}}
					</view>
					
				</view>
				<view class="line-fine">
					
				</view>
				<view class="content-line">
					<view class="content-line-left">
						营销人员
					</view>
					<view class="content-line-right">
						{{marketingUserInfo.name}}
					</view>
				</view>
				<view class="line-fine">
					
				</view>
				<view class="content-line">
					<view class="content-line-left">
						联系方式
					</view>
					<view class="content-line-right">
						{{marketingUserInfo.phone}}
					</view>
				</view>
				<view class="line-fine">
					
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
				pageName:'我的申请',
				systemType:0,
				pageNum:1,
				errorFlag:0,
				marketingUserInfo:{},
				reportList:[]
			}
		},
		methods: {
			queryList(){
				var that = this;
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/report/reportList', 
						method:'POST',
					    data: {
					       userId:uni.getStorageSync('userInfo').userId,
						   systemType:that.systemType,
						   reportType:5,
						   page:that.pageNum++,
						   num:20
					    },
					    header: {
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							uni.hideLoading();
							if(res.data.resultCode=='10000'){
								var list = that.addDateString(eval(res.data.data));
								if(list!=null&&list!=undefined&&list!=''&&list!=[]){
									that.reportList = that.reportList.concat(list);
								}
							}else{
								that.errorFlag=1
							}
					    },
						fail:(re)=>{
							that.errorFlag=1
						}
					});
				}	
			},
			queryMarketingUserInfo(){
				var that =this;
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/report/marketingUserInfo', 
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
								that.marketingUserInfo = eval(res.data.data)
							}else{
								that.errorFlag=1
							}
					    },
						fail:(re)=>{
							that.errorFlag=1
						}
					});
				}	
			},
			addDateString(list){
				var that=this;
				for(var i=0;i<list.length;i++){
					list[i].dateString = that.formatTime(list[i].startTime)+'至'+that.formatTime(list[i].endTime);
					if(((list[i].endTime-list[i].startTime)/(1000*24*60*60))>100){
						list[i].type='年报'
					}else{
						list[i].type='季报'
					}
				}
				return list;
			},
			retry(){
				this.pageNum=1;
				this.marketingUserInfo={};
				this.reportList=[];
				this.queryMarketingUserInfo();
				this.queryList();
			}
		},
		onLoad(e) {
			this.systemType=e.systemType
			this.queryMarketingUserInfo();
			this.queryList();
		},
		onReachBottom(){
			this.queryList();
		},
		components:{
			back
		}
	}
</script>

<style>
@import url("myApply.css");
</style>
