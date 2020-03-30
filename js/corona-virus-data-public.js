(function( $ ) {
	'use strict';
	
	$(document).ready(function(){
    let url = "https://corona.lmao.ninja/all";
    let urlt = "https://corona.lmao.ninja/countries/" ;
    $.getJSON(url,function(data,status){
        $("#cov-total-confirm").append(data["cases"]);
        $("#cov-total-recoverd").append(data["recovered"]);
        $("#cov-total-dead").append(data["deaths"]); 		
		$("#cov-time").text(timestampToTime(data.updated,1)); 
		$(".cov-loading1").fadeOut("slow");
        $("#activ").append( parseInt(data["cases"]) - (parseInt(data["deaths"]) + parseInt(data["recovered"])) ); 

    }).fail(function () {
        $("#cov-time").html(); 
    });

});

/*Time Stamp*/
   function timestampToTime(timestamp,s,time = false) {
        var date = new Date(timestamp * s);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours();
        var m = ':' + (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes());
        var s = ':' + (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
        if(time)
            return h+m;
        else
            return Y+M+D+h+m+s;
    }
})( jQuery );

