import validaCPF from "./valida-cpf.js";
import validaIdade from "./valida-idade.js";
import validaCEP from "./valida-cep.js";

const objetoUser = [];

const allInputs = document.querySelectorAll(".container__input");

allInputs.forEach(input => {
    input.addEventListener('blur', () => verificaInput(input));
    input.addEventListener('invalid', event => event.preventDefault());
})

function verificaInput(input) {
    let msg = "";
    if (input.name == "cpf") {
        validaCPF(input);
    }
    if (input.name == "data_nasc") {
        validaIdade(input);
    }

    if (input.name == "cep") {
        validaCEP(input);
    }

    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            msg = mensagensDeErro[input.name][erro]
            console.log(msg);
        }
    })

    const localErro = input.parentNode.querySelector('.container__erro');
    const validadeElemento = input.checkValidity();

    if (!validadeElemento) {
        localErro.textContent = msg;
    }
    else {
        localErro.textContent = "";
    }
}

const tiposDeErro = [
    'customError',
    'patternMismatch',
    'rangeOverflow',
    'rangeUnderflow',
    'stepMismatch',
    'tooLong',
    'tooShort',
    'typeMismatch',
    'valueMissing'
]

const mensagensDeErro = {
    primeiro_nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    sobrenome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um sobrenome válido."
    },
    username: {
        valueMissing: "O campo de nome de usuário não pode estar vazio.",
        tooShort: "Por favor, preencha um sobrenome válido."
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: "A senha deve ser de 8 a 12 caracteres incluindo letras e pelo menos um número.",
        customError: "A senha deve ser de 8 a 12 caracteres incluindo letras e pelo menos um número."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    telefone: {
        valueMissing: "O campo de telefon não pode estar vazio.",
        patternMismatch: "Por favor, preencha um telefone válido."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    cep: {
        valueMissing: 'O campo de CEP não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CEP válido.",
        customError: "O CEP digitado não existe.",
        tooShort: "O campo de CEP não tem caractéres suficientes."
    },
    data_nasc: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    endereco: {
        valueMissing: 'O endereço não pode estar vazio',
    },
    numero_endereco: {
        valueMissing: 'O número não pode estar vazio',
    }
}