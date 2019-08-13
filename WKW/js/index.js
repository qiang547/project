	var msg=localStorage.getItem("logins");
	console.log(msg)
	if(msg){
		$(".p1").hide();
		$(".p2").show();
		$(".p2 span").html(JSON.parse(msg).user);
		
		$(".shop").on("click",function(){
	//		if(localStorage.getItem("logins")){
				$(".shop").attr("href","car.html")
	//		}
		})
		
	}else{
		$(".p2").hide();
		$(".p1").show()
	}
	
	$(".p2 a").click(function(){
//		history.go(0)
		$(".shop").attr("href","login.html")
		localStorage.removeItem("logins");
		$(".p2").hide();
		$(".p1").show()
	})	

	
