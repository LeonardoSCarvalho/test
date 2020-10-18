const heroi = ['super-man','batman', 'coringa', 'mulher maravilha', 'flash', 'hulk', 'capitao america', 'homen de fero', 'homen-aranha' ];

const [heroiBom, heroiRuim, ...resto] = heroi;

const pessoa = {
  nome: 'leo',
  sobrenome: 'carvalho',
  endereco : {
    rua: 'Av brasil',
    numero: '360'
  }
}

const {endereco}  = pessoa;
//console.log(endereco);


for(let index = 0; index <=10; index++){
  const valor = index % 2 === 0 ? 'par':'impar';
  //console.log(index, valor);
}

const frutas = ['maça','pera','uva','laranja','melancia'];
//console.log(frutas.length);
/*for(let i = 0; i < frutas.length; i++){
  //console.log(frutas[i]);
}*/


for(fruta of frutas){
  console.log(fruta);
}