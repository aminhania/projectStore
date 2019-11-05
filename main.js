var beats = 250;
var laptop1 = 1050 ;
var JBL = 240;
var smartWatch = 400;
var iphone = 1100;
var laptop2 = 2500;
var sum = 0;

$('#pr1').html(beats);
$("#pr2").html(laptop1);
$("#pr3").html(JBL);
$("#pr4").html(smartWatch);
$("#pr5").html(iphone);
$("#pr6").html(laptop2);

$(document).ready(function() {
	$('#btn1').on('click', function() {
		var cost = beats * $("#in1").val();
		sum = sum + cost;
		$('#list').append("beats earphones<br>cost: " + cost + " * " + $("#in1").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});

	$('#btn2').on('click', function() {
		var cost = laptop1 * $("#in2").val();
		sum = sum + cost;
		$('#list').append("laptop1<br>price: " + laptop1 + " * " + $("#in2").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});

	$('#btn3').on('click', function() {
		var cost = JBL * $("#in3").val();
		sum = sum + cost;
		$('#list').append("JBL<br>price: " + JBL + " * " + $("#in3").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});

	$('#btn4').on('click', function() {
		var cost = smartWatch * $("#in4").val();
		sum = sum + cost;
		$('#list').append("smartWatch<br>price: " + smartWatch + " * " + $("#in4").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});

	$('#btn5').on('click', function() {
		var cost = iphone * $("#in5").val();
		sum = sum + cost;
		$('#list').append("iphone XI<br>price: " + iphone + " * " + $("#in5").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});

	$('#btn6').on('click', function() {
		var cost = laptop2 * $("#in6").val();
		sum = sum + cost;
		$('#list').append("laptop2<br>price: " + laptop2 + " * " + $("#in6").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});
})
