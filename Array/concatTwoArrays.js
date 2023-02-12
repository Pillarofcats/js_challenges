//Q. Write a function which can concatenate 2 arrays. If only one array is passed it will duplicate it

function concatOrDuplicateArrays(a1, a2=a1) {
	//return a1.concat(...a2)
	return [...a1, ...a2]
}

let arr1 = ['cat']
let arr2 = ['dog']

let res1 = concatOrDuplicateArrays(arr1, arr2)
console.log('result: ', res1)

let res2 = concatOrDuplicateArrays(arr1)
console.log('result: ', res2)