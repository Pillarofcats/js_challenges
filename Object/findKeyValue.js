//Q. Find a key-value from a nested object by searching for a key.

const nestObj = {
	mother: {},
	sister: {
  	name: "Jenna"
  },
	brother: {
  	name: "Jacob",
    age: 33,
  	stats: {
    	strength: 12,
      intelligence: 14,
      dexterity: 16,
      bonusStats: {
      	strMod: 2,
        intMod: 1,
        dexMod: 3
      }
    }
  }
}

let keyValues = []

function getObjectKeyValue(k, objChain) {

	const keyList = Object.keys(objChain)
  
  if(keyList.length === 0) return false
  
  if(keyList.includes(k)) return objChain[k]
  
  for(let key of keyList) {
  	console.log("Searching on key", key)
    
    if(typeof objChain[key] === 'object' && objChain[key].length !== 0) {
    	console.log(key, 'is an object')
    	const result = getObjectKeyValue(k, objChain[key])
      if(result) keyValues.push(result)
    }
  }
}

getObjectKeyValue('name', nestObj)

console.log('keyValues', keyValues)