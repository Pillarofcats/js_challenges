//Q. Square all the positive numbers of the array and return the output array

const posNumArr = [2,-3,4,-5,6]

function squarePositives(arr) {

	const positives = arr.filter((num) => num > 0)
	return positives.map((num) => num * num)
}

console.log(squarePositives(posNumArr))