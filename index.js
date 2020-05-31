
const factorial = (num) =>{
  if(num ===1){
    return num
  }
  else{
    return num * factorial(num-1)
  }
}

const res = factorial(4)
console.log('res' , res)