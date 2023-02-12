//Q. Execute 3 asynchronous functions one after the other in sequence using promise chaining and do not terminate on failure

function async1() {
	console.log('fn1')
  return Promise.resolve()
}

function async2() {
	console.log('fn2')
  return Promise.resolve()
}

function async3() {
	console.log('fn3')
  return Promise.resolve()
}

async1()
    .then(
        () => {
            console.log('Async1 success');
        },
        () => {
            console.log('Async1 failure');
        }
    )
    .then(async2)
    .then(
        () => {
            console.log('Async2 success');
        },
        () => {
            console.log('Async2 failure');
        }
    )
    .then(async3)
    .then(
        () => {
            console.log('Async3 success');
        },
        () => {
            console.log('Async3 failure')
        }
    )