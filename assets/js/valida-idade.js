export default function validaIdade(input) {
    const dataNasc = new Date(input.value);
    if(!verificaMaior18(dataNasc)) {
        input.setCustomValidity(true);
    }
}
function verificaMaior18(dataNasc) {
    const dataAtual = new Date();
    const dataPermitida = new Date(dataNasc.getUTCFullYear() + 18, dataNasc.getUTCMonth(), dataNasc.getUTCDate());
    
    return dataAtual >= dataPermitida;
}