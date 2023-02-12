//Q. Design a flat function which flattens an array to any depth

function IterflatArr(arr) {
	let fArr = []
  let nestArr
	let currElem
  
  //Loop through each element in array to be flattened
  for(let i=0; i<arr.length; i++) {
  	//Set nestArr to index-value array
  	nestArr = [arr[i]]
    console.log('nestArr', nestArr)
    //If nestArr is empty we are done looping through the array to be flattened
    //This will continue until there are no values in nestArr
    while(nestArr.length > 0) {
    	//Remove the first element in nestArr and set to currElem
      currElem = nestArr.shift()
      console.log('curr ele', currElem)
      //If the currEle is an array push it to nestArr
      if(Array.isArray(currElem)) {
      	//currElem must be spread
        nestArr.push(...currElem)
      } else {
      	//currElem is not an array so push it to our flattened array
        fArr.push(currElem)
      }
    }
  }
  
  return fArr
}

const arrToFlatten = [1,2,[3,4,[5]],6]

console.log('Iterative flattened arr:', IterflatArr(arrToFlatten))

//RECURSIVE

function recFlatArr(arr) {
    const flatArr = [];
    
    arr.forEach((value) => {
        if(Array.isArray(value)){
            flatArr.push(...recFlatArr(value));
        }
        else{
            flatArr.push(value);
        }
    });
    
    return flatArr;
}

console.log('Recursive flattened arr', recFlatArr(arrToFlatten))