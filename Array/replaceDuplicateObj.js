//Q. Write a code to eliminate duplicate objects in an array where each object has an 'id' property which can be used to identify the object and the duplicate object with lower rank to be removed

function removeLowRankDuplicates (arrObj) {
	let hashObj = {}
  
  for(let obj of arrObj) {
  	
  	console.log(obj)
  	if(hashObj[obj.id]) {
    	if(hashObj[obj.id].rank < obj.rank) hashObj[obj.id] = obj
      
		} else {
  		hashObj[obj.id] = obj
  	}
  }
  
	return Object.values(hashObj)
}


const arrWDuplicates = [
  {
  	name: 'Jacob',
    id: 0,
    rank: 1,
  },
  {
  	name: 'Dan',
    id: 0,
    rank: 5,
	},
	{
  	name: 'Bayleigh',
    id: 1,
    rank: 6,
	},
	{
  	name: 'Suze',
    id: 2,
    rank: 1,
	},
	{
  	name: 'Michael',
    id: 3,
    rank: 7,
	},
	{
  	name: 'Katy',
    id: 3,
    rank: 2,
	},
]

console.log('Removed low-rank duplicate objects:', removeLowRankDuplicates(arrWDuplicates))

//USING new MAP

const map = new Map();

arr.forEach(obj => {
    if (map.has(obj.id)) {
        if (obj.rank < map.get(obj.id).rank) {
            map.set(obj.id, obj);
        }
    } else {
        map.set(obj.id, obj);
    }
});

distinctArr = [...map.values()];