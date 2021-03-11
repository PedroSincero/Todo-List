//adiciona uma LI

let getButton = document.getElementById('criar-tarefa');
let getTexto = document.getElementById('texto-tarefa');
let getOL = document.getElementById('lista-tarefas');

getButton.addEventListener('click',function(){

let createLi = document.createElement('li');
createLi.classList = 'lista';
createLi.innerText = getTexto.value;
getOL.appendChild(createLi);
getTexto.value = '';
});

getOL.addEventListener('click', function(event){
    let getLista = document.getElementsByClassName('lista');
    for(let index in getLista){
        getLista[index].classList.remove('cinza');
        event.target.classList.add('cinza');
    }
});

//Agradecimentos ao Daniel Roberto Turma 10 Tribo B
// Agradecimentos ao Site https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/ ; https://cursos.alura.com.br/forum/topico-limpando-a-caixa-de-texto-20395