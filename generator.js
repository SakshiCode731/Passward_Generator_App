let lengthSlider = document.getElementById('lengthSlider')
let slideerValue = document.getElementById('slideerValue')

slideerValue.textContent = lengthSlider.value

lengthSlider.addEventListener("input", ()=>{
  slideerValue.textContent = lengthSlider.value
})

let checkboxes = document.querySelectorAll('.checkbox')