// https://www.codewars.com/kata/59bd84b8a0640e7c49002398/train/javascript

function factorial(n){
  let sum = 0;
  let indx = 1;
  while(sum < n){
    sum = sum + indx
    indx++
  }
  return indx
}

function countSpace(str){
  let count = 0
  for(let i = 0; i < str.length; i++){
    if(str[i] == " "){
      count++
    }
  }
  return count
}

function tArea(tStr) {
  console.log(tStr)
  return ((factorial(countSpace(tStr))-1)*(factorial(countSpace(tStr))-1))/2
}