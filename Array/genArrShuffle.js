//Q. Write a code to generate an array with range of numbers and shuffle them

function createNumArr (range) {
	//Make arr with length of range and set values incrementing up to range
	let arrRange = Array.from(Array(range), (_, ind) => ind + 1)
  //randomArr of length range
  let randArr = []
  //Loop through and splice random values from arrRange and push them to randArr
	for(let i=0; i<range; i++) {
  	let randNumFromArrRange = Math.floor(Math.random() * arrRange.length)
    randArr.push(...arrRange.splice(randNumFromArrRange, 1))
    console.log('arrRange getting smaller', arrRange)
  }
  
	return randArr
}

console.log(createNumArr(3))
console.log(createNumArr(5))
console.log(createNumArr(7))
console.log(createNumArr(9))
