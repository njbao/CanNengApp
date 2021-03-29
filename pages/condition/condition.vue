<template>
	<view>
		<back></back>
		<view class="condition-block">
			<view class="each-block" v-if="chooseDateTypeFlag==1">
				<view class="each-left">
					<view class="name-block">
						报告类型
					</view>
					<picker class="content-block" :range="dateTypes" @change="changeDateType" mode = "selector">
						{{dateTypes[dateTypesIndex]}}
					</picker>
				</view>
				<image class="each-right" src="../../static/pic/jump.png"></image>
			</view>
			<view>
			     <uni-calendar  ref="calendar" :insert="false"  @confirm="confirm" :range='true'></uni-calendar>
			</view>
			<view class="each-block" v-if="chooseDateFlag==1" @click="chooseDate">
				<view class="each-left">
					<view class="name-block">
						时间间隔
					</view>
					<view class="content-block">
						{{startDate}}至{{endDate}}
					</view>
				</view>
				<image class="each-right" src="../../static/pic/jump.png"></image>
			</view>
			<view class="each-block" v-if="chooseLineFlag==1" @click="jumpToChooseLine">
				<view class="each-left">
					<view class="name-block">
						监测点选择
					</view>
					<view class="content-block">
						{{lineInfo.lineName}}
					</view>
				</view>
				<image class="each-right" src="../../static/pic/jump.png"></image>
			</view>
			<button type="primary" class="button-block" @click="doQuery">查询</button>
		</view>
	</view>
</template>

<script>
	import uniCalendar from "../../components/uni-calendar/uni-calendar";
	import back from '../../components/back.vue';
	export default {
		data() {
			return {
				chooseDateTypeFlag:0,
				chooseDateFlag:0,
				chooseLineFlag:0,
				dateTypes:[],
				dateTypesIndex:0,
				startDate:'',
				endDate:'',
				lineInfo:{},
				startDateMills:'',
				endDateMills:''
			}
		},
		methods: {
			changeDateType(e){
				var that = this;
				that.dateTypesIndex = e.detail.value;
				if(that.dateTypes[that.dateTypesIndex]=='申请'){
					that.doQuery();
				}
			},
			doQuery(){
				var that = this;
				var doQueryInfo = {};
				doQueryInfo.startDate = that.startDate;
				doQueryInfo.endDate = that.endDate;
				doQueryInfo.startDateMills = that.startDateMills;
				doQueryInfo.endDateMills = that.endDateMills;
				doQueryInfo.lineInfo=that.lineInfo;
				doQueryInfo.steadyDate = that.dateTypes[that.dateTypesIndex];
				doQueryInfo.transientDate = that.dateTypes[that.dateTypesIndex];
				uni.$emit('doQueryInfo',doQueryInfo)
				uni.navigateBack({
					delta:1
				});
			},
			chooseDate(){
			    this.$refs.calendar.open();
			},
			confirm(e){
				var that = this;
				var before = e.range.before;
				var after = e.range.after;
				if(!before||!after){
					return
				}
				var b = parseInt(before.replace('-','').replace('-',''));
				var a = parseInt(after.replace('-','').replace('-',''));
				if(a>b){
					that.startDate = before;
					that.endDate = after;
					that.startDateMills = Date.parse(before.replace(/-/g, '/'));
					that.endDateMills = Date.parse(after.replace(/-/g, '/'))+86399999;
				}else{
					that.startDate = after;
					that.endDate = before;
					that.startDateMills = Date.parse(after.replace(/-/g, '/'));
					that.endDateMills = Date.parse(before.replace(/-/g, '/'))+86399999;
				}
			},
			jumpToChooseLine(){
				var that = this;
				uni.navigateTo({
					url:'../chooseLine/chooseLine'
				})
				uni.$on('lineInfoSelect',function(data){
					that.lineInfo = data;
				});
				uni.$on('lineInfoQuery',function(data){
					that.lineInfo = data;
				})
			}
		},
		onLoad(e) {
			var that=this;
			that.endDate=e.endDate;
			that.startDate=e.startDate;
			that.startDateMills =e.startDateMills;
			that.endDateMills = e.endDateMills;
			if(e.dateTypes){
				that.dateTypes = JSON.parse(e.dateTypes);
			}
			if(e.lineInfo){
				that.lineInfo = JSON.parse(e.lineInfo);
			}
			that.chooseDateTypeFlag = e.chooseDateTypeFlag;
			that.chooseDateFlag = e.chooseDateFlag;
			that.chooseLineFlag = e.chooseLineFlag;
		},
		components:{
			back,
			uniCalendar
		},
	}
</script>

<style>
@import url("condition.css");
</style>
