import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './exchange-service';

// Business Logic

async function returnExchange(currency, currencyExchange, currencyExchangeOut) {
  const response = await CurrencyConverter.returnExchange(currency, currencyExchange, currencyExchangeOut);
  if (response.result) {
    printElements(response, currency, currencyExchange, currencyExchangeOut);
  } else {
    printError(response, currency, currencyExchange, currencyExchangeOut);   
  }
}

// UI Logic

function printElements(response, currency, currencyExchange, currencyExchangeOut) {
  document.querySelector('#showResponse').innerText = `Your $${currencyExchangeOut} in ${currency} to ${currencyExchange} exchange rate amount is $${response.conversion_result.toFixed(2)} `;
}

function printError(error) {
  document.querySelector("#showResponse").innerText = `The currency you selected is not a valid code: ${error}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  const currencyExchange = document.querySelector('#currencyExchange').value;
  const currencyExchangeOut = document.querySelector('#currencyExchangeOut').value;
  document.querySelector('#currency').value = null;
  document.querySelector('#currencyExchange').value = null;
  document.querySelector('#currencyExchangeOut').value = null;
  returnExchange(currencyExchange, currencyExchangeOut, currency);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});