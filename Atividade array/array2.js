let emails = ['apollindo@gmail.com', 'dudinha12345@gmail.com', 'tejasmere@gmail.com']
let senhas = ['Apollo123', 'berebau', 'chuteira']
let nomes = ['Apollo','Duda','Chuteiraaa']

let res = document.getElementById('resolver')
    res.innerHTML= ''

function login (){
    let email = id_email.value
    let senha = id_senha.value
    let nomes = id_username.value
    let auth = false
    for (let contador = 0; contador < emails.length; contador ++){
        if (email == emails[contador]){
            if(senha== senhas[contador]){
                true
            }
        }
    }

if(auth){
    alert("Bem vindo")
}else{
    alert ("Email ou senha incorretos")
}}