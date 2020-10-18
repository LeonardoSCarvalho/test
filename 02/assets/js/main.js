

function calcularImc(){
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const resutado = document.querySelector('.resultado');
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(e){
      e.preventDefault();
      const imc = peso.value / (altura.value * 2);
      if(imc < 18.5){
        resutado.innerHTML = `IMC: ${imc.toFixed(2)} voce esta abaixo do pesso`;
      }else if(imc < 25){
        resutado.innerHTML = `IMC: ${imc.toFixed(2)} voce esta com o peso normal`;
      }else if(imc < 30){
        resutado.innerHTML = `IMC: ${imc.toFixed(2)} voce esta com sobrepeso`;
      }else if(imc < 35){
        resutado.innerHTML = `IMC: ${imc.toFixed(2)} voce esta com Obsesidade grau 1`;
      }else if(imc < 40){
        resutado.innerHTML = `IMC: ${imc.toFixed(2)} voce esta com Obsesidade grau 2`;
      }else{
        resutado.innerHTML = `IMC: ${imc.toFixed(2)} voce esta com Obsesidade grau 3`;
      }
    });
}

calcularImc();

