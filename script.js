//adiciona uma LI

let getButton = document.getElementById('criar-tarefa');
let getTexto = document.getElementById('texto-tarefa');

// Agradecimentos ao Site https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/ 
getButton.addEventListener('click',function(){

let getOL = document.getElementById('lista-tarefas');
let createLi = document.createElement('li');
createLi.classList = 'listinha';
createLi.innerText = getTexto.value;
getOL.appendChild(createLi);
});