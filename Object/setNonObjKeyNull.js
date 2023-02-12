//Q. Write a program which can set all non-object keys to a value of null

function emptyObj(o) {
	for(let key in o) {
  	delete o[key]
	}
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

console.log('Full object: ', nObj)
emptyObj(nObj)
console.log('Emptied object: ', nObj)