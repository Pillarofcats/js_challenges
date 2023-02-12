//Q. Design a utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested


function fetchRetry (url, attempts=3) {
	return new Promise(async (resolve, reject) => {
  	for (let i=0; i < attempts; i++) {
      try {
        const response = await fetch(url)
        resolve(response)
				break
      } catch (error) {
        	if(attempts - 1 === i) {
          	reject(error)
          	break
        	}
        	//in catch
        	await new Promise ((resolve) => setTimeout(resolve, i*1000+1000))
      	}
    }
  })	
}

const apiURL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'

fetchRetry(apiURL, 3).then((data) => data.json()).then((data) => console.log(data.name)).catch(() => console.log('error'))