/*
const data = new Date();

const diaSemana = ['domingo', 'Segunda','terça','quarta','quinta','sexta','sabado'];
const mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"];

const h1 = document.querySelector('h1');

h1.innerHTML=`${diaSemana[data.getDay()]}, ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;

console.log(`${diaSemana[data.getDay()]}, ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()}`);*/

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR',{dateStyle: 'full', timeStyle:'short'});