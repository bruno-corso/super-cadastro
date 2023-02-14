const objetoUser = [];

console.log("hello world!");
console.log(objetoUser);

const allInputs = document.querySelectorAll(".container__input");
console.log(allInputs);

allInputs.forEach(input => {
    input.addEventListener('blur', (e) => {
        console.log(e.target.value);
    })
})  