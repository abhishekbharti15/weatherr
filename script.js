const url = 'https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dcfacee213msh0014955fb260e1fp177d67jsn7eb2de6898b5',
		'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}