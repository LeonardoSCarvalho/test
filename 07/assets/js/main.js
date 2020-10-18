const elementos = [
  {tag: 'p', texto: 'frase1'},
  {tag: 'div', texto: 'frase2'},
  {tag: 'footer', texto: 'frase3'},
  {tag: 'section', texto: 'frase4'},
]
const resultado = document.querySelector('.container');
for(let i = 0; i < elementos.length; i++){
  let element = document.createElement(`${elementos[i].tag}`)
  element.innerHTML = elementos[i].texto;
  resultado.appendChild(element);
}