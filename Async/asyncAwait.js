//Q. Execute 3 asynchronous functions one after the other in sequence using async await

async function asyncFn1 (res) {
  return new Promise((resolve) => {
  	setTimeout(() => {
    	console.log('Fn1', res)
      resolve('mouse')
  	}, 5000)
  })
}

async function asyncFn2 (res) {
  return new Promise((resolve) => {
  	setTimeout(() => {
    	console.log('Fn2', res)
      resolve('bird')
  	}, 3000)
  })
}

async function asyncFn3 (res) {
  return new Promise((resolve) => {
  	setTimeout(() => {
    	console.log('Fn3',res)
      resolve('dog')
  	}, 1000)
  })
}

//IIFE
(async function asyncAwait() {

try {
  console.log('starting async await')
  const res1 = await asyncFn1('cat')
  const res2 = await asyncFn2(res1)
  const res3 = await asyncFn3(res2)
  console.log(res3)
  console.log('success')
} catch {
    console.log('error')
}
  
})()