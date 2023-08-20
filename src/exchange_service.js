export default class ExchangeService {

    static getData(exchange_id, amount) {
        return fetch("https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD")
            .then(function (response) {
                if (!response.ok) {
                    const errorMessage = `${response.status} ${response.statusText}`;
                    throw new Error(errorMessage);
                } else {
                    return response.json().then(function (data) {
                        let rate = data.conversion_rates[exchange_id];
                        let convertedAmount = amount * rate;
                        document.getElementById("showResponse").innerHTML = "Converted amount: " + convertedAmount.toFixed(2);
                    }
                })
            .catch(function (error) {
                return error;
            });
    }
}


