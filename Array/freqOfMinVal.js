//Q. Find the number of occurences of minimum value in the numbers list

function findFreqMinNum(arr) {
	let hashNum = {}
  
 	for(let num of arr) {
  	if(hashNum[num]) {
    	hashNum[num]++
    } else {
    	hashNum[num] = 1
    }
  }
  
  console.log('hashNum', hashNum)
  
  const smallest = Math.min(...arr)
	return hashNum[smallest]
}

const numbers = [2,3,5,2,3,8,2]

console.log(findFreqMinNum(numbers))