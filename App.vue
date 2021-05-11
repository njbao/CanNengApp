<script>
	export default {
		onLaunch: function() {
			 // #ifdef APP-PLUS  
			       const _self = this;  
			       const _handleClickPush = function(message) {
					   switch(uni.getSystemInfoSync().platform){
					       case 'ios':
					   	   //导入ios UIApplication
					   	   var UIApplication = plus.ios.import("UIApplication");  
					   	   var app = UIApplication.sharedApplication();  
					   	   //获取应用图标的数量  
					   	   var oldNum = app.applicationIconBadgeNumber();  
					   	   var newNum = oldNum - 1;  
					   	   //设置应用图标的数量  
					   	   plus.runtime.setBadgeNumber(newNum);  
					   	   //导入个推原生类  
					   	   var GeTuiSdk = plus.ios.importClass('GeTuiSdk');
					   	   GeTuiSdk.setBadge(newNum);
					      break;
					   }
					   if(typeof(message.payload)=='string'){
						   // var payload=eval('('+message.payload+')');
						   var payload= JSON.parse(message.payload)
						   if(payload.transmissionContent){
							   uni.$emit("tabNum",payload.transmissionContent);
							   uni.removeStorageSync("tabNum");
							   uni.setStorageSync("tabNum",payload.transmissionContent);
						   }else{
							    uni.$emit("tabNum",message.payload);
							    uni.removeStorageSync("tabNum");
								uni.setStorageSync("tabNum",message.payload)
						   }
					   }else{
						   if(message.payload.tabNum){
								uni.$emit("tabNum",message.payload.tabNum);
								uni.removeStorageSync("tabNum");
								uni.setStorageSync("tabNum",message.payload.tabNum)
						   }
					   }
					   uni.switchTab({
					   	url:'../information/information',
					   })
			       };  
				   const _handleReceivePush=function(message){
						if(message.payload&&message.payload.transmissionContent){
							var payload= message.payload;
							payload.local = 1;
							// uni.$emit("tabNum",message.payload.transmissionContent);
							// uni.setStorageSync("tabNum",message.payload.transmissionContent)
							
							_self.createMessage(message.payload.title,JSON.stringify(payload),message.payload.content)
						}else{
							// var payload=eval('('+message.payload+')');
							var payload= JSON.parse(message.payload)
							if(payload.local&&payload.local==1){
								return;
							}else{
								// uni.setStorageSync("tabNum",payload.transmissionContent)
								// uni.$emit("tabNum",payload.transmissionContent);
								payload.local = 1;
								// _self.setNum(1,message.title,message.content)
								_self.createMessage(message.title,JSON.stringify(payload),message.content)
							}
						}
				   };
			       plus.push.addEventListener('click', _handleClickPush);  
			       plus.push.addEventListener('receive', _handleReceivePush); 
			       // #endif  
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			this.setBadge(uni.getStorageSync("allNum"))
		}
	}
</script>

<style>
	
</style>
