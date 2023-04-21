import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

// Business Logic

async function getCurrency(usdInput, currencyOutput, exchange) {
  const response = await CurrencyService.getCurrency(usdInput, currencyOutput, exchange);
  if (response.results) {
    printElements(response, usdInput, currencyOutput, exchange);
  } else {
    printError(response, usdInput, currencyOutput, exchange);
  }
}

// UI Logic

function printElements(response, usdInput, currencyOutput, exchange) {
  document.querySelector('#showResponse').innerText = `Your ${usdInput} exchange rate is ${response.conversion_rate} ${currencyOutput}, and comes to ${exchange} to $.`;
}

function printError(error, usdInput, currencyOutput) {
  document.querySelector('#showResponse').innerText = `There was an error converting the currency data for ${usdInput} to ${currencyOutput} ${error.statusText}: ${error.message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#usd-input').value;
  document.querySelector('#usd-input').value = null;
  getCurrency(currency);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});