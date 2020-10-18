
function eFizzBuzz(num) {
  if (num % 5 === 0 && num % 3 === 0){
    return 'FizzBuzz';
  }else if(num % 5 === 0){
    return 'buzz';
  }else if(num % 3 === 0){
    return 'Fizz';
  }else {
    return num;
  }
}

for(let i = 0; i <= 100 ; i++){
  console.log(eFizzBuzz(i));
}