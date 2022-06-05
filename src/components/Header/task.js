// создать массив [0, 1, 2, 3, 4, 5, 6, 7]

let result = Array(8).fill(0).map((item, index) => index)
console.log(result)

// пусть теперь будет [0,1,2,3,4,3,2,1,0], а для четных [0,1,2,3,3,2,1,0]

const myFunc = (n) => {
  let arr = Array(n).fill(0)
  if (n % 2) {
    let newArr1 = Array(((arr.length - 1) / 2)).fill(0).map((item, index) => index)
    let newArr2 = Array(((arr.length - 1) / 2)).fill(0).map((item, index) => index)
    newArr1.push((arr.length - 1) / 2)
    return newArr1.concat(newArr2.reverse())
  } else {
    let newArr1 = Array((arr.length / 2)).fill(0).map((item, index) => index)
    let newArr2 = Array((arr.length / 2)).fill(0).map((item, index) => index)
    return newArr1.concat(newArr2.reverse())
  }
}

console.log(myFunc(8))
console.log(myFunc(9))