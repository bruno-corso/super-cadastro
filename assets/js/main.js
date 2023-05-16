import validaCPF from "./valida-cpf.js";
import validaIdade from "./valida-idade.js";
import validaCEP from "./valida-cep.js";

const allInputs = document.querySelectorAll(".container__input");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener('submit', () => {
    e.preventDefault();

    console.log("FOI CARALHOOO");

    const infosUser = {
        "nome" : e.target.elements["nome"].value,
        "sobrenome" : e.target.elements["sobrenome"].value,
        "email" : e.target.elements["email"].value,
        "usuario" : e.target.elements["username"].value,
        "senha" : e.target.elements["senha"].value,
        "data_nasc" : e.target.elements["data_nasc"].value,
        "cpf" : e.target.elements["cpf"].value,
        "telefone" : e.target.elements["telefone"].value,
        "cep" : e.target.elements["cep"].value,
        "endereco" : e.target.elements["endereco"].value,
        "numero_endereco" : e.target.elements["numero_endereco"].value,
        "complemento" : e.target.elements["complemento"].value,
        "cidade" : e.target.elements["cidade"].value,
        "estado" : e.target.elements["estado"].value    
    }

    localStorage.setItem("user_cadastro", JSON.stringify(infosUser));
})

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
        valueMissing: "O campo de telefone não pode estar vazio.",
        patternMismatch: "Por favor, preencha um telefone válido."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "Este CPF não é valido.",
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