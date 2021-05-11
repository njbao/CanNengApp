<template>
	<view>
		<view class="title-padding">
			
		</view>
		<view class="history-title">
			<view class="history-title-text">
				历史数据
			</view>
		</view>
		<view class="history-block">
			<!-- 内容 -->
			<view class="content-block">
				<view class="content-block-line" @click="jumpToDataIntegrityDetails">
					<view class="content-block-line-left">
						数据完整性
					</view>
					<view class="content-block-line-right">
					<!-- 	<view class="content-block-line-right-text">
							85%
						</view> -->
						<image src="../../static/pic/jump.png" class="content-block-line-right-pic"></image>
					</view>
				</view>
				<view class="content-block-line" @click="jumpToTerminalStatus">
					<view class="content-block-line-left">
						终端在线率
					</view>
					<view class="content-block-line-right">
						<!-- <view class="content-block-line-right-text">
							85%
						</view> -->
						<image src="../../static/pic/jump.png" class="content-block-line-right-pic"></image>
					</view>
				</view>
			</view>
			<!-- 监测点信息 -->
			<view class="sroll-block-line-one" @click="jumpToCondition">
				<view class="sroll-block-line-one-text">
					<view class="">
						{{lineInfo.lineName}}
					</view>
					<view class="">
						{{startDate}}至{{endDate}}
					</view>
				</view>
				<!-- <image class="sroll-block-line-one-pic" src="../../static/pic/pull.png"></image> -->
				<image class="sroll-block-line-one-pic" src="../../static/pic/jump.png"></image>
			</view>
			<scroll-view class="sroll-block" :scroll-y="scrollFlag" :style="{height:scrollHeight}"  @scrolltolower="queryStatistics()" @touchend="touchEnd()" v-if="statisticsList.length>0">
				<view class="sroll-block-content" @click="jumpToTerminalHistory(statistics.time)" v-for="statistics in statisticsList">
					<view class="sroll-block-content-line-one">
						<view class="sroll-block-content-line-one-left">
							<image src="../../static/pic/rectangle.png" class="sroll-block-content-line-one-left-pic"></image>
							<view class="sroll-block-content-line-one-left-text">
								{{statistics.showTime}}
							</view>
						</view>
						<image class="sroll-block-content-line-one-right" src="../../static/pic/jump.png"></image>
					</view>
					<scroll-view class="sroll-block-content-line-text" scroll-y="true">
						<view class="" v-if="statistics.eventDescribe!=null">
							{{statistics.eventDescribe}}
						</view>
						<view class="" v-if="statistics.steadyDescribe!=null">
							{{statistics.steadyDescribe}}
						</view>
					</scroll-view>
					<!-- <view class="sroll-block-content-line">
						<view class="sroll-block-content-line-left">
							暂降次数
						</view>
						<view class="sroll-block-content-line-right">
							3次
						</view>
					</view>
					<view class="sroll-block-content-line">
						<view class="sroll-block-content-line-left">
							频率偏差合格率
						</view>
						<view class="sroll-block-content-line-right">
							90%
						</view>
					</view>
					<view class="sroll-block-content-line">
						<view class="sroll-block-content-line-left">
							电压畸变率合格率
						</view>
						<view class="sroll-block-content-line-right">
							90%
						</view>
					</view>
					<view class="sroll-block-content-line">
						<view class="sroll-block-content-line-left">
							奇次电压合格率
						</view>
						<view class="sroll-block-content-line-right">
							80%
						</view>
					</view> -->
				</view>
			</scroll-view>
			<view class="no-data" :style="{height:scrollHeight}" v-else>
				暂无历史数据
			</view>
		</view>
	</view>
</template>

<script>
	import back from "../../components/back.vue";
	export default {
		data() {
			return {
				pageName:'历史数据',
				pageNameFlag:1,
				backShowFlag:0,
				tabNum:1,
				page:1,
				num:20,
				scrollHeight:'',
				terminalStatus:55,
				lineInfo:{
					lineName:'暂无默认监测点，请选择',
					lineIndex:''
				},
				statisticsList:[],
				scrollFlag:true,
				roleCode:1,
				startDate:'',
				endDate:'',
				startDateMills:'',
				endDateMills:''
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
				that.scrollHeight = parseInt((winHeight-statusBarHeight)*winrate-410)+'rpx';
			},
			touchEnd(){
				var that = this;
				that.scrollFlag=false;
				setTimeout(function(){
					that.scrollFlag=true;
				},30)
			},
			changeTab(tabNum){
				this.tabNum=tabNum;
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
										that.queryStatistics();
									}
							}else{
								uni.showModal({
								    title: '提示',
								    content: '查询失败，请重试',
									confirmText:'重试',
								    success: function (res) {
								        if (res.confirm) {
								            that.queryDefaultLine();
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
			queryStatistics(){
				var that=this;
				uni.request({
				    url: that.serverUrl+'/statistics/statistics', 
					method:'POST',
				    data: {
				       lineIndex:that.lineInfo.lineIndex,
					   startTime:that.startDateMills,
					   endTime:that.endDateMills,
				       page:that.page++,
				       num:that.num
				    },
				    header: {
				        'content-type': 'application/x-www-form-urlencoded'
				    },
					sslVerify:false,
				    success: (res) => {
						if(res.data.resultCode=='10000'){
								var list= res.data.data
								if(list!=null&&list!=undefined&&list!=''&&list!=[]){
									for(var i=0;i<list.length;i++){
										list[i].showTime = that.formatTime(list[i].time);
									}
									that.statisticsList= that.statisticsList.concat(list)
								}
						}else{
							uni.showModal({
							    title: '提示',
							    content: '查询失败，请重试',
								confirmText:'重试',
							    success: function (res) {
							        if (res.confirm) {
							            that.queryStatistics();
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
			},
			chooseLine(){
				var that=this;
				uni.navigateTo({
					url:'../chooseLine/chooseLine'
				});
				uni.$once('lineInfoSelect',function(data){
					that.lineInfo = data;
					that.page=1;
					that.statisticsList=[];
					that.queryStatistics();
				});
				uni.$once('lineInfoQuery',function(data){
					that.lineInfo = data;
					that.page=1;
					that.statisticsList=[];
					that.queryStatistics();
				})
			},
			jumpToDataIntegrityDetails(){
				var userInfo=uni.getStorageSync('userInfo');
				var roleCode= userInfo.roleCode;
				if(roleCode!=0){
					uni.showModal({
						title:'提示',
						content:'您暂无权限查看',
						showCancel:false
					})
					return;
				}
				uni.navigateTo({
					url:'../dataIntegrityDetails/dataIntegrityDetails'
				})
			},
			jumpToTerminalStatus(){
				var userInfo=uni.getStorageSync('userInfo');
				var roleCode= userInfo.roleCode;
				if(roleCode!=0){
					uni.showModal({
						title:'提示',
						content:'您暂无权限查看',
						showCancel:false
					})
					return;
				}
				uni.navigateTo({
					url:'../terminalStatus/terminalStatus'
				})
			},
			jumpToTerminalHistory(timeID){
				var that=this;
				uni.navigateTo({
					url:'../terminalHistory/terminalHistory?lineInfo='+JSON.stringify(that.lineInfo)+'&timeID='+timeID
				})
			},
			jumpToCondition(){
				var that = this;
				uni.navigateTo({
					url:'../condition/condition?lineInfo='+JSON.stringify(that.lineInfo)+'&startDate='+that.startDate+'&endDate='+that.endDate+'&startDateMills='+that.startDateMills+'&endDateMills='+that.endDateMills+'&chooseDateTypeFlag=0&&chooseDateFlag=1&chooseLineFlag=1'
				})
				uni.$once('doQueryInfo',function(e){
					that.startDate = e.startDate;
					that.endDate = e.endDate;
					that.startDateMills = e.startDateMills;
					that.endDateMills = e.endDateMills;
					that.lineInfo = e.lineInfo;
					that.page=1;
					that.statisticsList=[];
					that.queryStatistics();
				})
			}
		},
		components: {
			back
		},
		onLoad() {
			var that = this;
			that.scrollH();
			that.endDate=that.formatTime(new Date());
			that.startDate=that.endDate.substring(0,8)+'01';
			that.startDateMills = Date.parse(that.startDate.replace(/-/g, '/'));
			that.endDateMills = Date.parse(that.endDate.replace(/-/g, '/'))+86399999;
			that.queryDefaultLine();
		}
	}
</script>

<style>
@import url("history.css");
</style>
