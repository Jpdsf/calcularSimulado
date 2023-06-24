let resultado = document.querySelector('#resultado')

function calcular(){
    let resposta = document.querySelector('#alinhar').value
    const nota = (((((resposta / 72) * 80) * 1.25) + 20) * 4) / 100
    resultado.innerHTML = `<br>Você tirou ${nota.toFixed(1)}`
}
