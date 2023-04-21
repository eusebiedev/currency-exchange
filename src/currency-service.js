export default class CurrencyService {
  static getCurrency(currency, currencyExchange) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD/`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, currency, currencyExchange]);
        } else {
          reject([this, response, currency, currencyExchange]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}