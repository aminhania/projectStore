var beats = 250;
var laptop1 = 1050 ;
var JBL = 240;
var smartWatch = 400;
var iphone = 1100;
var laptop2 = 2500;
var sum = 0;
//function choos(obj){
$('#pr1').html(beats);
$("#pr2").html(laptop1);
$("#pr3").html(JBL);
$("#pr4").html(smartWatch);
$("#pr5").html(iphone);
$("#pr6").html(laptop2);

$('#btn1').on('click', function() {
	sum = sum + beats;
	$('#list').append("beats earphones<br>price: " + beats +"<hr>")
	$("#ttl").html('your total is: ' + sum);

});

$('#btn2').on('click', function() {
	sum = sum + laptop1;
	$('#list').append("laptop1<br>price: " + laptop1 +"<hr>")
	$("#ttl").html('your total is: ' + sum);

});

$('#btn3').on('click', function() {
	sum = sum + JBL;
	$('#list').append("JBL<br>price: " + JBL +"<hr>")
	$("#ttl").html('your total is: ' + sum);

});

$('#btn4').on('click', function() {
	sum = sum + smartWatch;
	$('#list').append("smartWatch<br>price: " + smartWatch +"<hr>")
	$("#ttl").html('your total is: ' + sum);

});

$('#btn5').on('click', function() {
	sum = sum + iphone;
	$('#list').append("iphone XI<br>price: " + iphone +"<hr>")
	$("#ttl").html('your total is: ' + sum);

});

$('#btn6').on('click', function() {
	sum = sum + laptop2;
	$('#list').append("laptop2<br>price: " + laptop2 +"<hr>")
	$("#ttl").html('your total is: ' + sum);

});