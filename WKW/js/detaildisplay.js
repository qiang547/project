
	console.log(location.search)
	var str1=location.search
	var str2=str1.slice(1)
	console.log(str2)
	class Display{
	
		
		constructor(){
			//设置默认
	//		this.oul=$("#floor").find(".cont")
			this.goodsUrl = "http://localhost/WKW/data/goods.json";
			
			//开启ajax，实时获取最新数据
	        this.load();
	        // 绑定事件
	//      this.addEvent();
		}
	//	addEvent(){
	//		$("#floor").find(".cont").on("click","li",function(){
	////			 location.search=$(this).res.attr("goodsId")
	//		})
	//	}
		
		load(){
	        var that=this;
	        ajaxGet(this.goodsUrl,function(res){
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
	        	console.log(this.res[i].goodsId==str2)
	        	if(this.res[i].goodsId==str2){
		            str += `<div class="art-t">
									<div class="cont art-t-l">
										<div class="s_box">
											<img src="${this.res[i].src}" class="sImg"/>
										</div>
										<div class="b_box">px
											<img src="${this.res[i].src}" class="bImg"/>
										</div>
									</div>	
									<div class="art-t-r">
										<h5>正品美国Eve s Glow 磨砂膏200g 柠檬美白浴盐咖啡椰子身体磨砂膏去鸡皮去角质</h5>
										<div class="shuoming">${this.res[i].des}
										</div>
										<p class="price">批发价：￥：29.5&nbsp;&nbsp;&nbsp;<span>￥：99.5</span></p>
										<div class="quehuo">
											<div class="dengji">
												<b>目前此商品缺货，请进行缺货登记！</b>
												<a href="#">加入收藏</a>
											</div>
										</div>
									</div>
								</div>
								<div class="art-c">
									<div class="smalltu">
										<img src="${this.res[i+1].src}" id="s1" />
										<img src="${this.res[i].src}" id="s2" />
									</div>
									<div class="xiangqin">
										<a href="##" id="a1">商品详情</a>
										<a href="##" id="a2">购买咨询</a>
										<a href="##" id="a3">支付方式</a>
										<a href="##" id="a4">配送方式</a>
									</div>
								</div>`;
				}
	        }
	//      console.log(str)
			$("article").prepend(str)
	        this.addEvent()
	    }
			//放大镜功能
	        addEvent(){
				var that = this;
				
				this.sBox = document.querySelector(".s_box");
	//			console.log(this.sBox)
				this.sImg = document.querySelector(".sImg");
	//			console.log(this.sImg)
				this.bBox = document.querySelector(".b_box");
				this.bImg = document.querySelector(".bImg");
				
				this.s1=document.getElementById("s1");
				this.s2=document.getElementById("s2");
				
				console.log(this.s1)
				
				
				
				//切换图片功能
				this.s1.onclick=function(){
					var i=0;
					that.changePicture(i)
				}
				this.s2.onclick=function(){
					var i=1;
					that.changePicture(i)
				}
				
				
				
	//				进入事件
				this.sBox.onmouseenter = function(){
	//					3-1.显示
					that.show()
				}
	//				离开事件
				this.sBox.onmouseleave = function(){
	//					3-2.消失
					that.hide()	
				}
	//				移动事件
				this.sBox.onmousemove = function(eve){
					var e = eve || window.event
	//					3-3.移动
					that.move(e);
				}
			}	
			
			
				changePicture(i){
					var that=this;
					var strw=this.s1.getAttribute("src")
					console.log(strw)
//					console.log(this.s1.attr())
					if(i==0){
						that.sImg.setAttribute("src",that.s1.getAttribute("src"))
						that.bImg.setAttribute("src",that.s1.getAttribute("src"))
					}
					
					if(i){
						that.sImg.setAttribute("src",that.s2.getAttribute("src"))
						that.bImg.setAttribute("src",that.s2.getAttribute("src"))
					}
				}
			
				show(){ 
					this.bBox.style.display = "block";
					
	//				提前判断,将来的实例身上是否有span属性,有就显示,没有就创建
					if(!this.span){
		//				创建鼠标下方的蒙板
						this.span = document.createElement("span");
						var w = this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth;
						var h = this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight;
						
						this.span.style.cssText = `width:${w}px;height:${h}px;background:url(../img/01.jpg);background-size:400px 300px;position:absolute;left:0;top:0;`;
						this.sBox.appendChild(this.span);
					}
					
	//				有,就显示
					this.span.style.display = "block";
					
					this.sImg.style.opacity = "0.6"
				}
				
				hide(){
	//				消失
					this.span.style.display = "none";
					this.bBox.style.display = "none";
					
					this.sImg.style.opacity = "1"
				}
				
				move(e){
	//				计算移动的距离
					var l = e.clientX - this.sBox.offsetLeft - this.span.offsetWidth/2;
					var t = e.clientY - this.sBox.offsetTop - this.span.offsetHeight/2;
					
	//				span的边界限定
					if(l < 0) l=0;
					if(t < 0) t=0;
					if(l > this.sBox.offsetWidth - this.span.offsetWidth){
						l = this.sBox.offsetWidth - this.span.offsetWidth
					}
					if(t > this.sBox.offsetHeight - this.span.offsetHeight){
						t = this.sBox.offsetHeight - this.span.offsetHeight
					}
	//				设置span的位置
					this.span.style.left = l + "px";
					this.span.style.top = t + "px";
					
	//				计算span移动的比例
					var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
					var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);
					
	//				根据比例,计算右边大图要移动的距离，注意方向
					this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
					this.bImg.style.top = -y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + "px";
					
					this.span.style.backgroundPosition = -l + "px " + -t +"px";
				}
	}
	new Display();
	
	
