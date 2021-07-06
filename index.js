// Create an Array of at least 3 losing messages
const losingMessage = ["Sorry, try again!", "Almost had it, try again!", "Oh no, you lost!"]

// Create variables to count wins and losses
var totalWins = 0;
var totalLosses = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var message = document.getElementById("message")
var wins = document.getElementById("wins")
var losses = document.getElementById("losses")

// target all .box elements and attach a click event listener to each one using a loop
var boxEl = document.querySelectorAll(".box");
    boxEl.forEach((element) => element.addEventListener("click", clicked)
    );

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
function clicked (event) {
    var number = parseInt(event.target.textContent);
    console.log(event);


// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
    var winner = Math.floor((Math.random() * 3) + 1);

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
    if (number == winner){
        message.textContent = "Yay! You won!"
        totalWins += 1
        wins.innerHTML = 'Wins: ' + totalWins;
    }
    

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
    else {
        message.textContent = losingMessage [Math.floor(Math.random() * losingMessage.length)]
        totalLosses += 1 
        losses.innerHTML = 'Losses: ' + totalLosses;
    }

    console.log(number);
}
  
