//Q. Create a function named "average" which can calculate the average of an array and should be available to be called from any Array object.

Array.prototype.avg = function () {
	let total = 0
  console.log('this', this)
  
	for(let elem of this) {
  	total += elem
  }
	return total / this.length
}

let nArr = [1,2,3,4,5]

console.log('Array prototype average()', nArr.avg())