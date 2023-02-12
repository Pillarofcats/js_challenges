//Q. Create an object which has a property 'userid' which can only be set once and will be a read only property

function createReadOnlyObj (v) {
	const o = {}
  
  Object.defineProperty(o, 'userid', {
  	value: v,
    writeable: false
  })

	return o
}

let roObj = createReadOnlyObj(5)
console.log('roObj.userid = ', roObj.userid)
roObj.userid = 1
console.log('Changed userid to 1, but writeable is false ', roObj.userid)
