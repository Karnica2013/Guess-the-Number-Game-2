let rn =Math.floor(Math.random()*100)
function checkAnswer(){
   let userNumber = document.getElementById("userNumber").value
   if(userNumber>100 || userNumber<0){
    alert("Number out of range!!!")
    return
   }
   if(userNumber==rn){
    document.getElementById("p2").innerHTML="  <p>Congratulations! You've Won!! </p><button onclick='resetGame()'>Play Again</button>"
   }
   else if(userNumber<rn){
     document.getElementById("p2").innerHTML="  <p>Higher! Try Again</p>"
   }
   else{
    document.getElementById("p2").innerHTML="  <p>Lower! Try Again</p>"
   }
   console.log("rn")
}
function resetGame(){
    window.location="index.html"
}
