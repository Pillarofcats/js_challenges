//Q. Create an array which will only accept string values. (Homogeneous array of strings)

let onlyStrArr = []

let validate = {

	set(target, prop, receiver) {
  	//target is the object
    //prop is the index/key
    //receiver is the value
  	if(typeof receiver === 'string')	{
    	console.log('prop', prop)
    	target[target.length] = receiver
    }
    
    return true
  }
}

let onlyStrProxyArr = new Proxy(onlyStrArr, validate)

onlyStrProxyArr.push('Hello', 1, {a:1}, false, 'World', null, undefined, '!')

console.log('Only strings array: ', onlyStrProxyArr )