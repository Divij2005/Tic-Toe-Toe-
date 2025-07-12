let buttons = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#btn");
let newBtn = document.querySelector("#newBtn");
let winner = document.querySelector(".winner");
let msg = document.querySelector("#msg");
let turnO = true;

const winPttrn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

buttons.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPttrn){
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, the winner is ${Winner}`;
    winner.classList.remove("hide");
    disableBtns();
}

const disableBtns = () => {
    for (let box of buttons){
        box.disabled = true;
    }
}

const enableBtns = () => {
    for (let box of buttons){
        box.disabled = false;
        box.innerText = ""
    }
}

const resetGame = () => {
    turnO = true;
    enableBtns();
    winner.classList.add("hide")
}

newBtn.addEventListener("click" , resetGame);
rstBtn.addEventListener("click" , resetGame);  
