//Q. Execute an array of asynchronous functions simultaneously but print the output in the ordered sequence. Do not wait for printing the data if it already available after promise is settled

function async1() {
	return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fn1')
      resolve('cat')
    }, 2000)
  })
}

function async2() {
	console.log('fn2')
  return Promise.resolve('dog')
}

function async3() {
	return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fn3')
      resolve('fish')
    }, 4000)
  })
}

const asyncFnList = [async1, async2, async3]
const results = []

asyncFnList
	.map((asyFn) => asyFn())
  .reduce((acc, promise) => {
  	return acc.then(() => promise).then((res) => results.push(res))
  }, Promise.resolve())
  .then(() => console.log('Results:', results))
  .catch(() => console.log('error'))