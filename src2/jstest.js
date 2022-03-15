let playerScore=0;
let computerScore=0;    
let i=0;    

document.getElementById("humanscore").innerHTML = playerScore;
document.getElementById("computerscore").innerHTML = computerScore;


function buttonTest(elem) {
//while(i==0) {
 //   let playerInput = document.getElementById("txtSearch").value;  
//let playerInput = prompt("rock? paper? scissors?")
//let playerInput = document.getElementById("elem").value
let playerInput = (elem.value);
if(playerInput == "rock") {
    document.getElementById("humanimage").src="../pics/rock.png";
    
}
else if (playerInput == "paper") {
    document.getElementById("humanimage").src="../pics/paper.png";
}

else if (playerInput == "scissors") {
    document.getElementById("humanimage").src="../pics/scissors.png";
}
else {
    
}
playerInput = playerInput.toLowerCase();
gamePlay(playerInput, computerPlay());
console.log(playerScore);
console.log(computerScore);

document.getElementById("humanscore").innerHTML = playerScore;
document.getElementById("computerscore").innerHTML = computerScore;
/*if(playerScore==3 || computerScore == 3){
    i=1;

}
//else {

//}
//}*/
if(playerScore==3) {
    console.log("CONGRATS YOU WON!")
   const title = document.getElementById("title");
   title.textContent = "humans have survived";
   const background = document.body.style.backgroundColor = "green";
   //let rock = document.getElementById('bottom');
   //rock.parentNode.removeChild(rock);

   document.getElementById("bottom").style.display = "none";
    
  

    let btn = document.createElement("button");
       btn.innerHTML = "Restart";
       btn.setAttribute("id","restartButton");
       btn.addEventListener("click", function () {
            playerScore = 0;
            computerScore = 0;
           
            playerInput = 0;

            document.getElementById("bottom").style.display = "block";

            document.getElementById("humanimage").src="../pics/nothing.png";

            document.getElementById("computerimage").src="../pics/nothing.png";

            document.getElementById("humanscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;

            const title = document.getElementById("title");
            title.textContent = "rockpaperscissors";
            const background = document.body.style.backgroundColor = "white";
            let restartremove = document.getElementById('restartButton');
            restartremove.parentNode.removeChild(restartremove);
        });
document.body.appendChild(btn);


}
else if (computerScore==3) {
    console.log("THE COMPUTERS HAVE TAKEN OVER!!");
    title = document.getElementById("title").innerHTML = "the computers have taken over";
    background = document.body.style.backgroundColor = "red";

    document.getElementById("bottom").style.display = "none";

    let btn = document.createElement("button");
    btn.innerHTML = "Restart";
    btn.setAttribute("id","restartButton");
    btn.addEventListener("click", function () {
         playerScore = 0;
         computerScore = 0;

         document.getElementById("bottom").style.display = "block";

         document.getElementById("humanimage").src="../pics/nothing.png";

         document.getElementById("computerimage").src="../pics/nothing.png";

         document.getElementById("humanscore").innerHTML = playerScore;
        document.getElementById("computerscore").innerHTML = computerScore;
      

         playerInput = 0;
         const title = document.getElementById("title");
         title.textContent = "rockpaperscissors";
         const background = document.body.style.backgroundColor = "white";
         let restartremove = document.getElementById('restartButton');
         restartremove.parentNode.removeChild(restartremove);
     });
document.body.appendChild(btn);

}
else {
   
}
}

function computerPlay () {
    const game = ["rock", "paper", "scissors"];

let random = game[Math.floor(Math.random()*game.length)];
console.log(random);

if(random == "rock") {
    document.getElementById("computerimage").src="../pics/rock.png";
    
}
else if (random == "paper") {
    document.getElementById("computerimage").src="../pics/paper.png";
}

else if (random == "scissors") {
    document.getElementById("computerimage").src="../pics/scissors.png";
}
else {
    
}


return random;
}



function gamePlay(playerInput, computerInput) {
//document.getElementById("output").style.color = "red";
if(playerInput === computerInput) {

    console.log("Tie") 
}
else if (playerInput === "rock" && computerInput === "paper"){
console.log("Computer wins");
computerScore++;
}
else if (playerInput === "rock" && computerInput === "scissors"){
console.log("Player wins");
playerScore++;
}
else if (playerInput === "paper" && computerInput === "rock"){
console.log("Player wins");
playerScore++;
}
else if (playerInput === "paper" && computerInput === "scissors"){
console.log("Computer wins");
computerScore++;
}
else if (playerInput === "scissors" && computerInput === "paper"){
console.log("Player wins");
playerScore++;
}
else if (playerInput === "scissors" && computerInput === "rock"){
console.log("Computer wins");
computerScore++;
}
else {
    console.log("Please type 'rock, paper, or scissors'");
}
}

function endGame () {

     let rock = document.getElementById('bottom');
     let rocktwo = document.getElementById('bottom');
   rock.parentNode.removeChild(rock);
return rocktwo;
}