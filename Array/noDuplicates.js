//Q. Write the code to remove the duplicates from the array

const arrWDuplicates = [1,2,3,4,5,5,5,6]
const noDuplicates = [...new Set(arrWDuplicates)]
console.log('Removed duplicates from arr', noDuplicates)
