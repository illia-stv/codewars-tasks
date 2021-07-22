//https://www.codewars.com/kata/5297bf69649be865e6000922/train/javascript


function makeSentence(parts) {
  let str = parts.join(' ')
  
  return str.replace(/ ,/g,',').replace(/\./g,'').split(' ').filter((item) => item !== '').join(' ')+'.'
}