let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnX = true;
const winpat = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let count = 0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX===true){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        count++
        box.disabled = true;
        checkWinner();
    });
});
const resetGame = () =>{
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}
let disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
let enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner=(winner) => {
    if(winner==="Draw"){
        msg.innerText = `Match ${winner}`;
    }
    else{
        msg.innerText = `Congrats,${winner}`;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winpat){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                if(pos1val=="X"){
                    showWinner("Player 1 Won")
                }
                else{
                    showWinner("Player 2 Won")
                }
            }
        }
        if(count===9){
            showWinner("Draw");
        }
    }
};
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);