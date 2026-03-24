const button = document.querySelector('button')
const title = document.querySelector('section h1')
const text = document.querySelector('p')

let texto_modificado = false
button.addEventListener('click', function() {
    if (!texto_modificado){
        title.textContent = 'Titulo modificado'
        text.textContent = 'Texto modificado'
    }
    else{
        title.textContent = 'Exercicio 1'
        text.textContent = 'Exercício sobre mudar o texto'
    }
    texto_modificado = !texto_modificado
})