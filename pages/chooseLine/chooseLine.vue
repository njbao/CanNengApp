<template>
	<view>
		<back :errorMsg="errorMsg"  :showFlag="showFlag" :pageName="pageName" :pageNameFlag='pageNameFlag'></back>
		<view class="chooseLine-block" v-if="errorFlag==0">
			<!-- <view>
			     <uni-calendar  ref="calendar" :insert="false"  @confirm="confirm" :range='true'></uni-calendar>
			</view>
			<view class="time-block" @click="chooseDate">
				<view class="time-block-left">
					<image class="calendar-pic" src="../../static/pic/calendar.png"></image>
					<view class="time-text">
						{{startDate}}至{{endDate}}
					</view>
				</view>
				<image src="../../static/pic/jump.png" class="time-block-right"></image>
			</view>
			<view class=".line-fine">
				
			</view>
			<view class="time-block">
				<view class="time-block-left">
					<image class="calendar-pic" src="../../static/pic/calendar.png"></image>
					<view class="time-text">
						监测点
					</view>
				</view>
			</view>
			<view class=".line-fine">
				
			</view>
			<button class="confirm-button" type="primary">确认查询</button>
			<view class=".line-fine">
				
			</view> -->
			<view class="search-block">
				<view class="search-left">
					<image src="../../static/pic/search.png" class="search-pic"></image>
					<input class="search-input" placeholder="请输入" confirm-type="done" type="text" placeholder-class="search-input-placeholder" @input="inputLine" :value="lineName"/>
				</view>
				<view class="search-text" @click="queryByName">
					搜索
				</view>
			</view>
			<view class="order-block">
				<view class="order-left" @click="showProvince">
					<view class="order-left-text">
						监测点选择
					</view>
					<image src="../../static/pic/pull.png" class="order-left-pic"></image>
				</view>
				<block v-if="showProvinceFlag==1">
					<view class="order-center" @click="changeLineFlag(0)" v-if="lineFlag==1">
						<view class="order-center-text-choose">
							通讯
						</view>
						<image src="../../static/pic/desc.png" class="order-center-pic"></image>
					</view>
					<view class="order-center" @click="changeLineFlag(1)" v-else>
						<view class="order-center-text">
							通讯
						</view>
						<image src="../../static/pic/desc.png" class="order-center-pic"></image>
					</view>
					<view class="order-right" @click="changeLineFlag(0)" v-if="lineFlag==2">
						<view class="order-right-text-choose">
							流量
						</view>
						<image src="../../static/pic/desc.png" class="order-right-pic"></image>
					</view>
					<view class="order-right" @click="changeLineFlag(2)" v-else>
						<view class="order-right-text">
							流量
						</view>
						<image src="../../static/pic/desc.png" class="order-right-pic"></image>
					</view>
				</block>
			</view>
			<view :style="{height:pickerHeight}" class="picker-block" v-if="showProvinceFlag==1">
				<view class="select-block">
					<picker mode="selector" class="select-province" :range="provinceList" range-key="provinceName" @change="changeProvinceSelectedIndex($event,provinceList[provinceListIndex].provinceIndex)" v-if="provinceList.length>0">
						<view class="select-province-text">{{provinceList[provinceListIndex].provinceName}}</view>
					</picker>
					<image src="../../static/pic/pull.png" class="order-left-pic" v-if="provinceList.length>0"></image>
					<picker mode="selector" class="select-company" :range="companyList" range-key="gdName" @change="changeCompanySelectedIndex($event,companyList[companyListIndex].gdIndex)" v-if="companyList.length>0">
						<view class="select-company-text">{{companyList[companyListIndex].gdName}}</view>
					</picker>
					<image src="../../static/pic/pull.png" class="order-left-pic" v-if="companyList.length>0"></image>
					<picker mode="selector" class="select-substation" :range="substationList" range-key="subName" @change="changeSubstationSelectedIndex($event,substationList[substationListIndex].subIndex)" v-if="substationList.length>0">
						<view class="select-substation-text">{{substationList[substationListIndex].subName}}</view>
					</picker>
					<image src="../../static/pic/pull.png" class="order-left-pic" v-if="substationList.length>0"></image>
				</view>
				<scroll-view scroll-y="true" class="search-result-block" :style="{height:pickerHeight}"  show-scrollbar="false" v-if="lineList.length>0">
					 <view  v-for="line in lineList" @click="selectLine(line.lineIndex,line)">
						 <view class="each-block">
						 	{{line.lineName}}
						 </view>
					 </view>
				</scroll-view>
				<!-- 左边导航 -->
				<!-- <scroll-view scroll-y="true" class="left-block" :style="{height:pickerHeight}"  show-scrollbar="false">
					 <view :class="provinceSelectedIndex==province.provinceIndex?'province-selected':'province'" v-for="province in provinceList" @click="selectProvince(province.provinceIndex)">
						 <view class="province-text">
						 	{{province.provinceName}}
						 </view>
					 </view>
				</scroll-view> -->
				<!-- 二级联动供电公司 -->
				<!-- <scroll-view scroll-y="true" class="company-block" :style="{height:pickerHeight}"  show-scrollbar="false" v-if="companyList">
					 <view :class="companySelectedIndex==company.gdIndex?'company-selected':'company'" v-for="company in companyList" @click="selectCompany(company.gdIndex)">
						 <view class="company-text">
						 	{{company.gdName}}
						 </view>
					 </view>
				</scroll-view> -->
				<!-- 三级联动变电站 -->
				<!-- <scroll-view scroll-y="true" class="substation-block" :style="{height:pickerHeight}"  show-scrollbar="false" v-if="substationList">
					 <view :class="substationSelectedIndex==substation.subIndex?'substation-selected':'substation'" v-for="substation in substationList" @click="selectSubstation(substation.subIndex)">
						 <view class="substation-text">
						 	{{substation.subName}}
						 </view>
					 </view>
				</scroll-view> -->
				<!-- 四级联动监测点-->
				<!-- <scroll-view scroll-y="true" class="line-block" :style="{height:pickerHeight}"  show-scrollbar="false" v-if="lineList">
					 <view :class="lineSelectedIndex==line.lineIndex?'line-selected':'line'" v-for="line in lineList" @click="selectLine(line.lineIndex,line)">
						 <view class="line-text">
						 	{{line.lineName}}
						 </view>
					 </view>
				</scroll-view> -->
			</view>
			<!-- 模糊搜索结果 -->
			<scroll-view class="search-result-block" :style="{height:pickerHeight}" scroll-y="true" v-else>
				<view class=""  v-if="queryByNameList.length!=0">
					<view class="each-block" v-for="result in queryByNameList" @click="selectLine(1,result)">
						{{result.lineName}}
					</view>
				</view>
				<view class="each-block" v-else>
					{{searchResult}}
				</view>
			</scroll-view>
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
	import uniCalendar from "../../components/uni-calendar/uni-calendar";
	import back from '../../components/back.vue';
	export default {
		data() {
			return {
				errorFlag:0,
				showFlag:0,
				errorMsg:'',
				provinceList:[{"provinceName":"省份","provinceIndex":0}],
				provinceListIndex:0,
				provinceSelectedIndex:0,
				companyList:[{"gdName":"供电公司","gdIndex":0}],
				companyListIndex:0,
				companySelectedIndex:0,
				substationList:[{"subName":"变电站","subIndex":0}],
				substationListIndex:0,
				substationSelectedIndex:0,
				lineList:[],
				lineSelectedIndex:0,
				lineName:'',
				showProvinceFlag:1,
				lineFlag:0,
				pickerHeight:'',
				queryByNameList:[],
				searchResult:'',
				startDate:'',
				startDateMills:'',
				endDate:'',
				endDateMills:'',
				pageName:'监测点选择',
				pageNameFlag:1
			}
		},
		methods: {
			scrollH(){
				var that =this;
				var sys = uni.getSystemInfoSync();
				var winWidth = sys.windowWidth;
				var winrate = 750/winWidth;
				var winHeight= sys.windowHeight;
				that.pickerHeight = parseInt((winHeight-50)*winrate-466)+'rpx';
			},
			queryByName(){
				 var that = this;
				 that.showProvinceFlag=0;
				 if(that.judgeLogin()){
					 uni.request({
					 	url: that.serverUrl+'/device/queryByName',
					 	method: 'POST',
					 	data: {
					 		lineName:that.lineName,
					 		userId:uni.getStorageSync('userInfo').userId
					 	},
					 	header: {
					 		'content-type': 'application/x-www-form-urlencoded'
					 	},
					 	sslVerify: false,
					 	success: (res) => {
					 		uni.hideLoading();
					 		if (res.data.resultCode == '10000') {
					 			that.queryByNameList = eval(res.data.data);
								if(that.queryByNameList.length!=0){
									that.searchResult=''
								}else{
									that.searchResult='暂未搜索到监测点'
								}
					 		} else {
					 			that.errorFlag = 1
					 		}
					 	},
					 	fail: (re) => {
					 		that.errorFlag = 1
					 	}
					 });
				 }
			},
			inputLine(e){
				this.lineName=e.detail.value;
				this.showProvinceFlag=0;
				this.searchResult='';
			},
			showProvince(){
				this.showProvinceFlag=1;
			},
			getProvince(){
				 var that = this;
				 uni.request({
				 	url: that.serverUrl+'/device/getProvince',
				 	method: 'POST',
				 	data: {
				 		userId:uni.getStorageSync('userInfo').userId
				 	},
				 	header: {
				 		'content-type': 'application/x-www-form-urlencoded'
				 	},
				 	sslVerify: false,
				 	success: (res) => {
				 		uni.hideLoading();
				 		if (res.data.resultCode == '10000') {
				 			that.provinceList = that.provinceList.concat(eval(res.data.data));
				 		} else {
				 			that.errorFlag = 1
				 		}
				 	},
				 	fail: (re) => {
				 		that.errorFlag = 1
				 	}
				 });
			},
			getCompany(){
				 var that = this;
				 uni.request({
				 	url: that.serverUrl+'/device/getGDInfo',
				 	method: 'POST',
				 	data: {
				 		userId:uni.getStorageSync('userInfo').userId,
						provinceIndex:that.provinceSelectedIndex
				 	},
				 	header: {
				 		'content-type': 'application/x-www-form-urlencoded'
				 	},
				 	sslVerify: false,
				 	success: (res) => {
				 		uni.hideLoading();
				 		if (res.data.resultCode == '10000') {
				 			that.companyList =that.companyList.concat(eval(res.data.data));
				 		} else {
				 			that.errorFlag = 1
				 		}
				 	},
				 	fail: (re) => {
				 		that.errorFlag = 1
				 	}
				 });
			},
			getSubstation(){
				 var that = this;
				 uni.request({
				 	url: that.serverUrl+'/device/getSubInfo',
				 	method: 'POST',
				 	data: {
				 		userId:uni.getStorageSync('userInfo').userId,
						gdIndex:that.companySelectedIndex,
				 	},
				 	header: {
				 		'content-type': 'application/x-www-form-urlencoded'
				 	},
				 	sslVerify: false,
				 	success: (res) => {
				 		uni.hideLoading();
				 		if (res.data.resultCode == '10000') {
				 			that.substationList =that.substationList.concat(eval(res.data.data));
				 		} else {
				 			that.errorFlag = 1
				 		}
				 	},
				 	fail: (re) => {
				 		that.errorFlag = 1
				 	}
				 });
			},
			getLine(){
				 var that = this;
				 uni.request({
				 	url: that.serverUrl+'/device/getLineInfo',
				 	method: 'POST',
				 	data: {
				 		userId:uni.getStorageSync('userInfo').userId,
						subIndex:that.substationSelectedIndex,
						type:that.lineFlag
				 	},
				 	header: {
				 		'content-type': 'application/x-www-form-urlencoded'
				 	},
				 	sslVerify: false,
				 	success: (res) => {
				 		uni.hideLoading();
				 		if (res.data.resultCode == '10000') {
				 			that.lineList = eval(res.data.data);
				 		} else {
				 			that.errorFlag = 1
				 		}
				 	},
				 	fail: (re) => {
				 		that.errorFlag = 1
				 	}
				 });
			},
			selectProvince(index){
				this.provinceSelectedIndex=index;
				this.getCompany();
			},
			selectCompany(index){
				this.companySelectedIndex=index;
				this.getSubstation();
			},
			selectSubstation(index){
				this.substationSelectedIndex=index;
				this.getLine();
			},
			selectLine(index,line){
				var that=this;
				that.lineSelectedIndex=index;
				uni.$emit('lineInfoSelect',line);
				uni.navigateBack({
					delta:1
				})
			},
			changeLineFlag(flag){
				var that=this;
				that.lineFlag=flag;
				if(that.lineList){
					that.getLine();
				}
			},
			changeProvinceSelectedIndex(e,provinceIndex){
				var that =this;
				that.companyList=[{"gdName":"供电公司","gdIndex":0}]
				that.substationList=[{"subName":"变电站","subIndex":0}]
				that.provinceListIndex = e.target.value;
				that.companyListIndex=0
				that.substationListIndex=0
				that.lineList=[]
				if(e.target.value==0){
					return
				}else{
					that.provinceSelectedIndex=that.provinceList[that.provinceListIndex].provinceIndex;
					that.getCompany();
				}
			},
			changeCompanySelectedIndex(e,gdIndex){
				var that =this;
				that.substationList=[{"subName":"变电站","subIndex":0}]
				that.companyListIndex = e.target.value;
				that.substationListIndex=0
				that.lineList=[]
				if(e.target.value==0){
					return
				}else{
					that.companySelectedIndex=that.companyList[that.companyListIndex].gdIndex;
					that.getSubstation();
				}
			},
			changeSubstationSelectedIndex(e,subIndex){
				var that =this;
				if(e.target.value==0){
					that.lineList=[]
					return
				}else{
					that.substationListIndex = e.target.value;
					that.substationSelectedIndex=that.substationList[that.substationListIndex].subIndex;
					that.getLine();
				}
			},
			chooseDate(){
			    this.$refs.calendar.open();
			},
			confirm(e){
				var that = this;
				var before = e.range.before;
				var after = e.range.after;
				var b = parseInt(before.replace('-','').replace('-',''));
				var a = parseInt(after.replace('-','').replace('-',''));
				if(a>b){
					that.startDate = before;
					that.endDate = after;
					that.startDateMills = before+' 00:00:00.000';
					that.endDateMills = after +' 23:59:59.999';
				}else{
					that.startDate = after;
					that.endDate = before;
					that.startDateMills = after+' 00:00:00.000';
					that.endDateMills = before +' 23:59:59.999';
				}
			},
			retry(){
				this.scrollH();
				this.getProvince();
			}
				
		},
		components:{
			back,
			uniCalendar
		},
		onLoad() {
			this.scrollH();
			this.getProvince();
			this.queryByName();
			this.endDate=this.formatTime(new Date());
			this.startDate=this.endDate.substring(0,8)+'01';
		}
	}
</script>

<style>
@import url("chooseLine.css");
</style>
