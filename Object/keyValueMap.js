//Q. Create an array of pair of values (key, value) from an object and store it in a map. Consider the object is not nested

const notNestedObj = {
	a: ['a'],
  b: 'b',
  c: function() { console.log('c') }
}

const m = new Map()

for(let [k,v] of Object.entries(notNestedObj)) {
  m.set(k,v)
}

console.log(m)

//OR

const betterMap = new Map(Object.entries(notNestedObj))

console.log(betterMap)