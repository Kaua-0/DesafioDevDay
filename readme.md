# Aplicação de Previsão do Tempo
## Integrantes do Projeto
- Lucas Silva de Paula
- Antonio Kauã de Araujo Silva

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
- (estilos inline no `<style>`) — estilos e responsividade.

---

## API Key

Para utilizar a aplicação, é necessário uma chave válida da [WeatherAPI](https://www.weatherapi.com/). Substitua a variável `apiKey` no arquivo `index.js` pela sua chave pessoal.

---

## Licença

Projeto open-source para fins educacionais e pessoais.

---

## Pontos de melhoria

- **Separação dos estilos (CSS)**  
  Extrair os estilos inline para um arquivo CSS externo, melhorando a legibilidade e manutenção do projeto.

- **Modularização do código JavaScript**  
  Criar funções reutilizáveis para chamadas às APIs e manipulação do DOM. Organizar o código em módulos para facilitar manutenção e escalabilidade.

- **Tratamento de erros aprimorado**  
  Exibir mensagens claras ao usuário em casos de erro na busca, falha na geolocalização ou limite de requisições.

- **Melhorar acessibilidade**  
  Adicionar atributos ARIA, melhorar navegação por teclado e garantir bom contraste nas cores.

- **Cache local / armazenamento**  
  Utilizar `localStorage` para guardar a última cidade consultada, evitando chamadas repetidas à API.

- **Feedback visual**  
  Implementar indicadores de carregamento (spinners) e mensagens de confirmação para sucesso ou erro nas operações.

- **Internacionalização (i18n)**  
  Preparar a aplicação para suportar múltiplos idiomas no futuro, facilitando tradução das interfaces.

- **Melhorar responsividade**  
  Ajustar o layout e fontes para diversos tamanhos de tela, especialmente dispositivos móveis mais antigos.

- **Testes automatizados**  
  Criar testes unitários para funções principais utilizando frameworks como Jest.

- **Uso de frameworks/libraries (opcional)**  
  Avaliar o uso de frameworks modernos (React, Vue, Svelte) para melhorar a estrutura e manutenção da interface.

---

Se quiser contribuir ou tirar dúvidas, fique à vontade para abrir uma issue ou pull request.
