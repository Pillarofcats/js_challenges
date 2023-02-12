//Q. Sort the given array of objects in ascending order according the authors lastname

const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
]

function sortAscLastname (arr) {

	return [...arr].sort((a, b) => {
    const bLastname1 = a.author.split(' ')[1]
    const bLastname2 = b.author.split(' ')[1]
  
    return bLastname2 > bLastname1 ? -1 : 1
  })
}

console.log(sortAscLastname(books))