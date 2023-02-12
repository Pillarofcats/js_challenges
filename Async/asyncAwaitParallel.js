//Q. Execute an array of asynchronous functions simultaneously but print the output in the ordered sequence. Do not wait for printing the data if it already available after promise is settled USING ASYNC AWAIT

async function async1() {
	return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fn1')
      resolve('cat')
    }, 2000)
  })
}

async function async2() {
	console.log('fn2')
  return Promise.resolve('dog')
}

async function async3() {
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
  .reduce(async (acc, promise) => {
  	results.push(await acc.then(() => promise))
  }, Promise.resolve())
  .then(() => console.log('Results:', results))
  .catch(() => console.log('error'))