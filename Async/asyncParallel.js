//Q. Execute the given list of asynchronous functions in parallel and return the results as an array to the callback

function asyncFunc1(callback) {
    setTimeout(() => {
    		console.log('cb 1')
        callback(1);
    }, 3000);
}

function asyncFunc2(callback) {
    setTimeout(() => {
    console.log('cb 2')
        callback(2);
    }, 2000);
}

function asyncFunc3(callback) {
    setTimeout(() => {
    console.log('cb 3')
        callback(3);
    }, 1000);
}

function asyncParallel(cbList, results) {
	const dynamicResultsArr = new Array(cbList.length)
  let resultsCompleted = 0

	cbList.forEach((asyncFn, index) => {
  
  	asyncFn((value) => {
    	dynamicResultsArr[index] = value
    	resultsCompleted++
      
      if(resultsCompleted >= dynamicResultsArr.length) {
      	//print results callback
        results(dynamicResultsArr)
      }
    })
  })
}


asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], (result) => {
	// 1, 2, 3 (prints results of each asynchronous function in order)
	console.log(result);                                              
});