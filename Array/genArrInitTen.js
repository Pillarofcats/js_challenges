//Q. Create an array of length n with all the values of it set to 10

function arrSetAllTo10(length) {
	return Array.from(Array(length), (_, index) => 10)
}

console.log('Array, all values set to 10', arrSetAllTo10(5))
console.log('Array, all values set to 10', arrSetAllTo10(7))
console.log('Array, all values set to 10', arrSetAllTo10(9))