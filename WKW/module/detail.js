define(function(){
	class Detail{
//		constructor(){
//			this.addEvent()
//		}
		addEvent(){
			let statu=0;
			$("aside dl dd #p1").click(function(){
					var ddindex=$(this).index()
					if(statu){
						$("aside dl dd .ul1").css({
							display:"none"
						})
						statu=0;
					}else{
						$("aside dl dd .ul1").css({
							display:"block"
						})
						statu=1;
						$("aside dl dd .ul1 li").mouseover(function(){
							var index=$(this).index()
							console.log(index)
							//注意：下面的$("aside dl dd .ul1 li")里面不能用this代替，因为有事件，只拿到了第一个滑过的li
							$("aside dl dd .ul1 li").eq(index).css({background:"blue"})
						})
						$("aside dl dd .ul1 li").mouseout(function(){
							var index=$(this).index()
							$("aside dl dd .ul1 li").eq(index).css({background:""})     
						})
					}
				})
				
				
				$("aside dl dd #p2").click(function(){
					var ddindex=$(this).index()
					if(statu){
						$("aside dl dd .ul2").css({
							display:"none"
						})
						statu=0;
					}else{
						$("aside dl dd .ul2").css({
							display:"block"
						})
						statu=1;
						$("aside dl dd .ul2 li").mouseover(function(){
							var index=$(this).index()
							console.log(index)
							//注意：下面的$("aside dl dd .ul1 li")里面不能用this代替，因为有事件，只拿到了第一个滑过的li
							$("aside dl dd .ul2 li").eq(index).css({background:"blue"})
						})
						$("aside dl dd .ul2 li").mouseout(function(){
							var index=$(this).index()
							$("aside dl dd .ul2 li").eq(index).css({background:""})     
						})
					}
				})
				
				$("aside dl dd #p3").click(function(){
					var ddindex=$(this).index()
					if(statu){
						$("aside dl dd .ul3").css({
							display:"none"
						})
						statu=0;
					}else{
						$("aside dl dd .ul3").css({
							display:"block"
						})
						statu=1;
						$("aside dl dd .ul3 li").mouseover(function(){
							var index=$(this).index()
							console.log(index)
							//注意：下面的$("aside dl dd .ul1 li")里面不能用this代替，因为有事件，只拿到了第一个滑过的li
							$("aside dl dd .ul3 li").eq(index).css({background:"blue"})
						})
						$("aside dl dd .ul3 li").mouseout(function(){
							var index=$(this).index()
							$("aside dl dd .ul3 li").eq(index).css({background:""})     
						})
					}
				})
				
				$("aside dl dd #p4").click(function(){
					var ddindex=$(this).index()
					if(statu){
						$("aside dl dd .ul4").css({
							display:"none"
						})
						statu=0;
					}else{
						$("aside dl dd .ul4").css({
							display:"block"
						})
						statu=1;
						$("aside dl dd .ul4 li").mouseover(function(){
							var index=$(this).index()
							console.log(index)
							//注意：下面的$("aside dl dd .ul1 li")里面不能用this代替，因为有事件，只拿到了第一个滑过的li
							$("aside dl dd .ul4 li").eq(index).css({background:"blue"})
						})
						$("aside dl dd .ul4 li").mouseout(function(){
							var index=$(this).index()
							$("aside dl dd .ul4 li").eq(index).css({background:""})     
						})
					}
				})
				
				$("aside dl dd #p5").click(function(){
					var ddindex=$(this).index()
					if(statu){
						$("aside dl dd .ul5").css({
							display:"none"
						})
						statu=0;
					}else{
						$("aside dl dd .ul5").css({
							display:"block"
						})
						statu=1;
						$("aside dl dd .ul5 li").mouseover(function(){
							var index=$(this).index()
							console.log(index)
							//注意：下面的$("aside dl dd .ul1 li")里面不能用this代替，因为有事件，只拿到了第一个滑过的li
							$("aside dl dd .ul5 li").eq(index).css({background:"blue"})
						})
						$("aside dl dd .ul5 li").mouseout(function(){
							var index=$(this).index()
							$("aside dl dd .ul5 li").eq(index).css({background:""})     
						})
					}
				})
				
				
				$("aside dl dd #p6").click(function(){
					var ddindex=$(this).index()
					if(statu){
						$("aside dl dd .ul6").css({
							display:"none"
						})
						statu=0;
					}else{
						$("aside dl dd .ul6").css({
							display:"block"
						})
						statu=1;
						$("aside dl dd .ul6 li").mouseover(function(){
							var index=$(this).index()
							console.log(index)
							//注意：下面的$("aside dl dd .ul1 li")里面不能用this代替，因为有事件，只拿到了第一个滑过的li
							$("aside dl dd .ul6 li").eq(index).css({background:"blue"})
						})
						$("aside dl dd .ul6 li").mouseout(function(){
							var index=$(this).index()
							$("aside dl dd .ul6 li").eq(index).css({background:""})     
						})
					}
				})
				
				$("aside dl dd #p7").click(function(){
					if(statu){
						$("aside dl dd .ul7").css({
							display:"none"
						})
						statu=0;
					}else{
						$("aside dl dd .ul7").css({
							display:"block"
						})
						statu=1;
						$("aside dl dd .ul7 li").mouseover(function(){
							var index=$(this).index()
							console.log(index)
							//注意：下面的$("aside dl dd .ul1 li")里面不能用this代替，因为有事件，只拿到了第一个滑过的li
							$("aside dl dd .ul7 li").eq(index).css({background:"blue"})
						})
						$("aside dl dd .ul7 li").mouseout(function(){
							var index=$(this).index()
							$("aside dl dd .ul7 li").eq(index).css({background:""})     
						})
					}
				})
			
	
		}
	}
	return 	Detail;
})





