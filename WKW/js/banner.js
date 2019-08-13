
	$(".banner1").banner({
	        items:$(".banner1").find("img"),        //必传
	        left:$(".banner1").find("#left"),       //可选
	        right:$(".banner1").find("#right"),     //可选
	        autoPlay:true,                          //可选，默认有自动播放
	        delayTime:2000,                         //可选，默认2000
	        moveTime:300,                          //可选，默认300
	        index:0,                                //可选，默认0
	    })
