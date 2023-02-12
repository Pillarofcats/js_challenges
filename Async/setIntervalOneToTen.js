//Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval

let i = 1

const interv = setInterval(() => {	
  console.log(i)
  i++
  if(i > 10) clearInterval(interv)
}, 1000)