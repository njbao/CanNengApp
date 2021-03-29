<template>
	<view>
		<view>
			<web-view src="http://112.4.156.196:8040/shiningCloud/business/userAgreement"></web-view>
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
				pageName:'用户协议',
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
