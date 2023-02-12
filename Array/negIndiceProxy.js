//Q. Create a Proxy object through which the array can be accessed as usual but also allow to access the values through negative indices

const proxHandler = {
	get(target, prop, receiver) {
  	let propAsNum = parseInt(prop)

  	if(propAsNum < 0) {
    	//Since less than zero we subtract one for index 0
    	let absProp = Math.abs(prop)

      return target[absProp]
    } else {
    	return target[prop]
    }
  }
}

let nArr1 = [1,2,3]
let nArr2 = []

let proxArr1 = new Proxy(nArr1, proxHandler)

console.log('proxy arr1: ', proxArr1)
console.log('arr[0] ', proxArr1[0] )
console.log('arr[-1] ', proxArr1[-1] )
console.log('arr[-2] ', proxArr1[-2] )
console.log('arr[-3] ', proxArr1[-3] )

