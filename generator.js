let lengthSlider = document.getElementById('lengthSlider')
let slideerValue = document.getElementById('slideerValue')

slideerValue.textContent = lengthSlider.value

lengthSlider.addEventListener("input", ()=>{
  slideerValue.textContent = lengthSlider.value
})

let checkboxes = document.querySelectorAll('.checkbox')

Array.from(checkboxes).forEach(Element=>{
  Element.addEventListener('click', (e)=>{
    if(e.target.innerText == 'radio_button_unchecked'){
      e.target.innerText = 'task_alt'
      e.target.nextElementSibling.setAttribute
      ("checked", "")
    }
    else{
      e.target.innerText = 'radio_button_unchecked'
      e.target.nextElementSibling.nextElementSibling.
      removeAttribute("checked")
    }
  })
})

let includeLabels = document.querySelectorAll('.now label')

Array.from(includeLabels).forEach(Element=>{
  Element.addEventListener('click', (e)=>{
    if(e.target.previousElementSibling.innerText == 'radio_button_unchecked'){
      e.target.innerText = 'task_alt'
      e.target.previousElementSibling.innerText = 'task_alt'
     
    }
    else{
      e.target.previousElementSibling.innerText = 'radio_button_unchecked'
    
    }
  })
})

let generatebtn = document.getElementById('generation')

generatebtn.addEventListener('click', function(){
  let length = lengthSlider.value

  let upercase = document.getElementById('uppercase').checked
  let lowercase = document.getElementById('lowercase').checked
  let symbols = document.getElementById('symbols').checked
  let numbers = document.getElementById('numbers').checked

  let password_generated = generatePassword(length, upercase, lowercase, symbols, numbers)
})

function generatePassword(length, uppercase, lowercase, symbols, numbers){

  let charset = ""
  let string = ""

  if(uppercase){
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(lowercase){
    charset += "abcdefghijklmnopqrstuvwxyz"
  }
  if(symbols){
    charset += "#@$%!&*()^'';"
  }
    if(numbers){
    charset += "1234567890"
  for(let i = 0; i<length; i++){
    string += charset.charAt(Math.floor(Math.random()*charset.length))
  }
  console.log(string)
  }
}