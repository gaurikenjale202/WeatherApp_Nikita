async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7aba1cc398f24425d465919a4820f017`
	const response = await fetch(url)
	const data = await response.json();
	console.log(data.name)
}

function fetchCity(){
	let cityName = document.getElementById("city_name");
	if(cityName.value===""){
		alert("Enter a city name");
	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}
