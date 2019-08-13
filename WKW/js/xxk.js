	var ospan=document.querySelector("#top .top-r .box span")
	var oul=document.querySelector("#top .top-r .box ul")
	var ali=document.querySelectorAll("#top .margin .top-r .box ul li")
	
	
	var index=0;
	//		var index2=0;
	var onoff=0;
	ospan.onclick=function(eve){
		var e=eve || window.event
		
		ali[index].className="active";	
		if(onoff==0){
			oul.style.display="block";
			onoff=1;
		}else{
			oul.style.display="none"
			onoff=0;
		}
	//		index=index2
	//		setStyle()
		e.stopPropagation()
	}	
		
	for(var i=0;i<ali.length;i++){
		ali[i].index=i;
		ali[i].onmousemove=function(){
			index=this.index
	//			index2=this.index
			for(var j=0;j<ali.length;j++){
				ali[j].className=""
			}
				ali[index].className="active"
		}
			
		ali[i].onclick=function(eve){
			var e=eve || window.event
				
			ospan.innerHTML=this.innerHTML
		}
	}
	document.onclick=function(){
		oul.style.display="none"
		onoff=0;			
	}
		
	//	键盘	
	document.onkeydown=function(eve){
		var e=eve || window.event
		var code = e.keyCode || e.which;
		
		if(oul.style.display=="none") return
			
		if(code===38){
			if(index==0){
				index=0
			}else{
				index--					
			}
			setStyle();
			ospan.innerHTML=ali[index].innerHTML
		}
		if(code===40){
			if(index==ali.length-1){
				index=ali.length-1
			}else{
				index++					
			}
			setStyle();
			ospan.innerHTML=ali[index].innerHTML
		}
		
		if(code===13){
			ospan.innerHTML=ali[index].innerHTML
			oul.style.display="none";
			onoff=0;
		}
	}
	
	
	function setStyle(){
		for(var j=0;j<ali.length;j++){
			ali[j].className=""
		}
		ali[index].className="active"
	}
