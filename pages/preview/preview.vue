<template>
	<view class="preview-block">
		<image src="../../static/pic/background.png" class="preview-pic" mode="scaleToFill"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:'',
			}
		},
		methods: {
			
		},
		onLoad(e) {
			this.url=e.url;
			// #ifdef APP-PLUS
						plus.screen.lockOrientation('landscape-primary');
						// #endif
		},
		onUnload() {
			// #ifdef APP-PLUS
						plus.screen.lockOrientation('portrait-primary');
						// #endif
		}
	}
</script>

<style>
@import url("preview.css");
</style>
