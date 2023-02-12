//Q. Execute an array of ASYNC/AWAIT returns a promise, one after the other in sequence using REDUCE FN

async function async1() {
	return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fn1')
      resolve()
    }, 2000)
  })
}

async function async2() {
	console.log('fn2')
  return Promise.resolve()
}

async function async3() {
	return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fn3')
      resolve()
    }, 4000)
  })
}

const asyncFnArr = [async1, async2, async3]

asyncFnArr.reduce(async (acc, asyFn) => {
	return await acc.then(() => asyFn())
}, Promise.resolve()).catch(() => console.log('error'))