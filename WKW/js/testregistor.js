	var user=$("#user");
	var code=$("#code");
	var repeat=$("#repeat");
	var tel=$("#tel");
	var email=$("#email");
	var sub=$("#sub");
	var state=$("#state");
	
	var a=b=c=d=e=0;
	user.on("blur",function(){
				var str=user.val()
				var reg=/^[\w]{6,18}$/			
				if(!reg.test(str)){
					user.parent().next().html("用户名称格式错误")
					if(user.val()==""){
						user.parent().next().html("")
					}
				}else{
					user.parent().next().html("")
					a=1;
				}
			
	})
	//user.on("blur",function(){
	//	if(user.val()==""){
	//		user.parent().next().html("")
	//	}
	//})
	
	
	code.on("blur",function(){
				var str=code.val()
				var reg=/^[\w]{6,16}$/			
				if(!reg.test(str)){
					code.parent().next().html("密码格式错误")
					if(code.val()==""){
						code.parent().next().html("")
					}
				}else{
					code.parent().next().html("")
					b=1;
				}
				
						
				if(code.val()!=repeat.val()){
					repeat.parent().next().html("重复密码错误")
					if(repeat.val()==""){
						repeat.parent().next().html("")
					}
				}else{
					repeat.parent().next().html("")
					c=1;
				}
				
	})
	
	
	
	repeat.on("blur",function(){
				var str=repeat.val()
				var reg=/^[\w]{6,18}$/			
				if(code.val()!=repeat.val()){
					repeat.parent().next().html("重复密码错误")
					if(repeat.val()==""){
						repeat.parent().next().html("")
					}
				}else{
					repeat.parent().next().html("")
					c=1;
				}
			
	})
	tel.on("blur",function(){
				var str=tel.val()
				var reg=/^[1][3-9][0-9]{9}$/			
				if(!reg.test(str)){
					tel.parent().next().html("电话格式错误")
					if(tel.val()==""){
						tel.parent().next().html("")
					}
				}else{
					tel.parent().next().html("")
					d=1;
				}
			
	})
	email.on("blur",function(){
				var str=email.val()
				var reg=/^[a-z0-9]+[@][\w]+$/				
				if(!reg.test(str)){
					console.log(1)
					email.parent().next().html("email格式错误")
					if(email.val()==""){
						email.parent().next().html("")
					}
				}else{
					email.parent().next().html("")
					e=1;
				}
			
	})
	sub.on("click",function(){
				if(a+b+c+d+e==5){
					state.html("注册成功")
	//				location.href="login.html"
				}else{
					state.html("注册失败，请重新注册")				
				}
	})
	
