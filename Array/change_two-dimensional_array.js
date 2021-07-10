//https://www.codewars.com/kata/581214d54624a8232100005f/train/javascript


function matrix(array) {
    return array.map((item, i) => item[i] >= 0 ?  [...item.splice(0, i),1,...item.splice(1)] : [...item.splice(0, i),0,...item.splice(1)] )
}

