//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange_service.js'


function getData(currency) {
  ExchangeService.getData(currency)
    .then(function (response) {
      if (response.main) {
        printElements(response, currency);
      } else {
        printError(response, currency);
      }
    });
}

// UI Logic

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
