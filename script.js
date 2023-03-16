const number = document.getElementById("advice--number")
const quoteEl = document.getElementById("quote")
const diceBtn = document.getElementById("dice--circle")
const icon = document.getElementById("dice--icon")



diceBtn.addEventListener("click", ()=> {
  let randomNumber = Math.floor(Math.random() * 224 ) + 1
  fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
  .then(res => res.json())
  .then(data => data.slip)
  .then(quote => {
    quoteEl.textContent = quote.advice
    number.textContent = `#${quote.id}`
  })

})

diceBtn.onmouseenter = () => {
  icon.style.rotate = "360deg"
  icon.style.transition = "rotate 0.5s ease-out"
}

diceBtn.onmouseleave = () => {
  icon.style.rotate = "-90deg"
  icon.style.transition = "rotate 0.5s ease-out"
}

function rotateDice(){
  
}

