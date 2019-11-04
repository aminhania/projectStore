// var beats = 250;
// var laptop1 = 1050 ;
// var JBL = 240;
// var smartWatch = 400;
// var iphone = 1100;
// var laptop2 = 2500;
var sum = 0;
function choos(obj){
$('#btn1').on('click', function() {
	sum = sum + $('#pr1').text();
	$("#ttl").html('<span>' + sum + '</span>');

});

}