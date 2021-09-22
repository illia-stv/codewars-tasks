//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

const encryptThis = (text) => {
  const wordsArray = text.split(' ')
  const newArr = wordsArray.map((item)=>{
    const firstLetter = item[0].charCodeAt(0) || ''
    const secondLetter = item.length > 2 ? item[1] || '' : ''
    const lastLetter = item.length > 1 ? item[item.length-1] || '' : ''
    const restWord = item.slice(2,item.length-1) || ''
    return `${firstLetter}${lastLetter}${restWord}${secondLetter}`; 
  }) 
  // console.log(newArr)
  return newArr.join(' ')
}

console.log(encryptThis('A wise old owl lived in an oak'))


// console.log("B".charCodeAt(0))