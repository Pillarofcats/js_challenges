//Q. Display all the keys and values of a nested object

function nestedObjPrintKeyValues(nestObj) {
	let objMap = new Map()
  //Set Q to init object
	let objStack = [nestObj]
	
  //Loop through object Q key/values
  while(objStack.length > 0) {
    //Get the next nested object from objQ
    let currNestObj = objStack.pop()
    //Loop through current nest object
    for(let [key, value] of Object.entries(currNestObj)) {
    	objMap.set(key, value)
      //console.log(`${key}: ${value}`)
    	
      if(typeof value === 'object') {
      //value is the object
        objStack.push(value)
      }
    }
 	}
  
  objMap.forEach((key, value, map) => {
  	console.log(`${key}: ${value}`)
  })
  
	return objMap
}

const nObj = {
	'L0': {
  	'L0a': {
    	'L0a1': 'L0a1',
      'L0a2': {
      	'L0a2a': 'L0a2a'
      }
    }, 
    'L0b': {
    	'L0b1': 'L0b1'
    }  				
  },
  'L1': {
  	'L1a': {
    	'L1a1': 'L1a1'
    }
  }
}

nestedObjPrintKeyValues(nObj)

//RECURSIVE PRINT NESTED OBJECT

function recursiveNestedObjPrintKeyValues(nestObj) {

	for(let [key, value] of Object.entries(nestObj)) { 
    
    if(typeof value === 'object') {
    	console.log(`${key}: {`)
      for(let [vk, vv] of Object.entries(value)) {
      	console.log(`\t${vk}: ${vv}`)
      }
      console.log(`}`)
      
    	recursiveNestedObjPrintKeyValues(value)
    } else {
    		console.log(`${key}: ${value}`)
			}
  }
}

recursiveNestedObjPrintKeyValues(nObj)