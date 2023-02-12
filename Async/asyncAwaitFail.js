//Q. Execute 3 asynchronous functions one after the other in sequence using async await and do not terminate on failure

async function async1() {
	console.log('fn1')
  Promise.resolve()
}

async function async2() {
	console.log('fn2')
  Promise.reject()
}

async function async3() {
	console.log('fn3')
  Promise.resolve()
}

async function seqAsyncAwait() {
	console.log('starting sequential async await')
	try {
  	await async1()
  } catch(err) {
      console.log(err)
  }
  
  try {
  	await async2()
  } catch(err) {
      console.log(err)
  }
  
  try {
  	await async3()
  } catch(err) {
      console.log(err)
  }
  console.log('success')
}

seqAsyncAwait()