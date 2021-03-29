function judgeError(msgCode,msg){
	if(msgCode=='10004'||msgCode=='10006'||msgCode=='10007'||msgCode=='10009'||msgCode=='10011'||msgCode=='10031'){
		return '请检查输入'
	}else if(msgCode=='10022'||msgCode=='10025'){
		return '验证码错误'
	}else if(msgCode=='10019'){
		return '推荐码不正确'
	}else{
		return msg
	}
}
export default{
	judgeError
}