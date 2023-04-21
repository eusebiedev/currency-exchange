import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

// Business Logic

function getCurrency(currency) {
  let promise = CurrencyService.getCurrency(currency);
  promise.then(function(response) {
    printElements(response, currency);
  }, function(errorMessage) {
    printError(errorMessage);
  });
}

// UI Logic

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error converting the currency data: ${error}`;
}

function printElements(response, currency, currencyExchange) {
  document.querySelector('#showResponse').innerText = `Your ${currency} exchange rate in ${currencyExchange} is ${response.conversion_rates}$.`;
}


function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#usd-input').value;
  const currencyExchange = document.querySelector('#currencyExchange').value;
  document.querySelector('#usd-input').value = null;
  document.querySelector('#currencyExchange').value = null;
  getCurrency(currency, currencyExchange);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});