let div = document.querySelector('.answer'); 
let boton = document.querySelector('#searchBtn'); 
let nameCountry = document.querySelector('#countrySelect'); 
let nameCity = document.querySelector('#exampleFormControlInput1'); 

boton.addEventListener('click', () => {
    let city = nameCity.value.trim()
    let country = nameCountry.value

    if (city === "") {
        div.textContent = "Por favor, ingrese una ciudad."
        return;
    }

    getData(city, country);
});

function getData(city, country) {
    const apiId = '0ba73454d51bfed7780ffb641c3469a0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}&units=metric&lang=es`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                //console.log(data)
                div.innerHTML = `
                    <p><strong>Ciudad:</strong> ${data.name}</p>
                    <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
                    <p><strong>Clima:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
                `;
            } else {
                div.textContent = "No se encontró la ciudad. Verifique el nombre."
            }
        })
        .catch(error => {
            div.textContent = "Error al obtener los datos del clima."
            console.error(error)
        });
}