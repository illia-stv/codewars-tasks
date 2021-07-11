//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit){
  return a.filter((item) => item > limit).length == 0
}