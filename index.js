var pecas = []
var hodo = ''

window.onload = function(){
    exibirPecas()
    exibirManutencao()
}

function hodometro(){
    document.getElementById("inputhodo").value 
    let containerMsg = document.getElementById("containermanutencao")
    containerMsg.innerHTML = `
        <p>Manutenção aos ${document.getElementById("inputhodo").value} km</p>
    `
    localStorage.setItem('hodo', JSON.stringify(document.getElementById("inputhodo").value))
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

function exibirManutencao(){
    const hodoGuardados = localStorage.getItem('hodo')
    if (hodoGuardados){
        document.getElementById("inputhodo").value = JSON.parse(hodoGuardados)
    } else {
        console.warn('Informe o hodometro')
    }
    if (document.getElementById("inputhodo").value){
        hodometro()
    }
}
