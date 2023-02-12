//Q. Write a program to replace 3 center elements of the 1st array by center 3 elements of the 2nd array

function replaceMiddle3 (arr1, arr2) {
	//Guards
	if(arguments.length < 2) return "Can't replace only one array passed"
  if(arr1.length < 3 | arr2.length < 3) return "An array length is less than 3"
  console.log(`arr1: [${arr1}] arr2: [${arr2}]`)
  //Copy of arr1
  let arr1cpy = [...arr1]
  //Get middle indicies of arr1
  const arr1IndStart = Math.floor((arr1.length / 2) - 1)
  //Get middle indicies of arr2
  const arr2IndStart = Math.floor((arr2.length / 2) - 1)
  //Get 3 arr2 values
  let arr2SliceMiddle3 = arr2.slice(arr2IndStart, arr2IndStart + 3)
  //Replace arr1 middle indicies with arr2 middle indicies values
  arr1cpy.splice(arr1IndStart, 3, ...arr2SliceMiddle3)
  return arr1cpy
}

let f1Arr1 = ['a', 'a', 'a']
let f1Arr2 = ['b', 'b', 'b']

const r1 = replaceMiddle3(f1Arr1, f1Arr2)
console.log('r1', r1)

let f2Arr1 = ['a', 'a', 'a', 'a', 'a', 'a']
let f2Arr2 = ['b', 'b', 'b']

const r2 = replaceMiddle3(f2Arr1, f2Arr2)
console.log('r2', r2)

let f3Arr1 = ['a', 'a', 'a', 'a', 'a']
let f3Arr2 = ['c', 'b', 'b', 'b', 'c']

const r3 = replaceMiddle3(f3Arr1, f3Arr2)
console.log('r3', r3)

let f4Arr1 = ['a', 'a', 'a', 'a', 'a', 'a']
let f4Arr2 = ['b', 'b']

const r4 = replaceMiddle3(f2Arr1, f2Arr2)
console.log('r4', r4)

let f5Arr1 = ['a', 'a', 'a', 'a', 'a', 'a']
let f5Arr2 = ['b', 'b', 'b']

const r5 = replaceMiddle3(f5Arr1)
console.log('r5', r5)