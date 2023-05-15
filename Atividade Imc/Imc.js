function id_imc(){

    resultado.innerHtml = ``
    let n1 = Number(id_peso.value)

    let n2 = Number(id_altura.value)
    
    let Imc

    Imc = n1 / (n2*n2)
    
    let res = document.getElementById('resolver')
    res.innerHTML = ''
    



    if ( Imc <= 18.5 ) {
        res.innerHTML += `<span> <strong> Você tem ${Imc.toFixed(2)} de imc estando abaixo do peso normal </strong> </span>`
    } else if ( Imc >= 18.5 && Imc <= 24.9 ) {
        res.innerHTML +=`<span> <strong> Você tem ${Imc.toFixed(2)} de imc estando com peso normal </strong> </span>`
    } else if  ( Imc >= 25 && Imc <= 29.9 ) {
        res.innerHTML += `<span> <strong> Você tem ${Imc.toFixed(2)} de imc estando com excesso de peso </strong> </span>`
    } else if  ( Imc >= 30 && Imc <= 34.9 ) {
        res.innerHTML += `<span> <strong> Você tem ${Imc.toFixed(2)} de imc estando com obesidade classe I </strong> </span>`
    } else if  ( Imc >= 35 && Imc <= 39.9 ) {
        res.innerHTML += `<span> Você tem ${Imc.toFixed(2)} de imc estando com obesidade classe II </strong> </span>`
    } else if  ( Imc >= 40 ) {
        res.innerHTML += `<span> <strong> Você tem ${Imc.toFixed(2)}  de imc estando com obesidade classe III </strong> </span>`
    }
}