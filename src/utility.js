

window.addEventListener("load", function () {
    this.document.querySelector('button').addEventListener("click", function () {
        let currency = document.getElementById("currency");
        let exchange = new ExchangeService();
        let rate = exchange.getData(currency);
    })
}
)

function getData() {
    const url = `https://v6.exchangerate-api.com/v6/{process.env.API_KEY}`
}