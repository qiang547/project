
	class Zhuce{
				constructor(){
					this.user=$("#user");
					this.pass=$("#code");
					this.repeat=$("#repeat");
					this.tel=$("#tel");
					this.email=$("#email");
					this.sub=$("#sub");
					this.state=$("#state");
			
	    	this.url = "http://api.icodeilife.cn:81/user";
			this.addEvent();
		}
		addEvent(){
			var that=this;
			this.sub.click(function(){
				that.load();
			})
		}
		load(){
			console.log(1)
			$.ajax({
				url:this.url,
				data:{
					type:"register",
					user:this.user.val(),
					pass:this.pass.val(),
					repeat:this.repeat.val(),
					tel:this.tel.val(),
					email:this.email.val()
				},
				success:(res)=>{
					console.log(res)
					res=JSON.parse(res)
					if(res.code==0){
						this.state.html("注册失败，<a href='registor.html'>请重新注册</a>")
					}
					if(res.code==1){
						setInterval(()=>{
							location.href="login.html"
						},1000)
						this.state.html("1s后跳转，<a href='login.html'>立即跳转</a>")
					}
				}
			})
		}
	}
	new Zhuce();
