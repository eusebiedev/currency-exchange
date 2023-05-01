import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './exchange-service';

// Business Logic

async function returnExchange(currency, currencyExchange) {
  const response = await CurrencyConverter.returnExchange(currency, currencyExchange);
  let rate = response.conversion_rates[currencyExchange];
  let total = getTotal(currency, rate);
  if (response.result) {
    printElements(total, currency, currencyExchange);
  } else if (response.result === "unsupported-code") {
    printError(response, currencyExchange);
  }
}

function getTotal(userInput, output) {
  let total = userInput * output;
  return total;
}

// UI Logic

function printElements(total, currency, currencyExchange) {
  document.querySelector('#showResponse').innerText = `Your $${currency} exchange rate in ${currencyExchange} is $${total.toFixed(2)}`;
}

function printError(error) {
  document.querySelector("#showResponse").innerText = `The currency you selected is invalid:  ${error}`;
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