hp=100
hp2=100
function jogar(){
    joguin = document.getElementById ('jogo')
    joguin.innerHTML = `<span><img src="limao.jpg">
    <div id="barra"></div>
    <button onclick="attack()">atacar</button> <br>
    <img id="mirassol" width="800px" height="800px" src="download.jpg">
    <div id="barra2"></div>
    <button onclick="attack2()">atacar</button>
</body> </span>`
    
}


function attack(){
    const vida = document.getElementById('barra')
    hp-=5
    console.log(hp)
    vida.style.width = `${hp}%`
    if (hp < 60&&hp>30) {
        vida.style.backgroundColor = "yellow";
    }else if (hp<=30){
        vida.style.backgroundColor = "red";
    }
}

function attack2(){
    const vida = document.getElementById('barra2')
    const mirassol = document.getElementById("mirassol").src="./download.jpg"
    hp2-=5
    console.log(hp2)
    vida.style.width = `${hp2}%`
    if (hp2<=15){
    document.getElementById("mirassol").src="https://media.tenor.com/4MOc_udzsRQAAAAC/explosion.gif"
    }
    if (hp2 < 60&&hp2>30) {
        vida.style.backgroundColor = "yellow";
    }else if (hp2<=30){
        vida.style.backgroundColor = "red";
    }

}