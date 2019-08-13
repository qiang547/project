define(function(){
	class Totop{
//		constructor(){
//			this.totop()
//		}
		totop(){
			$(".totop").click(function(){
				$("html").stop().animate({
					scrollTop:0
				},1000)
			})
		
			$(".totop").mouseover(function(){
				$(".totop").css({
					color:"#ccc"
				})
			})
			
			$(".totop").mouseout(function(){
				$(".totop").css({
					color:"#fff"
				})
			})
	
		}
	}
	return Totop;
})
