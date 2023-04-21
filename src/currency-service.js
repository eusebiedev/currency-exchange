export default class CurrencyService {
  static getCurrency(currency) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/aa4f043898ebaabaa8b994be/latest/USD/`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, currency]);
        } else {
          reject([this, response, currency]);
        }
      }); 
      request.open("GET", url, true);
      request.send();
    });
  }
}