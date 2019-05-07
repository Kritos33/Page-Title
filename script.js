$("button").click(function(){
 var username=$(".in1").val(); 
 var pet=$(".in2").val(); 
 var money=$(".in3").val();
 var gg="   ,by the year 2039 you will pay";
 var ff=240;
 var dd=money*240;
 $(".container").text("Hello "+username + gg +dd);
});