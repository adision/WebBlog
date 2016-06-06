$(document).ready(function(){
$("#shangxia").hide();
$(function () {
$(window).scroll(function(){
if ($(window).scrollTop()>100){
$("#shangxia").fadeIn(500);
}
else
{
$("#shangxia").fadeOut(500);
}
});
$("#shangxia").click(function(){
$('body,html').animate({scrollTop:0},100);
return false;
});
});
});
