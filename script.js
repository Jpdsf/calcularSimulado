let resultado = document.querySelector('#resultado')

function calcular(){
    let resposta = document.querySelector('#alinhar').value
    console.log(`Resposta ${resposta}`)
    let questoes = document.querySelector('#questoes').value
    console.log(`Questoes ${questoes}`)
    let pontuacaoEquiparada = (resposta / questoes) * 80
    console.log(`Pontuaca ${pontuacaoEquiparada}`)
    let aproveitamento = (pontuacaoEquiparada * 1.25) + 20
    console.log(`Aproveitamento ${aproveitamento}`)
    let nota = (aproveitamento * 4) / 100
    console.log(nota)
    if (nota >= 4){
        nota = 4
    }
    resultado.innerHTML = `<br>Você tirou ${nota.toFixed(1)}`
}
