<template>
	<view class="report-body">
		<view class="title-padding">
			
		</view>
	     <view class="report-title">
	     	<view class="report-title-text">
	     		报表任务
	     	</view>
	     </view>
		 <!-- tab选项 -->
		<view class="report-tab">
			<view class="tab-click" v-if="tabNum==1">
						稳态报表
			</view>
			<view class="tab" v-else  @click='changeTab(1)'>
						稳态报表
			</view>
			<view class="tab-click" v-if="tabNum==2">
						暂降报表
			</view>
			<view class="tab" v-else @click='changeTab(2)'>
						暂降报表
			</view>
		</view>
		<view class="line">
			
		</view>
		<swiper :style="{height:swiperHeight}" :current="current" @change="changeTabBySwiper">
			<swiper-item>
				<view class="steady-block">
					<view class="sroll-block-line-one" @click="jumpToConditionSteady">
						<view class="sroll-block-line-one-text">
							<view class="" v-if="steadyDate!='申请'">
								{{lineInfo.lineName}}
							</view>
							<view class="sroll-block-line-one-text-second">
								<view class="">
									{{steadyDate}}       
								</view>
								<view class="sroll-block-line-one-text-second-right" v-if="steadyDate!='申请'">
									{{startDate}}至{{endDate}}
								</view>
							</view>
						</view>
						<!-- <image class="sroll-block-line-one-pic" src="../../static/pic/pull.png"></image> -->
						<image class="sroll-block-line-one-pic" src="../../static/pic/jump.png"></image>
					</view>
					<!-- <view class="date-block">
						<image src="../../static/pic/rectangle.png" class="date-pic"></image>
						<view class="chooseDate-block" @click="steadyChooseDate(1)"  v-if="steadyDateChoose==0">
							<view class="date-text">
								{{steadyDate}}
							</view>
							<image src="../../static/pic/pull.png" class="date-choose" ></image>
						</view>
						<view class="chooseDate-block" @click="steadyChooseDate(0)"  v-else>
							<view class="date-text">
								{{steadyDate}}
							</view>
							<image src="../../static/pic/pull_up.png" class="date-choose"></image>
						</view>
						
					</view>
					<view class="date-choose-block" v-if="steadyDateChoose==1">
						
						<view class="date-choose-line-one-choose" @click="steadyChangeDate('周报')" v-if="steadyDate=='周报'">
							周报
						</view>
						<view class="date-choose-line-one" @click="steadyChangeDate('周报')" v-else>
							周报
						</view>
						<view class="date-choose-line-two-choose" @click="steadyChangeDate('月报')" v-if="steadyDate=='月报'">
							月报
						</view>
						<view class="date-choose-line-two" @click="steadyChangeDate('月报')" v-else>
							月报
						</view>
						<block  v-if="userInfo.roleCode==0">
							<view class="date-choose-line-three-choose" @click="steadyChangeDate('申请')"  v-if="steadyDate=='申请'">
								申请
							</view>
							<view class="date-choose-line-three" @click="steadyChangeDate('申请')" v-else>
								申请
							</view>
						</block>
					</view> -->
					<!-- 申请 -->
					<view class="apply-block" v-if="steadyDate=='申请'" :style="{height:scrollHeight}">
						<view class="apply-line">
							<view class="apply-line-left">
								报表类型
							</view>
							<picker class="apply-line-center" :range="types" @change="changeType" mode = "selector">
								{{types[typesIndex]}}
							</picker>
							<image class="apply-line-right" src="../../static/pic/jump.png"></image>
						</view>
						<view class="line-fine">
							
						</view>
						<view class="apply-line">
							<view class="apply-line-left">
								时间间隔
							</view>
							<picker class="apply-line-center" mode="selector" :range="years" @change="changeYear" value="9" v-if="typesIndex==0">
								{{years[yearsIndex]}}
							</picker>
							<picker class="apply-line-center" mode="multiSelector" :range="yearsAndQuarter" value="[9,0]" v-if="typesIndex==1" @change="changeYearsAndQuarter">
								{{yearsAndQuarter[0][yearsAndQuarterIndex1]}}--{{yearsAndQuarter[1][yearsAndQuarterIndex2]}}
							</picker>
							<image class="apply-line-right" src="../../static/pic/jump.png"></image>
						</view>
						<view class="line-fine">
							
						</view>
						<view class="apply-line" @click="jumpToChooseLine(2)">
							<view class="apply-line-left">
								监测点选择
							</view>
							<view class="apply-line-center">
								{{steadyLine.lineName}}
							</view>
							<image class="apply-line-right" src="../../static/pic/jump.png"></image>
						</view>
						<view class="line-fine">
							
						</view>
						<button class="apply-button1" @click="applyReport(2)" :disabled="disabledFlag"  :loading="loadingFlag">申请</button>
						<view class="apply-button2" @click="jumpToMyApply(2)">查看我的申请</view>
					</view>
					<!-- 内容 -->
					<scroll-view :scroll-y="scrollFlag" class="scroll-view-block"  :style="{height:scrollHeight}" @scrolltolower="querySteadyList" @touchend="setScrollFlag" v-if="steadyList.length>0">
					<view class="content-block" v-for="steady in steadyList">
						<view class="content-line-one">
							<view class="content-line-one-text1">
								{{steady.name}}
							</view>
							<view class="content-line-one-text2">
								{{steady.dateString}}
							</view>
							<image src="../../static/pic/download.png" class="content-line-one-pic" @click="download(steady.reportPath)" v-if="steady.state==1"></image>
						</view>
						<view class="content-line-two">
							
						</view>
						<scroll-view scroll-y="true" class="content-line-three">
							<view class="" v-for="result in steady.listResult">
								{{result}}
							</view>
						</scroll-view>
					</view>
					</scroll-view>
					<view class="no-data" :style="{height:scrollHeight}" v-else>
						暂无稳态报表
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="transient-block">
					<view class="sroll-block-line-one" @click="jumpToConditionTransient">
						<view class="sroll-block-line-one-text">
							<view class="" v-if="transientDate!='申请'">
								{{lineInfo.lineName}}
							</view>
							<view class="sroll-block-line-one-text-second">
								<view class="">
									{{transientDate}}       
								</view>
								<view class="sroll-block-line-one-text-second-right" v-if="transientDate!='申请'">
									{{startDate2}}至{{endDate2}}
								</view>
							</view>
						</view>
						<!-- <image class="sroll-block-line-one-pic" src="../../static/pic/pull.png"></image> -->
						<image class="sroll-block-line-one-pic" src="../../static/pic/jump.png"></image>
					</view>
					<!-- <view class="date-block">
						<image src="../../static/pic/rectangle.png" class="date-pic"></image>
						<view class="chooseDate-block" @click="transientChooseDate(1)"  v-if="transientDateChoose==0">
							<view class="date-text">
								{{transientDate}}
							</view>
							<image src="../../static/pic/pull.png" class="date-choose" ></image>
						</view>
						<view class="chooseDate-block" @click="transientChooseDate(0)"  v-else>
							<view class="date-text">
								{{transientDate}}
							</view>
							<image src="../../static/pic/pull_up.png" class="date-choose"></image>
						</view>
						<view>
						     <uni-calendar  ref="calendar" :insert="false"  @confirm="confirm" :range='true'></uni-calendar>
						</view>
						<view class="time-block" @click="chooseDate">
							请选择日期: 2019-01-01至2019-01-01
						</view>
					</view> -->
					<view class="date-choose-block" v-if="transientDateChoose==1">
						<view class="date-choose-line-two-choose" @click="transientChangeDate('月报')" v-if="transientDate=='月报'">
							月报
						</view>
						<view class="date-choose-line-two" @click="transientChangeDate('月报')" v-else>
							月报
						</view>
						<block  v-if="userInfo.roleCode==0">
							<view class="date-choose-line-three-choose" @click="transientChangeDate('申请')"  v-if="transientDate=='申请'">
								申请
							</view>
							<view class="date-choose-line-three" @click="transientChangeDate('申请')" v-else>
								申请
							</view>
						</block>
					</view>
					<!-- 申请 -->
					<view class="apply-block" v-if="transientDate=='申请'" :style="{height:scrollHeight}">
						<view class="apply-line">
							<view class="apply-line-left">
								报表类型
							</view>
							<picker class="apply-line-center" :range="types" @change="changeType" mode = "selector">
								{{types[typesIndex]}}
							</picker>
							<image class="apply-line-right" src="../../static/pic/jump.png"></image>
						</view>
						<view class="line-fine">
							
						</view>
						<view class="apply-line">
							<view class="apply-line-left">
								时间间隔
							</view>
							<picker class="apply-line-center" mode="selector" :range="years" @change="changeYear" value="9" v-if="typesIndex==0">
								{{years[yearsIndex]}}
							</picker>
							<picker class="apply-line-center" mode="multiSelector" :range="yearsAndQuarter" value="[9,0]" v-if="typesIndex==1" @change="changeYearsAndQuarter">
								{{yearsAndQuarter[0][yearsAndQuarterIndex1]}}--{{yearsAndQuarter[1][yearsAndQuarterIndex2]}}
							</picker>
							<image class="apply-line-right" src="../../static/pic/jump.png"></image>
						</view>
						<view class="line-fine">
							
						</view>
						<!-- <view class="apply-line" @click="jumpToChooseLine(1)">
							<view class="apply-line-left">
								监测点选择
							</view>
							<view class="apply-line-center">
								{{transientLine.lineName}}
							</view>
							<image class="apply-line-right" src="../../static/pic/jump.png"></image>
						</view> -->
						<view class="line-fine">
							
						</view>
						<button class="apply-button1" @click="applyReport(1)" :disabled="disabledFlag"  :loading="loadingFlag">申请</button>
						<view class="apply-button2" @click="jumpToMyApply(1)">查看我的申请</view>
					</view>
					<scroll-view :scroll-y="scrollFlag" class="scroll-view-block"  :style="{height:scrollHeight}" @scrolltolower="queryTransientList()" @touchend="setScrollFlag" v-if="transientList.length>0">
					<view class="content-block" v-for="transient in transientList">
						<view class="content-line-one">
							<view class="content-line-one-text1">
								{{transient.name}}
							</view>
							<view class="content-line-one-text2">
								{{transient.dateString}}
							</view>
							<image src="../../static/pic/download.png" class="content-line-one-pic" @click="download(transient.reportPath)"></image>
						</view>
						<view class="content-line-two">
							
						</view>
						<scroll-view scroll-y="true" class="content-line-three">
							<view class="" v-for="result in transient.listResult">
								{{result}}
							</view>
						</scroll-view>
						<view class="line">
							
						</view>
					</view>
					</scroll-view>
					<view class="no-data" :style="{height:scrollHeight}" v-else>
						暂无暂态报表
					</view>
				</view>
			</swiper-item>
		</swiper>
		<!-- 内容 -->
		<!-- 稳态报表 -->
		<!-- <view class="steady-block" v-if="tabNum==2">
			<view class="date-block">
				<image src="../../static/pic/rectangle.png" class="date-pic"></image>
				<view class="chooseDate-block" @click="steadyChooseDate(1)"  v-if="steadyDateChoose==0">
					<view class="date-text">
						{{steadyDate}}
					</view>
					<image src="../../static/pic/pull.png" class="date-choose" ></image>
				</view>
				<view class="chooseDate-block" @click="steadyChooseDate(0)"  v-else>
					<view class="date-text">
						{{steadyDate}}
					</view>
					<image src="../../static/pic/pull_up.png" class="date-choose"></image>
				</view>
				
			</view>
			<view class="date-choose-block" v-if="steadyDateChoose==1">
				
				<view class="date-choose-line-one-choose" @click="steadyChangeDate('周报')" v-if="steadyDate=='周报'">
					周报
				</view>
				<view class="date-choose-line-one" @click="steadyChangeDate('周报')" v-else>
					周报
				</view>
				<view class="date-choose-line-two-choose" @click="steadyChangeDate('月报')" v-if="steadyDate=='月报'">
					月报
				</view>
				<view class="date-choose-line-two" @click="steadyChangeDate('月报')" v-else>
					月报
				</view>
				<block  v-if="userInfo.roleCode==0">
					<view class="date-choose-line-three-choose" @click="steadyChangeDate('申请')"  v-if="steadyDate=='申请'">
						申请
					</view>
					<view class="date-choose-line-three" @click="steadyChangeDate('申请')" v-else>
						申请
					</view>
				</block>
			</view> -->
			<!-- 申请 -->
			<!-- <view class="apply-block" v-if="steadyDate=='申请'" :style="{height:scrollHeight}">
				<view class="apply-line">
					<view class="apply-line-left">
						报表类型
					</view>
					<picker class="apply-line-center" :range="types" @change="changeType" mode = "selector">
						{{types[typesIndex]}}
					</picker>
					<image class="apply-line-right" src="../../static/pic/jump.png"></image>
				</view>
				<view class="line-fine">
					
				</view>
				<view class="apply-line">
					<view class="apply-line-left">
						时间间隔
					</view>
					<picker class="apply-line-center" mode="selector" :range="years" @change="changeYear" value="9" v-if="typesIndex==0">
						{{years[yearsIndex]}}
					</picker>
					<picker class="apply-line-center" mode="multiSelector" :range="yearsAndQuarter" value="[9,0]" v-if="typesIndex==1" @change="changeYearsAndQuarter">
						{{yearsAndQuarter[0][yearsAndQuarterIndex1]}}--{{yearsAndQuarter[1][yearsAndQuarterIndex2]}}
					</picker>
					<image class="apply-line-right" src="../../static/pic/jump.png"></image>
				</view>
				<view class="line-fine">
					
				</view>
				<view class="apply-line" @click="jumpToChooseLine(2)">
					<view class="apply-line-left">
						监测点选择
					</view>
					<view class="apply-line-center">
						{{steadyLine.lineName}}
					</view>
					<image class="apply-line-right" src="../../static/pic/jump.png"></image>
				</view>
				<view class="line-fine">
					
				</view>
				<button class="apply-button1" @click="applyReport(2)" :disabled="disabledFlag"  :loading="loadingFlag">申请</button>
				<view class="apply-button2" @click="jumpToMyApply(2)">查看我的申请</view>
			</view> -->
			<!-- 内容 -->
			<!-- <scroll-view scroll-y="true" class="scroll-view-block"  v-else :style="{height:scrollHeight}" @scrolltolower="querySteadyList">
			<view class="content-block" v-for="steady in steadyList">
				<view class="content-line-one">
					<view class="content-line-one-text1">
						{{steady.name}}
					</view>
					<view class="content-line-one-text2">
						{{steady.dateString}}
					</view>
					<image src="../../static/pic/download.png" class="content-line-one-pic" @click="download(steady.reportPath)" v-if="steady.state==1"></image>
				</view>
				<view class="content-line-two">
					
				</view>
				<scroll-view scroll-y="true" class="content-line-three">
					<view class="" v-for="result in steady.listResult">
						{{result}}
					</view>
				</scroll-view>
				<view class="line">
					
				</view>
			</view>
			</scroll-view>
		</view> -->
		<!-- 暂降报表 -->
		<!-- <view class="transient-block" v-if="tabNum==1">
			<view class="date-block">
				<image src="../../static/pic/rectangle.png" class="date-pic"></image>
				<view class="chooseDate-block" @click="transientChooseDate(1)"  v-if="transientDateChoose==0">
					<view class="date-text">
						{{transientDate}}
					</view>
					<image src="../../static/pic/pull.png" class="date-choose" ></image>
				</view>
				<view class="chooseDate-block" @click="transientChooseDate(0)"  v-else>
					<view class="date-text">
						{{transientDate}}
					</view>
					<image src="../../static/pic/pull_up.png" class="date-choose"></image>
				</view>
				
			</view>
			<view class="date-choose-block" v-if="transientDateChoose==1">
				<view class="date-choose-line-two-choose" @click="transientChangeDate('月报')" v-if="transientDate=='月报'">
					月报
				</view>
				<view class="date-choose-line-two" @click="transientChangeDate('月报')" v-else>
					月报
				</view>
				<block  v-if="userInfo.roleCode==0">
					<view class="date-choose-line-three-choose" @click="transientChangeDate('申请')"  v-if="transientDate=='申请'">
						申请
					</view>
					<view class="date-choose-line-three" @click="transientChangeDate('申请')" v-else>
						申请
					</view>
				</block>
			</view> -->
			<!-- 申请 -->
			<!-- <view class="apply-block" v-if="transientDate=='申请'" :style="{height:scrollHeight}">
				<view class="apply-line">
					<view class="apply-line-left">
						报表类型
					</view>
					<picker class="apply-line-center" :range="types" @change="changeType" mode = "selector">
						{{types[typesIndex]}}
					</picker>
					<image class="apply-line-right" src="../../static/pic/jump.png"></image>
				</view>
				<view class="line-fine">
					
				</view>
				<view class="apply-line">
					<view class="apply-line-left">
						时间间隔
					</view>
					<picker class="apply-line-center" mode="selector" :range="years" @change="changeYear" value="9" v-if="typesIndex==0">
						{{years[yearsIndex]}}
					</picker>
					<picker class="apply-line-center" mode="multiSelector" :range="yearsAndQuarter" value="[9,0]" v-if="typesIndex==1" @change="changeYearsAndQuarter">
						{{yearsAndQuarter[0][yearsAndQuarterIndex1]}}--{{yearsAndQuarter[1][yearsAndQuarterIndex2]}}
					</picker>
					<image class="apply-line-right" src="../../static/pic/jump.png"></image>
				</view>
				<view class="line-fine">
					
				</view>
				<view class="apply-line" @click="jumpToChooseLine(1)">
					<view class="apply-line-left">
						监测点选择
					</view>
					<view class="apply-line-center">
						{{transientLine.lineName}}
					</view>
					<image class="apply-line-right" src="../../static/pic/jump.png"></image>
				</view>
				<view class="line-fine">
					
				</view>
				<button class="apply-button1" @click="applyReport(1)" :disabled="disabledFlag"  :loading="loadingFlag">申请</button>
				<view class="apply-button2" @click="jumpToMyApply(1)">查看我的申请</view>
			</view>
			<scroll-view scroll-y="true" class="scroll-view-block"  :style="{height:scrollHeight}" @scrolltolower="queryTransientList()">
			<view class="content-block" v-for="transient in transientList">
				<view class="content-line-one">
					<view class="content-line-one-text1">
						{{transient.name}}
					</view>
					<view class="content-line-one-text2">
						{{transient.dateString}}
					</view>
					<image src="../../static/pic/download.png" class="content-line-one-pic" @click="download(transient.reportPath)"></image>
				</view>
				<view class="content-line-two">
					
				</view>
				<scroll-view scroll-y="true" class="content-line-three">
					<view class="" v-for="result in transient.listResult">
						{{result}}
					</view>
				</scroll-view>
				<view class="line">
					
				</view>
			</view>
			</scroll-view>
		</view> -->
	</view>
</template>

<script>
	import uniCalendar from "../../components/uni-calendar/uni-calendar";
	export default {
		data() {
			return {
					tabNum:1,//1-稳态报表 2-暂降报表
					steadyDateChoose:0,
					transientDateChoose:0,
					userInfo:{},
					steadyDate:'周报',
					steadyPage:1,
					steadyLine:{lineName:'请选择'},
					transientPage:1,
					transientDate:'月报',
					// steadyList:[{"name":1,"listResult":{"result":"暂无数据"}},{"name":1}],
					steadyList:[],
					transientList:[],
					transientLine:{lineName:'请选择'},
					types:['年报','季报'],
					typesIndex:0,
					years:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],
					yearsIndex:9,
					yearsAndQuarter:[[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],['第一季度','第二季度','第三季度','第四季度']],
					yearsAndQuarterIndex1:9,
					yearsAndQuarterIndex2:0,
					scrollHeight:'',
					swiperHeight:'',
					loadingFlag:false,
					disabledFlag:false,
					current:0,
					scrollFlag:true,
					lineInfo:{
						lineName:'暂无默认监测点，请选择',
						lineIndex:''
					},
					startDate:'',
					endDate:'',
					startDateMills:'',
					endDateMills:'',
					startDate2:'',
					endDate2:'',
					startDateMills2:'',
					endDateMills2:''
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
				that.scrollHeight = parseInt((winHeight-statusBarHeight)*winrate-274)+'rpx';
				that.swiperHeight=parseInt((winHeight-statusBarHeight)*winrate-172)+'rpx';
			},
			setScrollFlag(){
				var that = this;
				that.scrollFlag=false;
				setTimeout(function(){
					that.scrollFlag=true;
				},30)
			},
			changeTab(tabNum){
				this.tabNum=tabNum;
				this.current=tabNum-1;
			},
			changeTabBySwiper(e){
				this.tabNum=e.detail.current+1;
				this.current=e.detail.current;
			},
			steadyChangeDate(date){
				this.steadyDate = date;
				this.steadyChooseDate(0);
				if(date=='申请'){
					return;
				}
				this.steadyPage=1;
				this.steadyList=[];
				this.querySteadyList();
			},
			transientChangeDate(date){
				this.transientDate = date;
				this.transientChooseDate(0);
				this.transientPage=1;
				this.transientList=[];
				this.queryTransientList();
			},
			querySteadyList(){
				var that = this;
				if(that.judgeLogin()){
					var reportType = '';
					if(that.steadyDate=='周报'){
						reportType=1
					}else if(that.steadyDate=='月报'){
						reportType=2
					}
					uni.request({
					    url: that.serverUrl+'/report/reportList', 
						method:'POST',
					    data: {
					       userId:uni.getStorageSync('userInfo').userId,
						   systemType:2,
						   reportType:reportType,
						   page:that.steadyPage++,
						   num:20,
						   lineIndex:that.lineInfo.lineIndex,
						   startTime:that.startDateMills,
						   endTime:that.endDateMills,
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
									that.steadyList = that.steadyList.concat(list);
								}
							}else{
								uni.showModal({
								    title: '提示',
								    content: '查询失败，请重试',
									confirmText:'重试',
								    success: function (res) {
								        if (res.confirm) {
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
			queryTransientList(){
				var that = this;
				if(that.judgeLogin()){
						var reportType = '';
						if(that.transientDate=='周报'){
							reportType=1
						}else if(that.transientDate=='月报'){
							reportType=2
						}
						uni.request({
						    url: that.serverUrl+'/report/reportList', 
							method:'POST',
						    data: {
						       userId:uni.getStorageSync('userInfo').userId,
							   systemType:1,
							   reportType:reportType,
							   page:that.transientPage++,
							   num:20,
							   startTime:that.startDateMills2,
							   endTime:that.endDateMills2,
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
										that.transientList = that.transientList.concat(list);
									}
								}else{
									uni.showModal({
									    title: '提示',
									    content: '查询失败，请重试',
										confirmText:'重试',
									    success: function (res) {
									        if (res.confirm) {
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
			download(url){
				var that = this;
				uni.showLoading({
					title:'正在下载',
					mask:true
				})
				uni.downloadFile({
					url: url,
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
												that.download(url);
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
										that.download(url);
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
									that.download(url);
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						})
					}
				});
			},
			applyReport(systemType){
				var that = this ;
				if(that.judgeLogin()){
					that.disabledFlag=true;
					that.loadingFlag=true;
					var lineIndex='';
					var quarter=0;
					var year=0;
					if(systemType==1){
						// if(that.transientLine==null||that.transientLine==undefined||that.transientLine.lineIndex==null||that.transientLine.lineIndex==undefined||that.transientLine.lineIndex==''){
						// 	uni.showModal({
						// 		title:"提示",
						// 		content:"请选择监测点",
						// 		showCancel:false
						// 	})
						// 	that.loadingFlag=false;
						// 	that.disabledFlag=false;
						// 	return;
						// }
						// lineIndex=that.transientLine.lineIndex;
						lineIndex=0;
					}else{
						if(that.steadyLine==null||that.steadyLine==undefined||that.steadyLine.lineIndex==null||that.steadyLine.lineIndex==undefined||that.steadyLine.lineIndex==''){
							uni.showModal({
								title:"提示",
								content:"请选择监测点",
								showCancel:false
							})
							that.loadingFlag=false;
							that.disabledFlag=false;
							return;
						}
						lineIndex=that.steadyLine.lineIndex;
					}
					that.loadingFlag=false;
					that.disabledFlag=false;
					uni.showLoading({
						mask:true
					})
					if(that.typesIndex==0){
						quarter=0;
						year=that.years[that.yearsIndex]
					}else{
						quarter=that.yearsAndQuarterIndex2+1;
						year=that.yearsAndQuarter[0][that.yearsAndQuarterIndex1]
					}
					uni.request({
					    url: that.serverUrl+'/report/customReport', 
						method:'POST',
					    data: {
					       userId:uni.getStorageSync('userInfo').userId,
						   systemType:systemType,
						   lineIndex:lineIndex,
						   quarter:quarter,
						   year:year
					    },
					    header: {
					        'content-type': 'application/x-www-form-urlencoded'
					    },
						sslVerify:false,
					    success: (res) => {
							uni.hideLoading()
							if(res.data.resultCode=='10000'){
								uni.showModal({
								    title: '提示',
								    content: '申请成功',
									showCancel:false,
								});
							}else{
								uni.showModal({
								    title: '提示',
								    content: '申请失败，请重试',
									confirmText:'重试',
								    success: function (res) {
								        if (res.confirm) {
								            that.applyReport(systemType);
								        } else if (res.cancel) {
								            console.log('用户点击取消');
								        }
								    },
								});
							}
					    },
						fail:(re)=>{
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
							    },
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
										that.querySteadyList();
										that.queryTransientList();
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
			steadyChooseDate(e){
				this.steadyDateChoose=e;
			},
			transientChooseDate(e){
				this.transientDateChoose=e;
			},
			addDateString(list){
				var that=this;
				for(var i=0;i<list.length;i++){
					list[i].dateString = that.formatTime(list[i].startTime)+'至'+that.formatTime(list[i].endTime)
				}
				return list;
			},
			changeType(e){
				this.typesIndex = e.detail.value;
			},
			changeYear(e){
				this.yearsIndex = e.detail.value;
			},
			changeYearsAndQuarter(e){
				 this.yearsAndQuarterIndex1 = e.detail.value[0];
				 this.yearsAndQuarterIndex2 = e.detail.value[1];
			},
			jumpToMyApply(systemType){
				uni.navigateTo({
					url:'../myApply/myApply?systemType='+systemType
				})
			},
			jumpToChooseLine(type){
				var that=this;
				uni.navigateTo({
					url:'../chooseLine/chooseLine'
				});
				uni.$once('lineInfoSelect',function(data){
					if(type==1){
						that.transientLine=data
					}else{
						that.steadyLine=data
					}
				});
				uni.$once('lineInfoQuery',function(data){
					if(type==1){
						that.transientLine=data
					}else{
						that.steadyLine=data
					}
				})
			},
			jumpToConditionSteady(){
				var that = this;
				var dateTypes=[];
				if(that.userInfo.roleCode==0){
					dateTypes=['周报','月报','申请'];
				}else{
					dateTypes=['周报','月报'];
				}
				uni.navigateTo({
					url:'../condition/condition?lineInfo='+JSON.stringify(that.lineInfo)+'&startDate='+that.startDate+'&endDate='+that.endDate+'&startDateMills='+that.startDateMills+'&endDateMills='+that.endDateMills+'&dateTypes='+JSON.stringify(dateTypes)+'&chooseDateTypeFlag=1&&chooseDateFlag=1&chooseLineFlag=1'
				})
				uni.$once('doQueryInfo',function(e){
					if(e.steadyDate=='申请'){
						that.steadyDate = e.steadyDate;
					}else{
						that.startDate = e.startDate;
						that.endDate = e.endDate;
						that.startDateMills = e.startDateMills;
						that.endDateMills = e.endDateMills;
						that.lineInfo = e.lineInfo;
						that.steadyPage=1;
						that.steadyList=[];
						that.steadyDate = e.steadyDate;
						that.querySteadyList();
					}
				})
			},
			jumpToConditionTransient(){
				var that = this;
				var dateTypes=[];
				if(that.userInfo.roleCode==0){
					dateTypes=['月报','申请'];
				}else{
					dateTypes=['月报'];
				}
				uni.navigateTo({
					url:'../condition/condition?lineInfo='+JSON.stringify(that.lineInfo)+'&startDate='+that.startDate2+'&endDate='+that.endDate2+'&startDateMills='+that.startDateMills2+'&endDateMills='+that.endDateMills2+'&dateTypes='+JSON.stringify(dateTypes)+'&chooseDateTypeFlag=1&&chooseDateFlag=1&chooseLineFlag=0'
				})
				uni.$once('doQueryInfo',function(e){
					if(e.transientDate=='申请'){
						that.transientDate = e.transientDate;
					}else{
						that.startDate2 = e.startDate;
						that.endDate2 = e.endDate;
						that.startDateMills2 = e.startDateMills;
						that.endDateMills2 = e.endDateMills;
						that.transientPage=1;
						that.transientList=[];
						that.transientDate = e.transientDate;
						that.queryTransientList();
					}
				})
			},
		},
		components:{
			uniCalendar
		},
		onLoad() {
			// var userInfo = {};
			// userInfo.userId = '00c37ea1-b5ff-4f35-ba15-51e1c7363e20';
			// userInfo.roleCode=0;
			// uni.setStorageSync('userInfo',userInfo);
			var that = this;
			if(that.judgeLogin()){
				var today = new Date().getMilliseconds();
				that.userInfo = uni.getStorageSync('userInfo');
				console.log(that.userInfo.userId)
				that.scrollH();
				that.endDate=that.formatTime(new Date());
				that.startDate=that.endDate.substring(0,8)+'01';
				that.startDateMills = Date.parse(that.startDate.replace(/-/g, '/'));
				that.endDateMills = Date.parse(that.endDate.replace(/-/g, '/'))+86399999;
				that.endDate2=that.formatTime(new Date());
				that.startDate2=that.endDate.substring(0,8)+'01';
				that.startDateMills2 = Date.parse(that.startDate.replace(/-/g, '/'));
				that.endDateMills2 = Date.parse(that.endDate.replace(/-/g, '/'))+86399999;
				that.queryDefaultLine();
			}
		},
		onShow() {
			var that = this;
			if(that.judgeLogin()){
				var userInfo=uni.getStorageSync('userInfo');
				if(that.userInfo.roleCode!=userInfo.roleCode){
					that.userInfo=userInfo
				}
			}	
		}
	}
</script>

<style>
@import url("report.css");
</style>
