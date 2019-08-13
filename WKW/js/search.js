
	class Search{
	        constructor(){
	            this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
		        this.txt = document.getElementById("txt");
		        this.list = document.getElementById("list");
		        this.addEvent()
	    }
	    addEvent(){
	        var that = this;
	        this.txt.oninput = function(){
	            that.value = this.value;
	            that.load()
	        }
	    }
	    load(){
	        var that = this;
	        jsonp(this.url,function(res){
	            that.res = res;
	            that.display();
	        },{
	            columnName:"cb",
	            cb:"ajsgdajsdg",
	            wd:this.value
	        })
	    }
	    display(){
	        // console.log(this.res)
	        var str = "";
	        for(var i=0;i<this.res.s.length;i++){
	            str += `<li>${this.res.s[i]}</li>`
	        }
	        this.list.innerHTML = str;
	    }
	}
	new Search;
	
