
const convertButton = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")
const currencyselect2 = document.querySelector("currency-select2")




const convertValues = async () =>{
    const inputCurrencyValue = document.querySelector("input").value

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(responde => responde.json())
    const dolarToday = data.USDBRL.high 
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high

    


    const currencyValueToConvert = document.querySelector("#real")
    const currencyValueConverted = document.querySelector("#dolar")

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}



function changeCurrency() {
    const dolarText = document.querySelector("#dolar-text")
    const currencyImg = document.querySelector("#img-us")

    if (currencySelect.value == "euro") {
        dolarText.innerHTML = "Euro"
        currencyImg.src = "img/euro_flag_circular_hd.png"


    }
    if(currencySelect.value == "dolar") {
        dolarText.innerHTML = "Dolar Americano"
        currencyImg.src = "img/estados-unidos (1) 1.png"
    }
    if(currencySelect.value == "libra"){
        dolarText.innerHTML = "Libra"
        currencyImg.src = "img/libra.png"

    }
    if(currencySelect.value == "bitcoin"){
        dolarText.innerHTML = "Bitcoin"
        currencyImg.src = "img/bitcoin.png"

    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)







