// Registration validation

const button = document.querySelector('button')
const container = document.querySelector('.container')
const text = document.querySelector('.text')
const input = document.querySelector('.input')
const userName = document.querySelector('.username')
const password = document.querySelector('.password')
const message = document.querySelector('.message')

const validateEmail = arg => {
  if (!arg.value.includes('@')) {
    arg.className = 'input error'
    message.className = 'visible'
  } else {
    message.className = 'message'
  }
}

const checkInputs = function (inputArray) {
  inputArray.forEach(element => {
    if (element.value.length <= 4) {
      element.className = 'input error'
    } else if (element.value.length > 4) {
      element.className = 'input'
    }
  })
}

button.addEventListener('click', event => {
  event.preventDefault()
  checkInputs([userName, password])
  validateEmail(userName)
})
