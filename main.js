// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.querySelector('#modal') // grab the object
const likeGlyphs = document.getElementsByClassName("like-glyph")

function changeOfHeart(e){
  let promise = mimicServerCall()
  promise.then( result => {
    let heart= e.target
    if(heart.textContent === EMPTY_HEART){
      // console.log(e.target)
    heart.textContent = FULL_HEART
    heart.classList.add("activated-heart")
  }else if(heart.textContent === FULL_HEART){
    heart.textContent = EMPTY_HEART
    heart.classList.remove("activated-heart")
  }    
  }).catch(error =>{
    errorDiv.classList.remove("hidden")
    errorDiv.textContent = error
    setTimeout(function (){
    errorDiv.classList.add("hidden") 
    }, 3000)
  })
}
for(let i= 0; i < likeGlyphs.length; i++){
  likeGlyphs[i].addEventListener("click", changeOfHeart)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
//we dont want the user to see error
document.addEventListener('DOMContentLoaded', function(){
  //google classList
  errorDiv.classList.add("hidden")
})