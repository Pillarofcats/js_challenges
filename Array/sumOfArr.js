//Q. Write a program to calculate the sum of all the values of an array

function sumArr(a) {
	
	return a.reduce((a, v) => {
  	return a + v
  }, 0)
}

const arr = [1,2,3,4,5]

console.log(sumArr(arr))