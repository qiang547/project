	
	class Gm{
		constructor(){
			//设置默认
	//		this.oul=$("#floor").find("cont")
			this.oul=document.querySelectorAll("#floor .cont")
			this.goodsUrl = "http://localhost/WKW/data/goods.json";
	        // 绑定事件
	//      this.addEvent();
	        //开启ajax，实时获取最新数据
	        this.load();
	        	
				
	//				2.绑定事件
	
		}
		
	//	addEvent(){
	//		var that=this;
	////		$("#floor").find(".cont").on("click","li",function(){
	////			 location.search=$(this).res.attr("qwe")
	////		})
	////		this.oul.addEventListener("click","li",function(){
	////			location.search=that.res.getAttribute("qwe")
	////		})
	//	}
		
		load(){
	        var that=this;
	        ajaxGet(that.goodsUrl,function(res){
	//      	console.log(res)
	            // 解析数据
	            that.res = JSON.parse(res);
	            // 调取渲染页面功能渲染页面
	            that.display();
	        })
		}
		
	
		display(){
	        // 渲染页面
	        var str = "";
	        for(var i=0;i<this.res.length;i++){
	            str += `<li qwe = "goodsId">
	            			<a href="detail.html?${this.res[i].goodsId}" >
	            				<div>
									<img src="${this.res[i].src}"/>
								</div>
								<p>${this.res[i].des}</p>
								<span>批发价</span>
								<b>${this.res[i].price}</b>
								<i>${this.res[i].no}</i>
							</a>
						</li>`;
	        }
	//      console.log(typeof str)
	//		location.search= 123
	//		console.log(location.search) 
	        var that=this;
	        $("#floor").find(".cont").append(str)
	        	
	    }
					
	}			
	new Gm();
