import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './exchange-service';

// Business Logic

function returnExchange(currency, currencyExchange) {
  let promise = CurrencyConverter.returnExchange(currency, currencyExchange);
  promise.then(function(response) {
    printElements(response);
  }, function(errorMessage) {
    printError(errorMessage);
  });
}

// UI Logic

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error converting the currency data: ${error} ${error[0].status} ${error[1].status}`;
}

function printElements(response,) {
  document.querySelector('#showResponse').innerText = `Your ${response[1]}$ exchange rate in ${response[2]} is ${response[0].conversion_result}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  const currencyExchange = document.querySelector('#currencyExchange').value;
  document.querySelector('#currency').value = null;
  document.querySelector('#currencyExchange').value = null;
  returnExchange(currency, currencyExchange);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});