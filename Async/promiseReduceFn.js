//Q. Execute an array of asynchronous functions which returns a promise, one after the other in sequence using REDUCE FN

function async1() {
	return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fn1')
      resolve()
    }, 3000)
  })
}

function async2() {
	console.log('fn2')
  return Promise.resolve()
}

function async3() {
	console.log('fn3')
  return Promise.resolve()
}

const asyncFnArr = [async1, async2, async3]

asyncFnArr.reduce((acc, asyFn) => {
	return acc.then(() => asyFn())
}, Promise.resolve()).catch(() => console.log('error'))