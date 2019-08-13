
	//require.config({
	//  baseUrl:"module",
	//  paths:{
	//      jq:"../js/jquery.1.12.4",
	//      detail:"../module/detail"
	//      //      magnifier:"magnifier",
	//  }
	//})
	
	require(["../js/jquery.1.12.4","../module/detail","../module/totop"],function(_,d,m){
	  	console.log(m)
	    var mydetail= new d;
	//  var mymagnifier= new m;
		var mytop= new m;
	    mydetail.addEvent();
	    mytop.totop();
	    console.log(1)
	    
	})

