let number1Element = document.querySelector(".js-number1")
let number2Element = document.querySelector(".js-number2")
let courseElement = document.querySelector(".js-course")
let buttonElement = document.querySelector(".js-button")
let formElement = document.querySelector(".js-form")
let currencyFrom = document.querySelector(".currency1")
let currencyTo = document.querySelector(".currency2")
    

formElement.addEventListener("input", (event) => {
    event.preventDefault();

    let number1 = number1Element.value;
    let course = courseElement.value;

    // rate conversion

    let number2 = number1 * course;

    document.getElementById("number2").value = number2.toFixed(2);
})

//Change of currency and value rate

buttonElement.addEventListener("click", () => {
    currencyFrom.classList.toggle("js-EUR");
    number2.innerText = "";

    if (currencyFrom.classList.contains("js-EUR")) {
        currencyFrom.innerText = "PLN:";
        currencyTo.innerText = "EUR:";
        document.getElementById("course").value = 0.21
    } else {
        currencyFrom.innerText = "EUR:";
        currencyTo.innerText = "PLN:";
        document.getElementById("course").value = 4.81
    }

});