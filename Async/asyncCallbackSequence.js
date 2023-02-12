//Q. Execute an array of asynchronous functions one after the other in sequence using callbacks

function fOne (cb) {
	setTimeout(() => {
  	console.log("Fn 1")
    cb()
  }, 5000)
}

function fTwo (cb) {
	setTimeout(() => {
  	console.log("Fn 2")
    cb()
  }, 2000)
}

function fThree (cb) {
	setTimeout(() => {
  	console.log("Fn 3")
    cb()
  }, 1000)
}

function fFour (cb) {
	setTimeout(() => {
  	console.log("Fn 4")
    cb()
  }, 3000)
}

function fQueue (callbackList) {
  //closure - maintains state of the callbackList
  function nextCB() {
  
    const currCallback = callbackList.shift()
    if(currCallback && typeof currCallback === 'function') {
    	console.log('cb', callbackList)
    	currCallback(nextCB)
    }
  }
  
  nextCB()
}

//driver
const  cbList = [fOne, fTwo, fThree, fFour]
fQueue(cbList)