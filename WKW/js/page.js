
	class Page{
			constructor(receive){
				//默认属性
				this.list=receive.list;
				
				this.left = receive.left;
				this.right = receive.right;
				this.pageCont = receive.pageCont;
				this.num = receive.num;
				this.index = receive.index;
				this.url = receive.url;
				
				//1请求数据、、绑定事件
				this.load();
				
				this.addEvent()
			}
			
			load(){
				var that=this;
				ajaxPost(this.url,(res)=>{////////////////////////////////////////////////////////////////////////////////////////////
					console.log(res)
					that.res=JSON.parse(res);
					//渲染页面
					that.yemian();
				
					//渲染页码				
					that.yma();	
					/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				})
			}
			yemian(){
	            // console.log(this.res);
	            var str = "";
	            this.res.forEach((val)=>{
	                str += `<li class="box" qwe="${val.goodsId}">
								<a href="detail.html" class="buy">
									<img src="${val.src}"/>
									<p>${val.des}</p>
									<div>
										<b>批发价</b>
										<i>${val.price}</i>
										<u>${val.no}</u>
									</div>
								</a>
								<a href="detail.html" class="gou">立即购买</a>
								<span class="btn">加入收藏</span>
							</li>`
	//              console.log(str)
	            })
	            this.list.innerHTML=str
	        }
	
			
			yma(){
				var str="";
				this.maxnum=Math.ceil(this.res.length/this.num)
				for(var i=0;i<this.maxnum;i++){
					str+=`<li>${i+1}</li>`
				}
				this.pageCont.innerHTML=str;///////////////////////////////////////////////////////////////////////////////////////
				this.setActive();
			}
			
			setActive(){
				for(var i=0;i<this.pageCont.children.length;i++){/////////////////////////////////////////////////////////////////
					this.pageCont.children[i].className="";
				}
				this.pageCont.children[this.index].className="active";
			}
			
	
			addEvent(){
				var that=this;
				this.left.onclick=function(){
					that.changeIndex(0);
					console.log(1)
				}
					
				this.right.onclick=function(){
					that.changeIndex(1);
					console.log(2)
				}
			}
			
			changeIndex(status){
				if (status==0) {
					if(this.index==0){
						this.index=this.maxnum-1;
						console.log(122)
					}else{
						this.index--;
						console.log(2222)
					}
				}else{
			     	if(this.index==this.maxnum-1){
						this.index=0;
						console.log(221)
					}else{
						console.log(222)
						this.index++;
					}
				}	
				
				this.yma();		
				this.yemian();
			}
			
		
		}
	
		new Page({
			list:document.getElementById("cont"),
			left:document.getElementById("btnL"),
			right:document.getElementById("btnR"),
			pageCont:document.getElementById("page"),
			url:"http://localhost/WKW/data/goods.json",
			index:0,
			num:4
		});
