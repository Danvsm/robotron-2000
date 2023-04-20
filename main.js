/*const robotron = document.querySelector("#robotron")

robotron.addEventListener("click",  (evento) => {
    console.log(evento)
})

function dizOi(nome) {
    console.log(`Oi ${nome}, tudo bem?`)
    console.log("Bem-Vindo ao Robotron 2000")
}


dizOi("Daniel") */



const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach ( (elemento) => {
    elemento.addEventListener("click", (e) => 
    {
        manipulaDados(e.target.dataset.controle, e.target.parentNode)
        atualizaEstatisticas(e.target.dataset.peca, e.target.dataset.controle)
    })
})





function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')
    
    if (operacao === "-") {
        if (peca.value > 0) {
            peca.value = parseInt(peca.value) - 1
        }    
        
            
    
    } else {
            peca.value = parseInt(peca.value) + 1
            
    }
 }


 
function atualizaEstatisticas(peca, control, conte) {
    const controles = control
    
    estatisticas.forEach((elemento) => {
        if (controles === "+"){
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] 
        }else if (controles === "-") {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }   
    
})

}