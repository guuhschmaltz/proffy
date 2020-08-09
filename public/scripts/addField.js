//Procurar botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)



//Executar acao
function cloneField(){
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Pegar os campos. Que campops?
    const fields = newFieldContainer.querySelectorAll('input')
    //Para cada campo, limpar
    fields.forEach(function(field){
        //Pegar o field do momento e executa a limpeza.
        field.value = ""
    })

    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
