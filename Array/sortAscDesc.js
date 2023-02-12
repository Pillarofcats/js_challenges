//Q. Sort the given array of integers in ascending or descending order

const unsortCharArr = ['z','c','k','b','d','l','e','a']

const unsortNumArr = [5,7,9,2,3,4,1]

function sortAscChar (arr) {
	return  [...arr].sort()
}
  
function sortAscNum (arr) {
  return  [...arr].sort((a,b) => a-b)
}

//Ascending
console.log(sortAscChar(unsortCharArr))
console.log(sortAscNum(unsortNumArr))

//Descending
console.log(sortAscChar(unsortCharArr).reverse())
console.log(sortAscNum(unsortNumArr).reverse())