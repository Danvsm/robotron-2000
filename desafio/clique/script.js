const enviar = document.querySelector("#calcular")
const resultado = document.querySelector(".resultado")

enviar.addEventListener("click", () => nota() )


function nota () {
    console.log('Fui clicado')
    resultado.innerHTML = 'Fui Clicado!'
}