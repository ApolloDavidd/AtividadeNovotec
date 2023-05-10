let vetor = [9,123, 4, 5, 32, 54, 735, 90]

function verificar(){
    let num = document.getElementById('numerin').value
    for (let i = 0; i < vetor.length; i++){
        if (num == vetor[i]) {
            alert('amem')
    } else {
        alert('erro')
    }
    }



}