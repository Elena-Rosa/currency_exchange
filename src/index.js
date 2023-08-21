//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange_service'


function getData(currency, amount) {
  ExchangeService.getData()
    .then(function (response) {
      if (response.result === "success") {
        const rate = response.conversion_rates[currency]
        let convertedAmount = (amount * rate).toFixed(2)


        printElements(convertedAmount, currency, amount);

      } else {
        printError(response, currency);
      }
    });
}





// UI Logic

function printError(response, currency) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the exchange data for your currency:  ${currency} ${response.statusText}`;
}

function printElements(convertedAmount, currency, amount) {
  document.querySelector('#showResponse').innerText = `${amount} dollars in ${currency} currency is : ${convertedAmount}`
}


window.addEventListener("load", function () {
  this.document.querySelector('button').addEventListener("click", function (event) {
    event.preventDefault();
    let currency = document.getElementById("currency").value;
    let amount = document.getElementById("amount").value;
    getData(currency, amount);
    // getData(currency);
  });
}
);
