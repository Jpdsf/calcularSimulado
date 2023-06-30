let resultado = document.querySelector('#resultado')

function calcular(){
    let resposta = document.querySelector('#alinhar').value
    let questoes = document.querySelector('#questoes').value
    let nota = (((((resposta / questoes) * 80) * 1.25) + 20) * 4) / 100
    if (nota >= 4){
        nota = 4
    }
    resultado.innerHTML = `<br>Você tirou ${nota.toFixed(1)}`
}
