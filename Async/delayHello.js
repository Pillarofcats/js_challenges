//Q. Print "Hello, world" with a delay of 3 seconds

function delayedHelloWorld (delay= 3, text) {
    setTimeout(() => {
    console.log(text)
  }, delay*1000)
}

delayedHelloWorld(3, "Delayed hello world!")