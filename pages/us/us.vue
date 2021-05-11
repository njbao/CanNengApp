<template>
	<view>
		<back :pageName='pageName' :pageNameFlag="pageNameFlag"></back>
		<view class="error-block">
			<image src="../../static/pic/aboutUs.png" class="us-pic"></image>
			<view class="us-text">
				灿能云 1.0.2
			</view>
		</view>
	</view>
</template>

<script>
	import back from '../../components/back.vue';
	export default {
		data() {
			return {
				pageName:'关于我们',
				pageNameFlag:1
			}
		},
		methods: {
			
		},
		components: {
			back
		}
	}
</script>

<style>
@import url("us.css");
</style>
