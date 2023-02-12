//Q. Check if the user with the name "John" exists in the array of objects

function johnExist (arr) {
	return arr.some((user) => user.name === 'John')
}

const userArr = [{name: 'Jacob'}, {name: 'John'}, {name: 'Jenna'}]

console.log(johnExist(userArr))