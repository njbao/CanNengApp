<template name = "keyboard">
		<view class="keyboard">
		            <view class="keyboard-line">
		                <button data-val="1" @click="bindKeyEvent(1)" class="button-item">1</button>
		                <button data-val="2" @click="bindKeyEvent(2)" class="button-item">2</button>
		                <button data-val="3" @click="bindKeyEvent(3)" class="button-item">3</button>
		            </view>
		            <view class="keyboard-line">
		                <button data-val="4" @click="bindKeyEvent(4)" class="button-item">4</button>
		                <button data-val="5" @click="bindKeyEvent(5)" class="button-item">5</button>
		                <button data-val="6" @click="bindKeyEvent(6)" class="button-item">6</button>
		            </view>
		            <view class="keyboard-line">
		                <button data-val="7" @click="bindKeyEvent(7)" class="button-item">7</button>
		                <button data-val="8" @click="bindKeyEvent(8)" class="button-item">8</button>
		                <button data-val="9" @click="bindKeyEvent(9)" class="button-item">9</button>
		            </view>
		            <view class="keyboard-line">
		                <view data-val=""  class="button-item-delete"></view>
		                <button data-val="0" @click="bindKeyEvent(0)" class="button-item">0</button>
		                <view data-val="delete" @click="bindKeyEvent('delete')" class="button-item-delete">
							<image src="../../static/pic/delete.png" class="delete"></image>
						</view>
		            </view>
	</view>
</template>

<script>
	
	export default {
		name :"keyboard",
		data() {
			return {
				valueList:[]
			};
		},
		methods:{
			bindKeyEvent(val){
				var that = this;
				if(val!='delete'){
					if(that.valueList.length==6){
					   return
					}
					that.valueList.push(val);
					that.$emit('valueList',that.valueList)
				}else{
					if(that.valueList.length==0){
						 return
					}
					that.valueList.pop();
					that.$emit('valueList',that.valueList)
				}
				
			}
		}
	}
</script>

<style>
/* 键盘开始 */
.keyboard{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 514rpx;
	background: rgba(210,213,219,0.90);
	margin-top: 222rpx;
	position: fixed;  
	bottom: 0rpx;
	width: 100%;
}
.keyboard-line{
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.button-item{
	width: 234rpx;
	height: 92rpx;
	background: #FFFFFF;
	box-shadow: 0 1px 0 0 #848688;
	border-radius: 5px;
	margin: 12rpx;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.button-item-delete{
	width: 234rpx;
	height: 92rpx;
	border-radius: 5px;
	margin: 12rpx;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.delete{
	width: 46rpx;
	height: 36rpx;
}
/* 键盘结束 */
</style>
