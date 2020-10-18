function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
   
    const pessoas = []
    
    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome =form.querySelector('.nome');
        const sobrenome =form.querySelector('.sobrenome');
        const peso =form.querySelector('.peso');
        const altura =form.querySelector('.altura');
        
        pessoas.push(
            {
                nome: nome.value, 
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value,

            }
        )
        console.log(pessoas);
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();










/*let numero = Number(prompt('digite um numero'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>
    Seu numero - 2 é: ${numero - 2} <br/>
    Raiz quadrada: ${numero ** 0.5} <br/>
    ${numero} e inteiro: ${Number.isInteger(numero)} <br/>
    É NaN: ${isNaN(numero)} <br/>
    Arredondando para baixo:  ${Math.floor(numero)}<br/>
    Arredondando para cima: ${Math.ceil(numero)} <br/>
    com duas casas decimais: ${numero.toFixed(2)} <br/>
</p>`
*/
