const robotron = document.querySelector("#robotron")

robotron.addEventListener("click",  (evento) => {
    console.log(evento)
})

function dizOi(nome) {
    console.log(`Oi ${nome}, tudo bem?`)
    console.log("Bem-Vindo ao Robotron 2000")
}


dizOi("Daniel")