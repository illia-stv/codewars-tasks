//https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

function evenLast(numbers) {
  // Good luck
  return numbers.length !== 0 ? numbers.filter((item,i)=> i%2==0).reduce((a,b) => a + b , 0)*numbers[numbers.length-1] : 0
}


