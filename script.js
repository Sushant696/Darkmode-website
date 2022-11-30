/* 
 Game discription : 
 1. player must geuss a number between a min and a max 
 2. player get a certain amount of geusses 
 3. Notify player of guesses remaining 
 4. Notify the player of the correct answer if loose . 
 5. Let player choose to play again 
*/


//  Game values 
let min = 1, 
    max = 10 ;
    winningNum = getRandomNum(min,max);
    guessesLeft = 3 ; 


// UI Elements 
const game = document.querySelector(".card") ,
      minNum = document.querySelector(".min"),
      maxNum = document.querySelector(".max"),
      UImessage = document.querySelector(".message"),
      guessBtn = document.querySelector("[data-btn]"),
      guessInput = document.querySelector(".input");

 
// assiging values to mix and max in UI 
minNum.textContent = min ;
maxNum.textContent  = max ;

// Play again Event handler 
game.addEventListener("mousedown", function (e)
{
  if(e.target.classList.contains("play-again")){window.location.reload()};

});


// listen to guesses 
guessBtn.addEventListener("click" , numGuess);

function numGuess (e)
{

 let guess = parseInt(guessInput.value);

//                      ** validation **  
// If entered is invalid  

if (guess < min  || guess > max || isNaN(guess) )
{showMessage("Please enter valid number !!" , 'red')}

//  Else entered number is invalid 
else {
// // check if won  
if (guess === winningNum)
{  
  gameover(true ,`Congratulation , ${winningNum} is correct answer !! `);
} 

else {

  guessesLeft -= 1 ;  

  //  lose the game 
 if ( guessesLeft === 0 )
 {gameover(false , `You lost !!! the correct number is ${winningNum}`)}
 
 // Answer wrong 
 else {
  if(guessesLeft < 0) return ;
  guessInput.style.borderColor = 'red';
  guessInput.value = '';
  showMessage(` Your guess is incorrect !! ${guessesLeft} guess left ` , 'red')}
}}
}

function gameover (won , msg ) {
  let color ; 
  won === true ? color = 'green' : color = "red" ;
   
  // disable input 
  guessInput.disabled = true;
  //  change border color 
   guessInput.style.borderColor = color; 
   // set message 
   showMessage(msg, color);

  //  play again  
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again" ;

}
//  Get winning number 
function getRandomNum(min,max)
{ 
  console.log (Math.floor(Math.random()* (max-min+1)+min));
return  Math.floor(Math.random()* (max-min+1)+min) ;
}


//  set message 
 function showMessage(message , color ) {
  UImessage.textContent = message ;
  UImessage.style.color  = color ; 
 }





