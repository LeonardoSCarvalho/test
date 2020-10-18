const data = new Date();



const niver = new Date(1998, 5, 9);

const diaSemana = niver.getDay();
console.log(diaSemana);

switch(diaSemana){
  case 0:
    console.log('domingo');
    break;
  case 1:
    console.log('segunda');
    break;
  case 2:
    console.log('terça');
    break;
  case 3:
    console.log('quarta');
    break;
  case 4:
    console.log('quinta');
    break;
   case 5:
    console.log('sexta');
    break
  case 6:
    console.log('sabado'); 
     break;
  default:
    console.log('invalido');
    break;
 }               