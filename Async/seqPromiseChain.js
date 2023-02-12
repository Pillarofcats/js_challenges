//Q. Execute 3 asynchronous functions one after the other in sequence using promise chaining

function asyncFn1 (res) {
	return new Promise ((resolve) => {
  	setTimeout(() => {
      console.log('Fn1', res)
      resolve('pending')
    }, 5000)
  })
}

function asyncFn2 (res) {
	return new Promise((resolve) => {
  	setTimeout(() => {
    console.log('Fn2', res)
    resolve(res)
  	}, 3000)
  })
}

function asyncFn3 (res) {
	return new Promise((resolve) => {
  	setTimeout(() => {
    	console.log('Fn3',res)
      resolve("success")
  	}, 1000)
  })
}

function promiseChain() {
  return new Promise((resolve, reject) => {
  	console.log('starting')
    resolve('pending')
  })
}

const response = promiseChain()
	.then((res) => asyncFn1(res))
	.then((res) => asyncFn2(res))
	.then((res) => asyncFn3(res))
  .then((res) => console.log(res))
	.catch(() => console.log('error'))