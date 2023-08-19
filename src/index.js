//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';
//import ExchangeService from './js/exchange_service.js'



function printError(request, currency) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the exchange data for your currency:  ${request.status} ${request.statusText}`;
}

request.addEventListener("load", function () {
  const response = JSON.parse(this.currency);
  if (this.status === 200) {
    printElements(response, currency);
  } else {
    printError(this, currency);
  }
});


window.addEventListener("load", function () {
  this.document.querySelector('button').addEventListener("click", function () {
    event.preventDefault();
    let currency = document.getElementById("currency").value;
    let amount = document.getElementById("amount").value;
    getData(currency, amount);
  });
}
);
function getData(exchange_id, amount) {
  fetch("https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD")
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        response.json().then(function (data) {
          let rate = data.conversion_rates[exchange_id];
          let convertedAmount = amount * rate;
          document.getElementById("showResponse").innerHTML = "Converted amount: " + convertedAmount.toFixed(2);
        });


      }
    })
    .catch(function (error) {
      return error;
    });
}

