function funcao(nome){
  console.log('ola', nome);
}

//funcao('leo');


function soma(){
  let total = 0;

  for(let args of arguments){
    total += args;
  }
  console.log(total);
}


soma(5,9,5);
