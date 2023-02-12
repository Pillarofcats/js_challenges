//Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed

for(let i=1; i < 11; i++) {
  setTimeout(() => {
    console.log(i)
  }, i*1000)
}