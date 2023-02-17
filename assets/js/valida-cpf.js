
export default function validaCPF(input) {
    const cpf = input.value.replace(/\.|-/g, "");
    console.log(cpf);
}