let humanscore = 0;
let computerscore = 0;
let compchoice = null;

function humanchoice(i) {
    
    let value = prompt(`Round ${i}\nEnter Your Choice (1-3) :\n1) Rock \n2) Paper\n3) Scissor`);
    let humaninput = (value==1) ? "1" : (value==2) ? "2" : "3";
    let humanstr = (value==1) ? "Rock" : (value==2) ? "Paper" : "Scissor";

    compchoice = computerchoice();

    let compstr = (compchoice==1) ? "Rock" : (compchoice==2) ? "Paper" : "Scissor";

    if ((humaninput == 1 && compchoice == 3) || (humaninput == 2 && compchoice == 1) || (humaninput == 3 && compchoice == 2)) {
        humanscore += 1;
        prompt(`Your choice = ${humanstr}\nComputer choice = ${compstr}\nYour Score = ${humanscore}/5\nComputer Score = ${computerscore}/5\nPress any key to continue...`);
    }

    else if ((compchoice == 1 && humaninput == 3) || (compchoice == 2 && humaninput == 1) || (compchoice == 3 && humaninput == 2)) {
        computerscore += 1;
        prompt(`Your choice = ${humanstr}\nComputer choice = ${compstr}\nYour Score = ${humanscore}/5\nComputer Score = ${computerscore}/5\nPress any key to continue...`);
    }
    else {
        prompt(`Both Chose ${humanstr}\nPress any key to continue...`);
        
    }

    


}

function computerchoice() {
    let value = Math.floor(Math.random() * 3  + 1);
    let result = (value==1) ? "1" : (value==2) ? "2" : "3"; // 1)Rock   2)Paper   3)Scissor
    return result;
}

function rounds() {
    for (let i=1; i<=10; i++) {
        humanchoice(i);
        
    }
    if (humanscore>computerscore) {
            prompt(`You Won !\nYour Score = ${humanscore}/5`);
        } else prompt("You Lose");
}

rounds()


