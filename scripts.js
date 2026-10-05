const USD = 5.14
const EUR = 5.77
const GBP = 6.81

const form = document.querySelector("form")
const valorDigitado = document.getElementById("amount")
const moeda = document.getElementById("currency")
const regex = /\D+/g
const footer = document.querySelector("main footer")
const descricao = document.getElementById("description")
const result = document.getElementById("result")

valorDigitado.addEventListener("input", ()=> {
    valorDigitado.value = valorDigitado.value.replace(regex, "")
})

form.onsubmit = (event) =>{
    event.preventDefault()

    switch(moeda.value){
        case "USD":
            converter(valorDigitado.value, USD, "US$")
            break
        case "EUR":
            converter(valorDigitado.value, EUR, "€")
            break
        case "GBP":
            converter(valorDigitado.value, GBP, "£")
    }

}

function converter(valorFinal, preco, simbol){
    try{
        descricao.textContent = `${simbol}1 = R$${preco}`
        let total = String(valorFinal * preco).replace(".", ",")
        result.textContent = `R$${total}`
        
        footer.classList.add("show-result")
    }catch{
        footer.classList.remove("show-result")
        alert("Não foi possivel converter")
    }
}