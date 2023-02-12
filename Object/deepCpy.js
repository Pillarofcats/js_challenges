//Q. Show how a deep copy of an object can be done

function cpyObj(o, cpy= {}) {

	for(let prop in o) {
    
  	if(typeof prop === 'object') {
    	return cpyObj(o[prop])
    }
  	cpy[prop] = o[prop]
  }

	return cpy
}

const nestObject = {
	a: {
		b: {
    	c: {
      	d: ['d']
      }
    }
  }
}

const theCopy = cpyObj(nestObject)

theCopy.a.b.c.e = 'new'

console.log('The copy: ', theCopy)
console.log('The orig: ', nestObject)