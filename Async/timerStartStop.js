//Q. Write a utility which prints numbers starting from an initial value and increment in steps which can be started and stopped by the user, any number of times

//HTML:

{/* <div id='count'>Count: 0</div>
<button type='button' id='startStop'>Start/Stop</button> */}

//JS:

let state = {
//Stop = false, Start = true
	startStop: false,
  count: 1,
}

let timer

const countDiv = document.getElementById('count')
const startStopBtn = document.getElementById('startStop')

startStopBtn.addEventListener('click', () => {
  //Toggle start and stop
  state.startStop = !state.startStop

  switch(state.startStop) {
    case true: {
      console.log('start')
      timer = setInterval(() => {
        countDiv.textContent = `Count: ${state.count}`
        state.count++
      }, 1000)
      break
    }
    case false: {
      console.log('stop')
      clearInterval(timer)
      break
    }
    default:
      return
  }
})