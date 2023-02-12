//Q. Create dynamic input element that take an input and debounces the input string 1s later

//HTML: 

{/* <div>
  <input type='text' id="input">
</div>

<div>
  <b>Default:</b>
  <span id='default'></span>
</div>

<div>
  <b>Debounce:</b>
  <span id="debounce"></span>
</div> */}

//JS:

const inputElement = document.getElementById('input')
const defaultDiv = document.getElementById('default')
const debounceDiv = document.getElementById('debounce')

inputElement.addEventListener('input', (e) => {
  defaultDiv.textContent = e.target.value
  updateDebounceText(e.target.value)
})

function debounce(cb, delay) {
  let time
  
  return (args) => {
    clearTimeout(time)
    time = setTimeout(() => {
      cb(args)
    }, delay)
  }
}

const updateDebounceText = debounce((text) => {
  debounceDiv.textContent = text
}, 1000)