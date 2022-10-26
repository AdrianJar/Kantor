
{
    const number1Element = document.querySelector(".js-number1")
    const courseElement = document.querySelector(".js-course")
    const number2Element = document.querySelector(".js-number2")
    const formElement = document.querySelector(".js-form")

    formElement.addEventListener("input", (event) => {
        event.preventDefault();

        const number1 = number1Element.value;
        const course = courseElement.value;

        const number2 = number1 * course;

        document.getElementById("number2").value = number2.toFixed(2);
    })
}

{

    const buttonElement = document.querySelector(".js-button")
    const currencyFrom = document.querySelector(".currency1")
    const currencyTo = document.querySelector(".currency2")

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
}
