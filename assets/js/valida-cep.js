export default async function validaCEP(input) {
    try {const CEPtratado = input.value.replaceAll(/\D/g, "");
        await buscaEndereco(CEPtratado, input);
    } catch (error) {
        console.log("error")
    }
}

const inputEndereco = document.getElementById('endereco');
const inputCidade = document.getElementById('cidade');
const inputEstado = document.getElementById('estado');


async function buscaEndereco(cep, input) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPString = await consultaCEP.json();
        var infos = [
            consultaCEPString.logradouro,
            consultaCEPString.localidade,
            consultaCEPString.uf
        ];
        console.log(infos);
        if (infos[0] == undefined) {
            input.setCustomValidity(true);
            console.log(input.validity)
        }
        else {
            input.setCustomValidity('');
            inputEndereco.value = infos[0];
            inputCidade.value = infos[1];
            inputEstado.value = infos[2];
        }

    } catch (error) {
        input.setCustomValidity(true);
        console.log("erro catch")
    }
}