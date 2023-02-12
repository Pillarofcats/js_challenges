//Q. Stringify an object by excluding the 'password' property

const ob = {
	name: 'ob',
  password: 'secret',
  id: 0
}

const noPasswordObj = JSON.stringify(ob, (k,v) => {
	if(k === 'password') {
  	return undefined
  }
  
  return v
})
console.log("Original object: ", ob)
console.log("Object without password property: ", JSON.parse(noPasswordObj))