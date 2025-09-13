let weatherData = null; 
    const conteudoDiv = document.getElementById('conteudo');

    const getLocation = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          error => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.log("Usuário negou a solicitação de Geolocalização.");
                break;
              case error.POSITION_UNAVAILABLE:
                console.log("Informação de localização indisponível.");
                break;
              case error.TIMEOUT:
                console.log("A solicitação para obter a localização expirou.");
                break;
              default:
                console.log("Erro desconhecido.");
                break;
            }
            reject(error);
          }
        );
      });
    };

    const fetchGetState = async (latitude, longitude) => {
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`);
      const data = await response.json();
      return data.principalSubdivision;
    };

    const fetchWeather = async (location, days) => {
      const apiKey = '47567d174fb24c1db4e173429251309';
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}&lang=pt`);
      const data = await response.json();
      return data;
    };

    const renderSection = (section) => {
      if (!weatherData) {
        conteudoDiv.innerHTML = '<p>Carregando dados do clima...</p>';
        return;
      }

      const current = weatherData.current;
      let html = '';

      switch (section) {
        case 'chuva':
          html = `
            <h2>Chuva</h2>
            <p>Precipitação atual: <strong>${current.precip_mm} mm</strong></p>
          `;
          break;
        case 'vento':
          html = `
            <h2>Vento</h2>
            <p>Velocidade do vento: <strong>${current.wind_kph} km/h</strong></p>
            <p>Direção: <strong>${current.wind_dir}</strong></p>
          `;
          break;
        case 'temperatura':
          html = `
            <h2>Temperatura</h2>
            <p>Temperatura atual: <strong>${current.temp_c}°C</strong></p>
            <p>Sensação térmica: <strong>${current.feelslike_c}°C</strong></p>
          `;
          break;
        default:
          html = '<p>Seção não encontrada.</p>';
      }

      conteudoDiv.style.display = 'block';
      conteudoDiv.innerHTML = html;
    };

    const renderForecast = (forecast) => {
      const divClima = document.getElementById('div-clima');
      divClima.innerHTML = ''; // limpa antes de popular

      forecast.forEach(dia => {
        const date = new Date(dia.date);
        const options = { weekday: 'long', day: '2-digit', month: 'short' };
        const formattedDate = date.toLocaleDateString('pt-BR', options);

        const card = document.createElement('div');
        card.classList.add('weather-card');

        card.innerHTML = `
          <div class="weather-date">${formattedDate}</div>
          <div class="weather-temp">${dia.day.avgtemp_c.toFixed(1)}°C</div>
          <div class="weather-precip">Chuva: ${dia.day.totalprecip_mm.toFixed(1)} mm</div>
        `;

        divClima.appendChild(card);
      });
    };

    window.addEventListener("DOMContentLoaded", async () => {
      try {
        const { latitude, longitude } = await getLocation();
        await fetchGetState(latitude, longitude);

        weatherData = await fetchWeather(`${latitude},${longitude}`, 5);

        renderForecast(weatherData.forecast.forecastday);
      } catch (error) {
        console.error('Erro ao obter localização ou dados:', error);
      }
    });

    const inputCidade = document.getElementById('cidade');
    const buttonBuscar = document.getElementById('button-buscar');

    const isValidCity = (city) => {
      const cityRegex = /^[a-zA-Zà-úÀ-Ú\s-]+$/;
      return cityRegex.test(city.trim());
    };

    buttonBuscar.addEventListener('click', async () => {
      const cidade = inputCidade.value.trim();

      if (!isValidCity(cidade)) {
        alert("Digite uma cidade válida.");
        return;
      }

      try {
        weatherData = await fetchWeather(cidade, 5);

        renderForecast(weatherData.forecast.forecastday);

       
        const activeSection = document.querySelector('li[data-section].active');
        if (activeSection) {
          const section = activeSection.getAttribute('data-section');
          renderSection(section);
        }

      } catch (error) {
        alert("Erro ao buscar clima para a cidade. Verifique o nome digitado.");
        console.error(error);
      }
    });

    
    document.querySelectorAll('li[data-section]').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('li[data-section]').forEach(el => el.classList.remove('active'));
        item.classList.add('active');

        const section = item.getAttribute('data-section');
        renderSection(section);
      });
    });