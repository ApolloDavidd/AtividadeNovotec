let emails = ['apollindo@gmail.com', 'pedro123@gmail.com', 'tejasmere@gmail.com']
let senhas = ['Apollo123', 'p7k', 'chuteira123']
let nomes = ['Apollo','Psycho7k','Chuteira']
let auth = false
let fotoArr = []
let res = document.getElementById('resolver')
    res.innerHTML= ''

function login(){
    let email = id_email.value
    let senha = id_senha.value
    let nome = id_username.value
    let foto = document.getElementById('id_foto')
    console.log(foto)
    let auth = false
    for (let i = 0; i < emails.length; i++){
        if (email == emails[i] && nome == nomes[i] && senha == senhas[i]){
                auth=true
            }
        }
    if(auth){
        alert("Bem vindo") 
            res.innerHTML = `<span> <strong> Bem vindo ${nome} </strong> </span>`
            foto.src=fotoArr
            // switch (nome){
            //     case "Apollo":
            //         foto.src="jotaro.jpg"
            //         break;
            //     case "Chuteira":
            //         foto.src="TejasMere.jpg"
            //         break;
            //     case "Psycho7k":
            //         foto.src="p7k.jpg"
            //         break;
            // }
    }else{
        alert ("Email ou senha incorretos")
}
}
function registro(){
    let email = document.getElementById('id_email').value
    let senha = document.getElementById('id_senha').value
    let nome = document.getElementById('id_username').value
    let foto = document.getElementById('id_imagem').value 
    nomes.push(nome)
    emails.push(email)
    senhas.push(senha)
    fotoArr.push(foto)
    console.log(foto)
    console.log(nomes, emails, senhas)
}
