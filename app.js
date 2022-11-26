function populateGrid(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    let value = window.prompt("how many squares");
    if(value >= 150 || value < 2){
        alert("you cant put more than 150 squares on the board");
    }else{
        let update = value * value
        squares.forEach((div) => div.remove());
        board.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${value}, 1fr)`;
        board.style.border = "2px solid black";
        for (i = 0; i < update; i++) {
            let square = document.createElement("div");
            square.style.background = "white";
            square.addEventListener("mouseover", () => square.style.background = "black");
            board.appendChild(square);
        };
    };
};
populateGrid();

let clearBtn = document.getElementById("clearBtn").addEventListener("click", () => {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
});

let changeNum = document.getElementById("changeNum").addEventListener("click", ()=>{
    populateGrid()
})