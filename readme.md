# Aplicação de Previsão do Tempo
## Integrates do Projeto
## - Lucas silva de paula
## - Antonio Kauã de Araujo Silva

## Objetivo

Esta aplicação tem como objetivo fornecer uma interface simples, clara e responsiva para consultar a previsão do tempo de qualquer cidade do mundo. O usuário pode:

- Ver a temperatura atual, condição climática e precipitação.
- Acompanhar a previsão para os próximos dias, exibida em cards organizados.
- Visualizar informações específicas sobre **chuva**, **vento** e **temperatura** clicando nas abas correspondentes.

O foco é disponibilizar dados meteorológicos de forma amigável, utilizando APIs externas para garantir informações atualizadas e precisas.

---

## Tecnologias Utilizadas

- **JavaScript**: lógica principal para consumo das APIs e manipulação do DOM.
- **HTML5**: estrutura da página.
- **CSS3**: estilização responsiva e agradável.
- **APIs utilizadas**:
  - [WeatherAPI](https://www.weatherapi.com/) para dados meteorológicos.
  - [BigDataCloud Reverse Geocoding](https://www.bigdatacloud.com/) para converter coordenadas em localidade.

---

## Funcionalidades

- **Geolocalização automática**: Ao carregar a página, a aplicação tenta obter a localização do usuário para mostrar a previsão local.
- **Busca por cidade**: O usuário pode digitar o nome de qualquer cidade para consultar o clima.
- **Previsão para 5 dias**: Mostra a temperatura média e precipitação para os próximos dias em cards.
- **Abas interativas**: Seções para detalhes sobre chuva, vento e temperatura do dia atual.
- **Interface responsiva**: Funciona bem em dispositivos móveis e desktops.

---

## Como usar

1. Abra a página no navegador.
2. Permita o acesso à localização quando solicitado para ver a previsão local automaticamente.
3. Ou digite o nome da cidade desejada no campo de busca e clique em **Buscar**.
4. Clique nas abas **Chuva**, **Vento** ou **Temperatura** para ver informações detalhadas do clima atual.
5. Veja a previsão para os próximos dias na seção inferior.

---

## Estrutura do projeto

- `index.html` — página principal e estrutura do layout.
- `index.js` — código JavaScript que gerencia API calls e atualização do DOM.
- `style.css` (ou estilos inline no `<style>`) — estilos e responsividade.

---

## API Key

Para utilizar a aplicação, é necessário uma chave válida da [WeatherAPI](https://www.weatherapi.com/). Substitua a variável `apiKey` no arquivo `index.js` pela sua chave pessoal.

---

## Licença

Projeto open-source para fins educacionais e pessoais.

---

Se quiser contribuir ou tirar dúvidas, fique à vontade para abrir uma issue ou pull request.
