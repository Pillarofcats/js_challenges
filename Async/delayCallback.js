//Q. Create a function which receives a function as argument and executes it after 2 seconds

function delayedCallback (delay=2, callback) {
   if(typeof callback === 'function') {
     setTimeout(() => {
       callback()
     }, delay*1000)
   }
}

function cb () {
   console.log("Callback invocation")
}

delayedCallback(2, cb)