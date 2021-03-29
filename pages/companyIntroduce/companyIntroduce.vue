<template>
	<view>
		<view>
			<web-view  src="http://112.4.156.196:8040/shiningCloud/business/companyInfo"></web-view>
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
				pageName:'公司介绍',
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
