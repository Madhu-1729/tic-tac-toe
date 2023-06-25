gameBoard =  [
    [ "", "", ""] , 
    [ "", "", ""] , 
    [ "", "", ""] 
];

function setDefaultBoard(){
    gameBoard =  [
        [ "", "", ""] , 
        [ "", "", ""] , 
        [ "", "", ""] 
    ];
    gameFinished = false;
currentPlayer = "X"
    resetBoard(); 
}

gameFinished = false;
currentPlayer = "X"

function makeMove(row,col){
    let box = document.getElementById(row+"-"+col)
 if(!gameFinished && (box.textContent != "X") && (box.textContent != "O") ){
    box.textContent = currentPlayer;
    gameBoard[row][col] = currentPlayer;
    if(checkWin(gameBoard,currentPlayer)){
        gameFinished = true
        setTimeout(() => {
            if (window.confirm("Do you want to play again?")) {
                setDefaultBoard();   
               
              }
        }, 100);
    }
    else if(!gameStillOn(gameBoard)){
        setTimeout(() => {
            alert("Hello, Game is Draw " );
        }, 9000);
    }
    currentPlayer = (currentPlayer == "X") ? "O" : "X";

 } 
}
function checkWin(board,currentPlayer){
 if((
    (board[1][1] == currentPlayer &&
      ((board[0][0] == currentPlayer && board[2][2] == currentPlayer) ||
        (board[0][2] == currentPlayer && board[2][0] == currentPlayer) ||
        (board[0][1] == currentPlayer && board[2][1] == currentPlayer) ||
        (board[1][0] == currentPlayer && board[1][2] == currentPlayer))) ||
    (board[0][0] == currentPlayer &&
      ((board[0][1] == currentPlayer && board[0][2] == currentPlayer) ||
        (board[1][0] == currentPlayer && board[2][0] == currentPlayer))) ||
    (board[2][2] == currentPlayer &&
      ((board[1][2] == currentPlayer && board[0][2] == currentPlayer) ||
        (board[2][1] == currentPlayer && board[2][0] == currentPlayer)))
  )){
    return true
    }else { 
        return false
    }
}

function gameStillOn(board){
    // board.map(function(element, index) { 
    //     console.log(element); 
    //     element.map(function(element2, index2) { 
    //         console.log(element2); 
    //         return (element2 == "")})
    // });
    
    for(let i=0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
            if(board[i][j] == ""){
                return true
            }
        }
    }
}

function resetBoard(){
    //  setDefaultBoard(); 
$(".rounded").map(function(element, index) {index.textContent = ""});
}