var pecas = []
function hodometro(){
    let hodo = document.getElementById("inputhodo").value
    let containerMsg = document.getElementById("containermanutencao")
    containerMsg.innerHTML = `
        <p>Manutenção aos ${hodo} km</p>

        <p>Peça PPP precisa trocar aos ${hodo} km</p>
        
    `
    containerMsg.style = ""
}

function cadastraPeca(){
    let peca = document.getElementById("inputpeca").value
    let pecakm = document.getElementById("inputpecakm").value
    pecas.push({nome:peca,km:pecakm})
    exibirPecas()
}

function exibirPecas(){
    let containerMsg = document.getElementById("conainerPecas")
    containerMsg.innerHTML = ``
    for (const objpeca of pecas) {
        containerMsg.innerHTML += `
            <p>Peça ${objpeca.nome} precisa trocar aos ${objpeca.km} km</p>
        `
    }
    containerMsg.style = ""
}
