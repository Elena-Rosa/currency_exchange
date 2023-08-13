import onReceive_API_Response from "./utility"; 'utility.js'
export default class ExchangeService {
    static getData(exchange_id) {
        return fetch("https://v6.exchangerate-api.com/v6/{process.env.API_KEY}/latest/USD")
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                } else {
                    console.log(response.conversion_rates[exchange_id]);
                    return response.json();

                }
            })
            .catch(function (error) {
                return error;
            })
    }
}

