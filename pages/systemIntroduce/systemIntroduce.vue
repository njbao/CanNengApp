<template>
	<view>
		<view>
			<web-view :src="serverUrl2+'/shiningCloud/business/appInfo'"></web-view>
		</view>
	</view>
</template>

<script>
	import back from "../../components/back.vue";
	export default {
		data() {
			return {
				showFlag:0,
				pageNameFlag:1,
				pageName:'系统介绍',
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

</style>
