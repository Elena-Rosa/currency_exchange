//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange_service.js'

request.addEventListener("loadend", function () {
  const response = JSON.parse(this.exchange);
  if (this.status === 200) {
    printElements(response, exchange);
  } else {
    printError(this, exchange);
  }
});



