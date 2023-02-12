//Q. Generate an array of objects with properties id and full name from an array of objects where each object will have id, firstname and lastname

function modObjArr(arr) {
	let personArr = []
	
  return arr.map((person) => {
    return {
      id: person.id,
      fullName: `${person.fName} ${person.lName}`
    }
  })
}

const arrObj = [
{
  id: 0,
  fName: 'Jacob',
  lName: 'White'
},
{
  id: 1,
  fName: 'John',
  lName: 'Good'
},
{
  id: 2,
  fName: 'Dan',
  lName: 'Zydiak'
},
]

console.log(modObjArr(arrObj))