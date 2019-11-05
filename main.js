

$(document).ready(function() {
	var sum = 0;
	
	var products = [
	{name: "beats pro",price: 250},
	{name: "laptop1", price: 1050}, 
	{name: "JBL Headphone", price: 240},
	{name: "smartWatch", price: 400},
	{name: "iphone XI", price: 1100},
	{name: "laptop2", price: 2500}
	];

	$('#pr1').html(products[0].price);
	$("#pr2").html(products[1].price);
	$("#pr3").html(products[2].price);
	$("#pr4").html(products[3].price);
	$("#pr5").html(products[4].price);
	$("#pr6").html(products[5].price);

	$("#name1").html(products[0].name);
	$("#name2").html(products[1].name);
	$("#name3").html(products[2].name);
	$("#name4").html(products[3].name);
	$("#name5").html(products[4].name);
	$("#name6").html(products[5].name);

	$('#btn1').on('click', function() {
		var cost = products[0].price * $("#in1").val();
		sum = sum + cost;
		$('#list').append(products[0].name + "<br>cost: " + cost + " * " + $("#in1").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);
		
	});

	$('#btn2').on('click', function() {
		var cost = products[1].price * $("#in2").val();
		sum = sum + cost;
		$('#list').append(products[1].name + "<br>price: " + cost + " * " + $("#in2").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});

	$('#btn3').on('click', function() {
		var cost = products[2].price * $("#in3").val();
		sum = sum + cost;
		$('#list').append(products[2].name +  "<br>price: " + cost + " * " + $("#in3").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});

	$('#btn4').on('click', function() {
		var cost = products[3].price * $("#in4").val();
		sum = sum + cost;
		$('#list').append(products[3].name + "<br>price: " + cost + " * " + $("#in4").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});

	$('#btn5').on('click', function() {
		var cost = products[4].price * $("#in5").val();
		sum = sum + cost;
		$('#list').append(products[4].name + "<br>price: " + cost + " * " + $("#in5").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});

	$('#btn6').on('click', function() {
		var cost = products[5].price * $("#in6").val();
		sum = sum + cost;
		$('#list').append(products[5].name + "<br>price: " + cost + " * " + $("#in6").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);

	});
	$('#reset').on('click', function(){
		$('#list').html("");
		$("#ttl").html("");
	});

})
