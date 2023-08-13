//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange_service.js'

function printError(request, currency) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the exchange data for your currency:  ${request.status} ${request.statusText}`;
}

request.addEventListener("loadend", function () {
  const response = JSON.parse(this.currency);
  if (this.status === 200) {
    printElements(response, currency);
  } else {
    printError(this, currency);
  }
});





