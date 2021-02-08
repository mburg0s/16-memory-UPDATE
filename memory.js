
let isClicked = false
let firstEl = ''
let secondEl = ''

 let  cards = 
 [
  {span:"fa fa-ambulance", id: 1, flip:false},
  {span:"fa fa-ambulance", id: 1, flip:false},
  {span:"fa fa-bicycle", id: 2, flip:false},
  {span:"fa fa-bicycle", id: 2, flip:false},
  {span:"fa fa-heart", id: 3, flip:false},
  {span:"fa fa-heart", id: 3, flip:false},
  {span:"fa fa-anchor", id: 4, flip:false},
  {span:"fa fa-anchor", id: 4, flip:false},
  {span:"fa fa-apple", id: 5, flip:false},
  {span:"fa fa-apple", id: 5, flip:false},
  {span:"fa fa-bell", id: 6, flip:false},
  {span:"fa fa-bell", id: 6, flip:false},
  {span:"fa fa-bug", id: 7, flip:false},
  {span:"fa fa-bug", id: 7, flip:false},
  {span:"fa fa-bomb", id: 8, flip:false},
  {span:"fa fa-bomb", id: 8, flip:false},
  {span:"fa fa-car", id: 9, flip:false},
  {span:"fa fa-car", id: 9, flip:false}
]
let lives = ["fa fa-star","fa fa-star","fa fa-star","fa fa-star","fa fa-star",
"fa fa-star","fa fa-star","fa fa-star"]

const divTiles = document.querySelector('#tiles')
document.querySelector("#loseWindow").style.display = "none"


shuffle(cards)

 const tblTiles = cards.map((item)=> {


     return `
      <div class ="card">
        <div class="flip" data-value =${item.id} hidden><span class ="${item.span}"> </span></div>
      </div> `
 }).join('')

 divTiles.innerHTML = tblTiles

 
const crd = document.querySelector('.card')
let firstCard = 0
let secondCard = 0
let arrCard = []
fLives()



divTiles.addEventListener('click',function(e){
  console.log(divTiles)

  

  firstCard > 0 ? firstEl.hidden = false : firstEl.hidden = true
  secondCard > 0 ? secondEl.hidden = false : secondEl.hidden = true
  if (firstCard === 0) {
    firstCard = e.target.firstElementChild.dataset.value
    firstEl = e.target.firstElementChild

  } else if (secondCard === 0) {
    secondEl = e.target.firstElementChild
    secondCard = e.target.firstElementChild.dataset.value
    // console.log(secondCard)


  }
  e.target.firstElementChild.hidden = false
  // console.log(firstCard,secondCard )

  if (firstCard > 0 && secondCard > 0){
    if (firstCard ===secondCard) {
      arrCard.push(firstCard)
      updateCards()
      // firstEl.hidden = false
      // secondEl.hidden = false
      // debugger
      firstEl.removeAttribute('hidden')
      secondEl.removeAttribute('hidden')
      firstEl.removeEventListener("click",keepShowing)
      secondEl.removeEventListener("click",keepShowing)
      divtiles.removeEventListener("click",keepShowing)
      console.log(firstEl.hidden,secondEl.hidden , 'log')
      // firstCard = 0
      // secondCard = 0
  

      console.log('pair!')
        

    } else {
        if (firstEl.hidden == false && secondEl.hidden == false) {
          console.log('hello')
          lives.pop('fa fa-star')
          fLives()
          if (lives.length == 0) {
              document.querySelector("#loseWindow").style.display = "block"
              document.querySelector("body").style.backgroundColor = "rgb(51, 83, 76)"

         }

       }
    }
    firstCard = 0
    secondCard = 0
    firstEl.value = ''
    secondEl.value = ''
    console.log(firstEl.hidden, secondEl.hidden)

}

})


// document.querySelector('#reset')

function compareCards() {
  if (firstCard > 0 && secondCard > 0){
    if (firstCard ===secondCard) {
        

    } else {
        if (firstEl.hidden == false && secondEl.hidden == false) {
        firstEl.hidden = true
        secondEl.hidden = true
      }
    }
    firstCard = 0
    secondCard = 0
    firstEl.value = ''
    secondEl.value = ''

}
  
}

function updateCards() {
  cards.filter(function(e){
    if (e.id == firstCard) {
        e.flip = true
    }

  })
console.log(cards)
}

function shuffle(array){

  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }


}




function fLives(){

const divLives = document.querySelector('#lives')
// const spanStar = document.querySelectorAll('.star')
const star = lives.map(function(e){
  return `<span class="${e} star"></span>`
}).join('')

divLives.innerHTML = star

}



function keepShowing(){
  console.log('Match!')
  firstEl.hidden = false
  secondEl.hidden = false

}