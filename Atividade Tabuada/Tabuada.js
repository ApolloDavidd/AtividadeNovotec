function tabuada(){
    resultado.innerHtml = ``
    let n1 = Number(id_numero.value)

    let n2 = 1

    let n3 = Number(id_qntd.value)
    

    while (n2 <= n3) {
        resultado.innerHTML += `
        ${n1} x ${n2} = ${n1 * n2} <br>` 
        n2++
    }






}