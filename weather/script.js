window.onload = function() {

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "http://api.apixu.com/v1/forecast.json?key=9c8a9548c091422cae8223737170203&q=Stockholm&days=5", true);
	xhttp.onreadystatechange = getNewWeather;

	xhttp.send();
}

function getNewWeather() {
	if(this.readyState == 4 && this.status == 200) {
		var weather = JSON.parse(this.responseText);
		var tableList = document.getElementsByTagName("tbody")[0];
		for(var i=0; i < weather.forecast.forecastday.length; i++) {
			var newWeather = weather.forecast.forecastday[i];

			tableList.innerHTML += "<tr>" +
			"<td>" +newWeather.date + "</td>" +
			"<td>"+ weather.location.region +"</td>" + 
			"<td>"+ newWeather.day.avgtemp_c +" C</td>" + 
			"<td><img src='http:" + newWeather.day.condition.icon + "'></td>" +
			"</tr>";
		}
	}

}



