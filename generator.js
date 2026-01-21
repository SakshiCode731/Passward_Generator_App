let lengthSlider = document.getElementById('lengthSlider')
let slideerValue = document.getElementById('slideerValue')
let generatebtn = document.getElementById('generatebtn')
let password = document.getElementById('password')
let copyIcon = document.getElementById('copyIcon')

/* slider value */
slideerValue.textContent = lengthSlider.value
lengthSlider.addEventListener("input", () => {
  slideerValue.textContent = lengthSlider.value
})

/* checkbox icon click */
let checkboxes = document.querySelectorAll('.checkbox')
checkboxes.forEach(icon => {
  icon.addEventListener('click', e => {
    let checkbox = e.target.nextElementSibling.nextElementSibling

    if (e.target.innerText === 'radio_button_unchecked') {
      e.target.innerText = 'task_alt'
      checkbox.checked = true
    } else {
      e.target.innerText = 'radio_button_unchecked'
      checkbox.checked = false
    }
  })
})

/* label click */
let includeLabels = document.querySelectorAll('.row label')
includeLabels.forEach(label => {
  label.addEventListener('click', e => {
    let icon = e.target.previousElementSibling
    let checkbox = e.target.nextElementSibling

    if (icon.innerText === 'radio_button_unchecked') {
      icon.innerText = 'task_alt'
      checkbox.checked = true
    } else {
      icon.innerText = 'radio_button_unchecked'
      checkbox.checked = false
    }
  })
})

/* generate password */
generatebtn.addEventListener('click', () => {
  let length = lengthSlider.value

  let uppercase = document.getElementById('uppercase').checked
  let lowercase = document.getElementById('lowercase').checked
  let symbols = document.getElementById('symbols').checked
  let numbers = document.getElementById('numbers').checked

  let generatedPassword = generatePassword(
    length,
    uppercase,
    lowercase,
    symbols,
    numbers
  )

  password.value = generatedPassword
  copyIcon.innerText = 'content_copy'
})

function generatePassword(length, uppercase, lowercase, symbols, numbers) {
  let charset = ""
  let result = ""

  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz"
  if (symbols) charset += "#@$%!&*()^'';"
  if (numbers) charset += "1234567890"

  if (charset === "") return ""

  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length))
  }

  return result
}

/* copy password */
copyIcon.addEventListener('click', () => {
  if (password.value === "") 

  navigator.clipboard.writeText(password.value)
  copyIcon.innerText = 'check'

  setTimeout(() => {
    copyIcon.innerText = 'content_copy'
  },2000)
})
