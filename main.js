

$(document).ready(function() {
	var sum = 0;
	
	var products = [
	{name: "beats pro",price: 250, id: 'btn1'},
	{name: "laptop1", price: 1050, id: 'btn2'}, 
	{name: "JBL Headphone", price: 240, id:'btn3'},
	{name: "smartWatch", price: 400, id: 'btn4'},
	{name: "iphone XI", price: 1100, id: 'btn5'},
	{name: "laptop2", price: 2500, id: 'btn6'}
	];

	$('#pr1').append(products[0].price);
	$("#pr2").append(products[1].price);
	$("#pr3").append(products[2].price);
	$("#pr4").append(products[3].price);
	$("#pr5").append(products[4].price);
	$("#pr6").append(products[5].price);

	$("#name1").html(products[0].name);
	$("#name2").html(products[1].name);
	$("#name3").html(products[2].name);
	$("#name4").html(products[3].name);
	$("#name5").html(products[4].name);
	$("#name6").html(products[5].name);
	
var idBtn = ["bt1", "btn2", "btn3", "btn4", "btn5", "btn6"];
	/*$('#btn1').on('click', function() {
		var cost = products[0].price * $("#in1").val();
		sum = sum + cost;
		$('#list').append(products[0].name + "<br>cost: " + cost + " * " + $("#in1").val() +"<hr>")
		$("#ttl").html('your total is: ' + sum);
		
	});
	*/
	

	
	$('.btns').on('click',function(){
		//var sum = 0;
		
		var button = $(this).attr('id');
		for (var i = 0; i < products.length; i++) {
		    if(button === products[i].id){
		 	var cost = products[i].price;
		 	$('#list').append(products[i].name + "<br>cost: " + products[i].price + "<hr>")
		 }
		 //sum = sum + cost ;
		 
		}
		sum = sum + cost ;
		$("#ttl").html('your total is: ' + sum);
	

	});
		$('#reset').on('click', function(){
		$('#list').html("");
		$("#ttl").html("");
		sum = 0;
	});


		$('#checkout').on("click", function(){
			alert('see you next time you got a discount Copon');
			$('#list').html("");
			$("#ttl").html("");
			sum = 0;

		});

})

	
	/*

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
	*/

