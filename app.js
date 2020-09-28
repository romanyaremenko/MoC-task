let input = document.querySelector(".main-input");
let message = document.querySelector(".subscription-message");
let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    console.log(input.value)
    message.innerHTML = input.value

    if (input.value.length > 3) {
        message.style.color = "green"
    } else if (regex.test(input.value)){
        message.style.color = "red"
    } else {
        message.style.color = "black"
    }
    input.value = "";
})