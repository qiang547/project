
   class List{
        constructor(){
            this.cont = $("article .cont")
//          console.log(this.cont)
            this.url = "http://localhost/WKW/data/goods.json";

            this.load();
            // 1.绑定事件
            this.addEvent();
        }
        addEvent(){
            var that = this;
            // 利用事件委托找到按钮
            this.cont.on("click",".btn",function(eve){
            	if(eve.target.className == "btn"){
                    // 存cookie，存什么？2.唯一的信息，商品的货号
                    that.id = eve.target.parentNode.getAttribute("qwe");
//                  console.log(eve.target.getAttribute("qwe"))
                    // 3.存cookie了
                    that.setCookie();
                }
            })
        }
        setCookie(){
            // console.log(this.id)
            // S1.规划数据的格式
            // 同一个商品点击多次
            // {id:this.id,num:4}
            // 不同的商品点击多次
            // 只有一条cookie，保存了所有商品
            // [{id:this.id,num:2},{id:this.id,num:4},....]
            // S2.第一次存和之后存,只有一条cookie
            // 先读取
            this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
            if(this.goods.length == 0){
                // 第一次:直接写数组,数组中放一个对象
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }else{
                // 之后存:新商品和老商品
                // 先遍历,比较
                var i = 0;
                var onoff = this.goods.some((val,index)=>{
                    i = index;
                    return val.id == this.id;
                })
                if(onoff){
                    // 老商品:
                    // 修改对应对象的num属性
                    this.goods[i].num++
                }else{
                    // 新商品:
                    // 增加对象
                    this.goods.push({
                        id:this.id,
                        num:1
                    })
                }
            }
            console.log(getCookie("goods"))
            // 再设置
            setCookie("goods",JSON.stringify(this.goods));
        }
        load(){
            var that = this;
            ajaxGet(this.url,function(res){
                that.res = JSON.parse(res);
//              console.log(that.res)
                that.display();
            })
        }
        display(){
            // console.log(this.res);
            var str = "";
	        for(var i=0;i<this.res.length;i++){
	        	console.log(this.res[i].goodsId)
	            str += `<li class="box" qwe="${this.res[i].goodsId}">
							<a href="detail.html?${this.res[i].goodsId}" class="buy">
								<img src="${this.res[i].src}"/>
								<p>${this.res[i].des}</p>
								<div>
									<b>批发价</b>
									<i>${this.res[i].price}</i>
									<u>${this.res[i].no}</u>
								</div>
							</a>
							<a href="detail.html${this.res[i].goodsId}" class="gou">立即购买</a>
							<span class="btn">加入收藏</span>
						</li>`;
	        }
//          this.res.forEach((val)=>{
//              str += `<li class="box" qwe="${val.goodsId}">
//							<a href="detail.html?${val.goodsId}" class="buy">
//								<img src="${val.src}"/>
//								<p>${val.des}</p>
//								<div>
//									<b>批发价</b>
//									<i>${val.price}</i>
//									<u>${val.no}</u>
//								</div>
//							</a>
//							<a href="detail.html" class="gou">立即购买</a>
//							<span class="btn">加入收藏</span>
//						</li>`
////              console.log(str)
//          })
            this.cont.html(str);
        }
    }

    new List;
