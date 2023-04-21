export default class CurrencyService {
  static async getCurrency(base_code, conversion_rates, currencyOutput, results) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/CAD`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {  
      return error;
    }
  }
}