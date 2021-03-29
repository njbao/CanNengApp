function judgeError(msgCode,msg){
	if(msgCode=='10004'||msgCode=='10006'||msgCode=='10007'||msgCode=='10009'||msgCode=='10011'){
		return '请检查输入'
	}else if(msgCode=='10031'){
		return '未注册的手机号'
	}else if(msgCode=='10022'||msgCode=='10025'){
		return '验证码错误'
	}else if(msgCode=='10019'){
		return '推荐码不正确'
	}else if(msgCode=='10003'||msgCode=='10013'||msgCode=='10021'||msgCode=='10028'){
		return '请联系管理员'
	}else if(msgCode=='10005'){
		return '账户被锁定30分钟'
	}else if(msgCode=='10010'||msgCode=='10111'||msgCode=='10172'){
		return '用户不存在'
	}else if(msgCode=='10016'||msgCode=='10018'||msgCode=='10027'){
		return '网络异常，请重试'
	}else if(msgCode=='10030'){
		return '网络异常，请重试'
	}else if(msgCode=='10112'){
		return '未找到该暂态事件信息'
	}else if(msgCode=='10173'){
		return '未找到该终端消息'
	}else{
		return msg
	}
}
export default{
	judgeError
}