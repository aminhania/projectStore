var beats = 250;
var laptop1 = 1050 ;
var JBL = 240;
var smartWatch = 400;
var iphone = 1100;
var laptop2 = 2500;
var sum = 0;
//function choos(obj){
$('#btn1').on('click', function() {
	sum = sum + beats;
	$("#ttl").html(sum);

});

$('#btn2').on('click', function() {
	sum = sum + laptop1;
	$("#ttl").html(sum);

});

$('#btn3').on('click', function() {
	sum = sum + JBL;
	$("#ttl").html(sum);

});

$('#btn4').on('click', function() {
	sum = sum + smartWatch;
	$("#ttl").html(sum);

});

$('#btn1').on('click', function() {
	sum = sum + beats;
	$("#ttl").html(sum);

});

