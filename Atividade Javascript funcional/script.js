//vetores de login 

let emails = ["apollo_david", "psycho_7k", "empada.tm"]
let senhas = ["apollo","p7k","magoal"]

function login(){

    let emailDigit = id_email.value
    let senhaDigit = id_senha.value
    let auth = false

    auth = validarDados(emailDigit, senhaDigit)

    auth? alert ("Bem vindo") : alert("Não te conheço")
    
}
function validarDados (emails, senhas) {
    
    for (let contador = 0; contador < emails.length; contador ++) {
        if (emails[contador] == email){
            if (senhas[contador] == senha) {
                    return true

            }
        }
    }
}
