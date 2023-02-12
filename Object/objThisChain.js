//Q. Create an object 'obj' with functions assigned to keys. Show how can we achieve 'obj.func1().func2().func3()' considering func1, func2, func3 are object keys

const fObj = {
	ind: 0,
	f1() {
  	console.log('f1', ++this.ind)
  	return this
  },
  f2() {
  	console.log('f2', ++this.ind)
  	return this
  } ,
  f3() {
  	console.log('f3', ++this.ind)
  	return this
  }
}

fObj.f1().f2().f3()