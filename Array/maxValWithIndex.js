//Q. Get the maximum value from a numbers array along with its index

function getMax(arr) {
	const maxNum = Math.max(...arr)
  const indMax = arr.indexOf(maxNum)
	return {
  	max: maxNum,
    ind: indMax
  }
}

const numArr = [3,7,8,10]

console.log(getMax(numArr))