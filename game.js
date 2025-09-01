let invite=confirm("Can you play with me");
if(invite){
    let playgame=prompt("Choose Rock, Paper, Scissors");
    if(playgame){
        let playerchoice=properCase(playgame);
        if( playerchoice==="rock" ||
            playerchoice==="paper" || 
            playerchoice==="scissors")
        {
            let computer=Math.floor(Math.random()*3)+1;
            let comchoice=computer===1 ?"rock":computer===2?"paper":"scissors";
            let result=(playerchoice===comchoice)?"Tie!!":(playerchoice==="rock" && comchoice==="scissors")?"Player wins!!":(playerchoice==="paper" && comchoice==="rock")?"Player wins!!":(playerchoice==="scissors" && comchoice==="paper")?"Player wins!!":"Computer wins!!";
            alert(result);
            let again=confirm("play again");
            if(again){
                playAgain();
            }
            else{
                alert("ok! Thanks for playing")
            }
        }
        else{
            alert("write correctly!!")
            let again=confirm("play again");
            if(again){
                playAgain();
            }
            else{
                alert("ok! Thanks for playing")
            }
        }
    }
    else{
        alert("Thats fine ! May be play later");
    }
}
else{
    alert("Ok ! play later");
}
function properCase(playgame){
    return playgame.trim().toLowerCase();
}
function playAgain(){
    location.reload();
}