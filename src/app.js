/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num) {
  if(num == 1){
    return 1;
  }
  return findFactorial(num-1)*num 

}

console.log("6 Factorial is equal = "+ findFactorial(6))

//Exercise 2
const str ="Aubida is the best"
const reverseString = function(str) {
  //Your code here
  if(str.length <=1){
    return str.charAt(0)
  }
  return reverseString(str.substring(1)) + str.charAt(0)
}
console.log(`String :${str} in reverse ${reverseString(str)}`)

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
  //Your code here
  if(arr1.length == 0){
    return
  }
  arr2.push(arr1[0])
  arr1.splice(0,1)
  swap(arr1, arr2)
}


swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) 

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }