import validaCPF from "./valida-cpf.js";
const objetoUser = [];

const allInputs = document.querySelectorAll(".container__input");
console.log(allInputs);

allInputs.forEach(input => {
    input.addEventListener('blur', () => verificaInput(input))
})

function verificaInput(input) {
    if(input.name == "cpf") {
        validaCPF(input);
    }
    else {
        console.log("teste");
    }
}