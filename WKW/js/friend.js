
	$("#links").find(".margin").on("mouseover",function(){
		console.log(1)
		$("#links").stop().animate({
			height:63
		},300)
		
		$("#links .margin").stop().animate({
			height:60
		},300)
			
	})
	
	
	$("#links").find(".margin").on("mouseout",function(){
		
		$("#links").stop().animate({
			height:30
		},300)
		
		$("#links .margin").stop().animate({
			height:30
		},300)	
	})
