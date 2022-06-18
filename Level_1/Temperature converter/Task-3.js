var fahrenheit;
var celsius;
var kelvin;

$(".container").addClass("centered");
$("h1").addClass("shadow");
$("#temFahrenheit").addClass("shadow");
$("#temCelsius").addClass("shadow");
$("#temKelvin").addClass("shadow");

$("#fahrenheit").on("change", function() {
	celsius = "";
	kelvin = ""
	fahrenheit = $("#fahrenheit").val();
	if (fahrenheit !== "") {
		fahrenheit = Number(fahrenheit);
		celsius = fahrenheitToCelsius(fahrenheit);
		kelvin = celsiusToKelvin(celsius);
		if (celsius % Math.floor(celsius) !== 0) {
			celsius = setTwoDecimalPlaces(celsius);
		}
		if (kelvin % Math.floor(kelvin) !== 0) {
			kelvin = setTwoDecimalPlaces(kelvin);
		}
	}
	$("#celsius").val(celsius);
	$("#kelvin").val(kelvin);
});

$("#celsius").on("change", function() {
	fahrenheit = "";
	kelvin = "";
	celsius = $("#celsius").val();
	if (celsius !== "") {
		celsius = Number(celsius);
		fahrenheit = celsiusToFahrenheit(celsius);
		kelvin = celsiusToKelvin(celsius);
		if (fahrenheit % Math.floor(fahrenheit) !== 0) {
			fahrenheit = setTwoDecimalPlaces(fahrenheit);
		}
		if (kelvin % Math.floor(kelvin) !== 0) {
			kelvin = setTwoDecimalPlaces(kelvin);
		}
	}
	$("#fahrenheit").val(fahrenheit);
	$("#kelvin").val(kelvin);
});

$("#kelvin").on("change", function() {
	celsius = "";
	fahrenheit = "";
	kelvin = $("#kelvin").val();
	if (kelvin !== "") {
		kelvin = Number(kelvin);
		celsius = kelvin - 273.15;
		fahrenheit = celsiusToFahrenheit(celsius);

	}
	if (fahrenheit % Math.floor(fahrenheit) !== 0) {
		fahrenheit = setTwoDecimalPlaces(fahrenheit);
	}
	if (celsius % Math.floor(celsius) !== 0) {
		celsius = setTwoDecimalPlaces(celsius);
	}
	$("#celsius").val(celsius);
	$("#fahrenheit").val(fahrenheit);
});

function celsiusToFahrenheit(valCelsius) {
	return valCelsius*1.8 + 32;
}

function fahrenheitToCelsius(valFahrenheit) {
	return (valFahrenheit - 32)/1.8;
}

function celsiusToKelvin(valCelsius) {
	return 273.15 + valCelsius;
}

function setTwoDecimalPlaces(num) {
	if (typeof num == "number") {
		return num.toFixed(2);
	}
}