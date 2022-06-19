var pecas = []

window.onload = function(){
    exibirPecas()
}

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
    localStorage.setItem('pecas', JSON.stringify(pecas))
    exibirPecas()
    document.getElementById("inputpeca").value = ""
    document.getElementById("inputpecakm").value = ""
}

function exibirPecas(){
    carregarPecas()
    let containerMsg = document.getElementById("conainerPecas")
    containerMsg.innerHTML = ``
    for (const objpeca of pecas) {
        containerMsg.innerHTML += `
            <p>Peça ${objpeca.nome} precisa trocar aos ${objpeca.km} km</p>
        `
    }
    containerMsg.style = ""
}

function carregarPecas(){
    const valoresGuardados = localStorage.getItem('pecas')
    if (valoresGuardados) {
        pecas = JSON.parse(valoresGuardados)
    } else {
        console.warn('vamos sem carregar pecas')
        pecas = []
    }
}
