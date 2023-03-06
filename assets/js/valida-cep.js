export default function validaCEP(input) {
    const CEPtratado = input.value.replaceAll(/\D/g, "");
    buscaEndereco(CEPtratado);
}

async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPString = await consultaCEP.json();
        var infos = [
            consultaCEPString.logradouro,
            consultaCEPString.localidade,
            consultaCEPString.uf
        ];
        console.log(infos);
    } catch (error) {
        console.log("erro catch")
    }
}