//Q. Design a function which takes an array as input and returns a function 'next', calling which fetches a value one by one

function objIter (arr) {
	let ind = 0
  
  return {
  	next() {
    	if(ind < arr.length) { return {value: arr[ind++], done: false}}
      else return {value: 'null', done: true}
    }
  }
}

const arr = [1,2,3,4,5]

let o = objIter(arr)

console.log(o.next())
console.log(o.next())
console.log(o.next())
console.log(o.next())
console.log(o.next())
//finished iterating
console.log(o.next())
console.log(o.next())
