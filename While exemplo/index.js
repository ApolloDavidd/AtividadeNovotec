function mostrarNumeros() {
    let numeros = document.getElementById(`div_num`)

    let numero = 500;

    numeros.innerHTML = ``
    while (numero >= 0) {
        numeros.innerHTML += `
    <span> ${numero} </span> <br>
    `

        numero--

    }
}

function num0a5() {
    let numeros = document.getElementById(`div_num`)

    let numero = 1;

    numeros.innerHTML = ``
    while (numero <= 500) {
        numeros.innerHTML += `
       <span> ${numero} </span> <br>
       `
        numero++
    }

}
