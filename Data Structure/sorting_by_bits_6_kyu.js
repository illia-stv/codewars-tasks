//https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript


const dec2bin = (dec) => {
  return (dec >>> 0).toString(2);
}

// console.log(dec2bin(4))
const countBit = (bin) => {
  return bin.split('').filter((item)=>item=='1').length
}




const sortByBit = (arr) =>  {
   return arr.sort((a,b)=> countBit(dec2bin(a))==countBit(dec2bin(b)) ? a-b : countBit(dec2bin(a))-countBit(dec2bin(b)))
}


