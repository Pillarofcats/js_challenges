//Q. Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only

let start = 10

for(let i=start; i > 0; i--) {
  setTimeout(function () {
    console.log(i)
  }, (start-i) * 1000  )
}

OR

start = 10

for(let i=start; i > 0; i--) {

 (function (num) {
 
    setTimeout(function () {
      console.log(num)
    }, (start-num) * 1000)
  })(i)
  
}