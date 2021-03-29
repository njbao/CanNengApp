<template>
	<view class="data-body" >
		<view class="title-padding">
			
		</view>
	     <view class="data-title">
	     	<view class="data-title-text">
	     		实时信息
	     	</view>
	     </view>
		 <!-- tab选项 -->
		<view class="data-tab">
			<view class="tab-click" v-if="tabNum==1">
						暂态事件消息
				<view class="tab-noread-num-transient" v-if="transientShowNum!=0">
					{{transientShowNum}}
				</view>		
			</view>
			<view class="tab" v-else  @click='changeTab(1)'>
						暂态事件消息
				<view class="tab-noread-num-transient" v-if="transientShowNum!=0">
					{{transientShowNum}}
				</view>	
			</view>
			<view class="tab-click" v-if="tabNum==2">
						稳态越限消息
				<view class="tab-noread-num-steady" v-if="steadyShowNum!=0">
					{{steadyShowNum}}
				</view>			
			</view>
			<view class="tab" v-else @click='changeTab(2)'>
						稳态越限消息
				<view class="tab-noread-num-steady" v-if="steadyShowNum!=0">
					{{steadyShowNum}}
				</view>			
			</view>
			<view class="tab-click" v-if="tabNum==3">
						终端状态消息
				<view class="tab-noread-num-terminal" v-if="terminalShowNum!=0">
					{{terminalShowNum}}
				</view>			
			</view>
			<view class="tab" v-else @click='changeTab(3)'>
						终端状态消息
				<view class="tab-noread-num-terminal" v-if="terminalShowNum!=0">
					{{terminalShowNum}}
				</view>			
			</view>
		</view>
		<view class="pull-block" :style="{height:pullHeight}" v-if="pullFlag==1">
			{{pullText}}
		</view>
		<swiper  :style="{height:scrollHeight}" :current="current" @change="changeTabBySwiper" duration="300" skip-hidden-item-layout="true">
			<swiper-item>
				<view class="transient-block"  :style="{height:scrollHeight}" @touchmove="transientTouchmove" @touchstart="transientTouchstart" @touchend="transientTouchend">
					<scroll-view :scroll-y="scrollFlag"  @scrolltolower="queryTransientList()" @lower-threshold='0' :style="{height:scrollHeight}" @scroll='transientScrollMove'  v-if="transientList.length>0">
							<view class="transient-event-block" @click="jumpToTransientDetails(transient.eventDetailIndex,transient.eventMsgIndex,transientListIndex,transient.state)" v-for="(transient,transientListIndex) in transientList">
								<view class="transient-event">
									<image src="../../static/pic/transient.png" class="transient-event-pic"></image>
									<image src="../../static/pic/dot.png" class="transient-event-noread" v-if="transient.state==0"></image>
									<view class="transient-event-content">
										<view class="line-one">
											<view class="">
												{{transient.lineName}}
											</view>
											<view class="">
												于{{transient.showTime}}发生暂降事件
											</view>
											<view class="">
												特征幅值:{{transient.eventValue}}%,持续时间:{{transient.persistTime}}s
											</view>
										</view>
										<view class="line-two">
											<view class="line-two-left">
												台账信息：
											</view>
											<view class="line-two-right">
												{{transient.lineInfo}}
											</view>
										</view>
									</view>	
								</view>
							</view>
					</scroll-view>
					<view class="no-data" :style="{height:scrollHeight}" v-else>
						{{noTransient}}
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="transient-block"  :style="{height:scrollHeight}" @touchmove="steadyTouchmove" @touchstart="steadyTouchstart" @touchend="steadyTouchend">
					<scroll-view :scroll-y="scrollFlag" style="" @scrolltolower="querySteadyList" :style="{height:scrollHeight}" @scroll='steadyScrollMove' v-if="steadyList.length>0">
					<view class="steady-event-block" @click="jumpToSteady(steady.showTime,steady.steadyIndex,steadyListIndex,steady.state)"  v-for="(steady,steadyListIndex) in steadyList">
						<view class="steady-event">
							<image src="../../static/pic/steady.png" class="steady-event-pic"></image>
							<image src="../../static/pic/dot.png" class="transient-event-noread" v-if="steady.state==0"></image>
							<view class="transient-event-content">
								<view class="">
									{{steady.showTime}}
								</view> 
								<view class="">
									发生稳态越限监测点{{steady.lineNum}}个
								</view>
							</view>
						</view>
					</view>
					</scroll-view>
					<view class="no-data" :style="{height:scrollHeight}" v-else>
						{{noSteady}}
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="transient-block"  :style="{height:scrollHeight}" @touchmove="terminalTouchmove" @touchstart="terminalTouchstart" @touchend="terminalTouchend">
					<scroll-view :scroll-y="scrollFlag"  @scrolltolower="queryTerminalList()" :style="{height:scrollHeight}" @scroll='terminalScrollMove' v-if="terminalList.length>0">
					<view class="steady-event-block" @click="jumpToTerminal(terminal.showTime,terminal.devMsgIndex,terminalListIndex,terminal.state)" v-for="(terminal,terminalListIndex) in terminalList">
						<view class="steady-event">
							<image src="../../static/pic/terminal.png" class="steady-event-pic"></image>
							<image src="../../static/pic/dot.png" class="transient-event-noread" v-if="terminal.state==0"></image>
							<view class="transient-event-content">
								<view class="">
									{{terminal.showTime}}
								</view> 
								<view class="">
									终端异常共{{terminal.limitNum}}台
								</view>
							</view>
						</view>
					</view>
					</scroll-view>
					<view class="no-data" :style="{height:scrollHeight}" v-else>
						{{noTerminal}}
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					tabNum:1,//1-暂态 2-稳态 3-终端状态
					terminalNum:0,
					terminalShowNum:0,
					steadyNum:0,
					steadyShowNum:0,
					transientNum:0,
					transientShowNum:0,
					transientPage:1,
					steadyPage:1,
					terminalPage:1,
					transientList:[],
					steadyList:[],
					terminalList:[],
					scrollHeight:'',
					eventMsgIndexList:[],
					steadyIndexList:[],
					devMsgIndexList:[],
					allNum:0,
					transientScrollTop:0,
					steadyScrollTop:0,
					terminalScrollTop:0,
					pullHeight:'',
					pullFlag:0,
					startY:0,
					pullText:'下拉刷新',
					transientRefreshFlag:0,
					steadyRefreshFlag:0,
					terminalRefreshFlag:0,
					current:0,
					scrollFlag:true,
					noTransient:'',
					noSteady:'',
					noTerminal:''
			}
		},
		methods: {
			transientScrollMove(e){
				this.transientScrollTop = e.detail.scrollTop;
			},
			transientTouchstart(e){
				this.startY = e.touches[0].clientY;
			},
			transientTouchmove(e){
				var that= this;
				if(that.transientScrollTop<2){
					var h =  e.changedTouches[0].clientY - that.startY;
					if(h>66||h<0){
						return;
					}else if(h<33){
						that.pullText='下拉刷新';
						that.pullHeight =h+'px';
						that.pullFlag=1;
					}else{
						that.pullText = '加载中...';
						that.pullHeight =h+'px';
						that.pullFlag=1;
						that.transientRefreshFlag=1;
						that.communicateState();
					}
				}
			},
			transientTouchend(e){
				var that = this;
				that.scrollFlag=false;
				setTimeout(function(){
					that.scrollFlag=true;
				},30)
				that.transientScrollTop=0;
				that.pullHeight='';
				that.startY=0;
				that.pullText='下拉刷新';
				that.pullFlag=0;
				if(that.transientRefreshFlag==1){
					that.transientRefreshFlag=0;
					that.transientList=[];
					that.noTransient = '';
					that.transientNum=0;
					that.transientPage=1;
					that.queryTransientList();
				}
				
			},
			steadyScrollMove(e){
				this.steadyScrollTop = e.detail.scrollTop;
			},
			steadyTouchstart(e){
				this.startY = e.touches[0].clientY;
			},
			steadyTouchmove(e){
				var that= this;
				if(that.steadyScrollTop<2){
					var h =  e.changedTouches[0].clientY - that.startY;
					if(h>66||h<0){
						return;
					}else if(h<33){
						that.pullText='下拉刷新';
						that.pullHeight =h+'px';
						that.pullFlag=1;
					}else{
						that.pullText = '加载中...';
						that.pullHeight =h+'px';
						that.pullFlag=1;
						that.steadyRefreshFlag=1;
						that.communicateState();
					}
				}
			},
			steadyTouchend(e){
				var that = this;
				that.scrollFlag=false;
				setTimeout(function(){
					that.scrollFlag=true;
				},30)
				that.steadyScrollTop=0;
				that.pullHeight='';
				that.startY=0;
				that.pullText='下拉刷新';
				that.pullFlag=0;
				if(that.steadyRefreshFlag==1){
					that.steadyRefreshFlag=0;
					that.steadyList=[];
					that.noSteady = '';
					that.steadyNum=0;
					that.steadyPage=1;
					that.querySteadyList();
				}
			},
			terminalScrollMove(e){
				this.terminalScrollTop = e.detail.scrollTop;
			},
			terminalTouchstart(e){
				this.startY = e.touches[0].clientY;
			},
			terminalTouchmove(e){
				var that= this;
				if(that.terminalScrollTop<2){
					var h =  e.changedTouches[0].clientY - that.startY;
					if(h>66||h<0){
						return;
					}else if(h<33){
						that.pullText='下拉刷新';
						that.pullHeight =h+'px';
						that.pullFlag=1;
					}else{
						that.pullText = '加载中...';
						that.pullHeight =h+'px';
						that.pullFlag=1;
						that.terminalRefreshFlag=1;
						that.communicateState();
					}
				}
			},
			terminalTouchend(e){
				var that= this;
				that.scrollFlag=false;
				setTimeout(function(){
					that.scrollFlag=true;
				},30)
				that.terminalScrollTop=0;
				that.pullHeight='';
				that.startY=0;
				that.pullText='下拉刷新';
				that.pullFlag=0;
				if(that.terminalRefreshFlag==1){
					that.terminalRefreshFlag=0;
					that.terminalList=[];
					that.noTerminal = '';
					that.terminalNum=0;
					that.terminalPage=1;
					that.queryTerminalList();
				}
			},
			scrollH(){
				var that =this;
				var sys = uni.getSystemInfoSync();
				var winWidth = sys.windowWidth;
				var winrate = 750/winWidth;
				var winHeight= sys.windowHeight;
				var statusBarHeight = sys.statusBarHeight;
				that.scrollHeight = parseInt((winHeight-statusBarHeight)*winrate-152)+'rpx';
			},
			changeTab(tabNum){
				var that=this;
				that.current=tabNum-1;
				that.tabNum=tabNum;
			},
			changeTabBySwiper(e){
				this.tabNum=e.detail.current+1;
				this.current=e.detail.current;
			},
			jumpToTransientDetails(eventDetailIndex,eventMsgIndex,transientListIndex,state){
				var that =this;
				if(that.transientNum>0&&state==0){
					that.transientNum--;
					that.eventMsgIndexList.push(eventMsgIndex);
					that.transientList[transientListIndex].state=1;
				}
				that.judgeTransientNum();
				that.setAllNum();
				that.communicateState();
				uni.navigateTo({
					url:'../transientDetails/transientDetails?eventDetailIndex='+eventDetailIndex+"&eventMsgIndex="+eventMsgIndex
				})
			},
			jumpToSteady(showTime,steadyIndex,steadyListIndex,state){
				var that = this;
				if(that.steadyNum>0&&state==0){
					that.steadyNum--;
					that.steadyIndexList.push(steadyIndex);
					that.steadyList[steadyListIndex].state=1;
				}
				that.judgeSteadyNum();
				that.setAllNum();
				that.communicateState();
				uni.navigateTo({
					url:'../steady/steady?steadyIndex='+steadyIndex+"&showTime="+showTime
				})
			},
			jumpToTerminal(showTime,devMsgIndex,terminalListIndex,state){
				var that = this;
				if(that.terminalNum>0&&state==0){
					that.terminalNum--;
					that.devMsgIndexList.push(devMsgIndex);
					that.terminalList[terminalListIndex].state=1;
				}
				that.judgeTerminalNum();
				that.setAllNum();
				that.communicateState();
				uni.navigateTo({
					url:'../terminal/terminal?devMsgIndex='+devMsgIndex+"&showTime="+showTime
				})
			},
			// 同步读取状态
			communicateState(){
				var that = this;
				uni.request({
				    url: that.serverUrl+'/cleanmsg/clearMsg', 
					method:'POST',
				    data: {
				       eventMsgList:that.eventMsgIndexList,
					   steadyMsgList:that.steadyIndexList,
					   deviceMsgList:that.devMsgIndexList
				    },
				    header: {
				        'content-type': 'application/x-www-form-urlencoded'
				    },
					sslVerify:false,
				    success: (res) => {
						if(res.data.resultCode=='10000'){
							console.log('同步成功')
						}else{
							console.log('同步失败')
						}
				    },
					fail:(re)=>{
						console.log('同步网络异常')
					}
				});
			},
			// 暂态
			queryTransientList(){
				var that = this;
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/eventmsg/eventDetailList', 
						method:'POST',
					    data: {
					       userId:uni.getStorageSync('userInfo').userId,
						   page:that.transientPage++,
						   num:20
					    },
					    header: {
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							uni.hideLoading();
							if(res.data.resultCode=='10000'){
								that.transientNum=res.data.unstate;
								that.judgeTransientNum();
								var list =[];
								list = that.countTransientNum(eval(res.data.data),1);
								if(that.transientPage==2){
									that.transientList = []
								}
								if(list!=null&&list!=undefined&&list!=''&&list!=[]){
									that.transientList = that.transientList.concat(list);
								}
								if(that.transientList.length==0){
									that.noTransient = '暂无暂态消息'
								}
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
			},
			countTransientNum(list,type){
				var that = this;
				if(type==1){
					for(var i=0;i<list.length;i++){
						// if(list[i].state==0&&that.transientNum!='99+'){
						// 	that.transientNum++;
						// }
						list[i].showTime = that.formatTime_mills(list[i].timeID);
					}
				}else{
					var num=0
					for(var i=0;i<list.length;i++){
						if(list[i].state==0){
							num++;
						}
						that.transientNum=num;
					}
				}
				that.setAllNum();
				// if(that.transientNum>99){
				// 	that.transientNum='99+'
				// }
				return list;
			},
			judgeTransientNum(){
				var that= this;
				if(that.transientNum>99){
					that.transientShowNum='99+'
				}else{
					that.transientShowNum=that.transientNum
				}
			},
			//稳态
			querySteadyList(){
				var that = this;
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/steadymsg/steadyState', 
						method:'POST',
					    data: {
					       userId:uni.getStorageSync('userInfo').userId,
						   page:that.steadyPage++,
						   num:20
					    },
					    header: { 
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							uni.hideLoading();
							if(res.data.resultCode=='10000'){
								that.steadyNum=res.data.unstate;
								that.judgeSteadyNum();
								var list =[];
								list = that.countSteadyNum(eval(res.data.data),1);
								if(that.steadyPage==2){
									that.steadyList =[]
								}
								if(list!=null&&list!=undefined&&list!=''&&list!=[]){
									that.steadyList = that.steadyList.concat(list);
								}
								if(that.steadyList.length == 0){
									that.noSteady = '暂无稳态越限消息'
								}
							}else{
								uni.showModal({
								    title: '提示',
								    content: '查询失败，请重试',
									confirmText:'重试',
								    success: function (res) {
								        if (res.confirm) {
											that.steadyPage--;
								            that.querySteadyList();
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
			},
			countSteadyNum(list,type){
				var that = this;
				if(type==1){
					for(var i=0;i<list.length;i++){
						// if(list[i].state==0&&that.steadyNum!='99+'){
						// 	that.steadyNum++;
						// }
						list[i].showTime = that.formatTime(list[i].timeID);
					}
				}else{
					var num=0
					for(var i=0;i<list.length;i++){
						if(list[i].state==0){
							num++;
						}
						that.steadyNum=num;
					}
				}
				that.setAllNum();
				// if(that.steadyNum>99){
				// 	that.steadyNum='99+'
				// }
				return list;
			},
			judgeSteadyNum(){
				var that= this;
				if(that.steadyNum>99){
					that.steadyShowNum='99+'
				}else{
					that.steadyShowNum=that.steadyNum
				}
			},
			//终端
			queryTerminalList(){
				var that = this;
				if(that.judgeLogin()){
					uni.request({
					    url: that.serverUrl+'/deviceMsg/deviceMsgList', 
						method:'POST',
					    data: {
					       userId:uni.getStorageSync('userInfo').userId,
						   page:that.terminalPage++,
						   num:20
					    },
					    header: {
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							uni.hideLoading();
							if(res.data.resultCode=='10000'){
								that.terminalNum=res.data.unstate;
								that.judgeTerminalNum();
								var list =[];
								list= that.countTerminalNum(eval(res.data.data),1);
								if(that.terminalPage==2){
									that.terminalList=[]
								}
								if(list!=null&&list!=undefined&&list!=''&&list!=[]){
									that.terminalList = that.terminalList.concat(list);
								}
								if(that.terminalList.length==0){
									that.noTerminal='暂无终端越限消息'
								}
							}else{
								uni.showModal({
								    title: '提示',
								    content: '查询失败，请重试',
									confirmText:'重试',
								    success: function (res) {
								        if (res.confirm) {
											that.terminalPage--;
								            that.queryTerminalList();
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
			},
			countTerminalNum(list,type){
				var that = this;
				if(type==1){
					for(var i=0;i<list.length;i++){
						// if(list[i].state==0&&that.terminalNum!='99+'){
						// 	that.terminalNum++;
						// }
						list[i].showTime = that.formatTime(list[i].timeID);
					}
				}else{
					var num=0
					for(var i=0;i<list.length;i++){
						if(list[i].state==0){
							num++;
						}
						that.terminalNum=num;
					}
				}
				// if(that.terminalNum>99){
				// 	that.terminalNum='99+'
				// }
				that.setAllNum();
				return list;
			},
			judgeTerminalNum(){
				var that= this;
				if(that.terminalNum>99){
					that.terminalShowNum='99+'
				}else{
					that.terminalShowNum=that.terminalNum
				}
			},
			setAllNum(){
				var that = this;
				var allNum=parseInt(that.steadyNum)+parseInt(that.terminalNum)+parseInt(that.transientNum);
				// console.log("setAllNum")
				uni.setStorageSync("allNum",allNum);
				if(allNum>99){
					allNum='99+'
				}else{
					allNum=''+allNum
				}
				
				if(allNum!=0){
					uni.setTabBarBadge({
					  index: 0,
					  text: allNum
					})
				}else{
					uni.removeTabBarBadge({
						index: 0
					})
				}
			},
			refresh(){
				this.communicateState();
				this.transientList=[];
				this.steadyList=[];
				this.terminalList=[];
				this.noTransient = '';
				this.noSteady = '';
				this.noTerminal = '';
				this.steadyNum=0;
				this.terminalNum=0;
				this.transientNum=0;
				this.terminalPage=1;
				this.steadyPage=1;
				this.transientPage=1;
				this.$nextTick(function(){
					this.queryTransientList();
					this.querySteadyList();
					this.queryTerminalList();
				})
				
			}
		},
		onShow() {
			var that =this;
			var tabNum = uni.getStorageSync("tabNum");
			if(tabNum){
				that.refresh();
				that.tabNum = tabNum;
				that.current=tabNum-1;
				uni.removeStorageSync("tabNum");
				// if(tabNum==1){
				// 	that.transientList=[];
				// 	that.transientNum=0;
				// 	that.transientPage=1;
				// 	that.communicateState();
				// 	that.queryTransientList();
				// }else if(tabNum==2){
				// 	that.steadyList=[];
				// 	that.steadyNum=0;
				// 	that.steadyPage=1;
				// 	that.communicateState();
				// 	that.querySteadyList();
				// }else{
				// 	that.terminalList=[];
				// 	that.terminalNum=0;
				// 	that.terminalPage=1;
				// 	that.communicateState();
				// 	that.queryTerminalList();
				// }
			}
		},
		onLoad(e) {
			var that = this;
			// var userInfo = {};
			// userInfo.userId = '00c37ea1-b5ff-4f35-ba15-51e1c7363e20';
			// userInfo.roleCode=2;
			// uni.setStorageSync('userInfo',userInfo);
			that.queryTransientList();
			that.querySteadyList();
			that.queryTerminalList();
			that.scrollH();
			uni.$on("tabNum",function(data){
				that.refresh();
				that.tabNum=data;
				that.current=data-1;
			})
		},
		onPullDownRefresh(){
			this.refresh();
			setTimeout(function () {
			            uni.stopPullDownRefresh();
			        }, 2000);
		}
	}
</script>

<style>
@import url("information.css");
</style>
