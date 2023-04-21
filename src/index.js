import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

// Business Logic

function getCurrency(currency, currencyExchange) {
  let promise = CurrencyService.getCurrency(currency, currencyExchange);
  promise.then(function(response) {
    printElements(response, currency, currencyExchange);
  }, function(errorMessage) {
    printError(errorMessage);
  });
}

// UI Logic

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error converting the currency data: ${error}`;
}

function printElements(response, currency, currencyExchange) {
  console.log(response);
  document.querySelector('#showResponse').innerText = `Your ${currency}$ exchange rate in ${currencyExchange} is ${response.conversion_rate}.`;
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