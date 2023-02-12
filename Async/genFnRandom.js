//Q. Create a generator to return a random number on every request

function * generatorRand() {
	while(true) {
	  yield Math.floor(Math.random() * (101-1) + 1)
	}
}

let rand

let gen = generatorRand()

rand = gen.next().value
console.log('randNum: ', rand)

rand = gen.next().value
console.log('randNum: ', rand)

rand = gen.next().value
console.log('randNum: ', rand)