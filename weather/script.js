window.onload = function() {

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "http://api.weatherstack.com/current?access_key=189421295101c742458fa8c625079742&query=Stockholm&forecast_days=5&hourly=1", true);
	xhttp.onreadystatechange = getNewWeather;

	xhttp.send();
}

function getNewWeather() {
	if(this.readyState == 4 && this.status == 200) {
			var weather = JSON.parse(this.responseText);
			var tableList = document.getElementsByTagName("tbody")[0];

			tableList.innerHTML += "<tr>" +
			"<td>" +weather.location.localtime + "</td>" +
			"<td>"+ weather.location.region +"</td>" +
			"<td>"+ weather.current.temperature +" C</td>" +
			"<td>"+weather.current.weather_descriptions + "</td>" +
			"</tr>"
	}
}
