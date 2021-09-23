function getDivisorsCnt(n){
  let count = 1
  for(let i = 0; i < Math.floor(n/2)+1; i++){
    if(n%i===0){
      count++
    }
  }  
  return count
}


console.log(getDivisorsCnt(4))