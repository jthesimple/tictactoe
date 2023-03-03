const playerFactory = (name, marker) =>{
    return {name, marker};
};

const gameboard = (() =>{
    const gameboardContents = [];
    let rowsContainer = [[0,0,0],[0,0,0]];
    let columnContainer = [[0,0,0],[0,0,0]];
    let diagonalContainer = [[0,0,0],[0,0,0]];
    let oppositeDiagonalContainer = [[0,0,0],[0,0,0]];

    const checkWinner = function(row, column, marker){
        if (marker === 'X'){
            rowsContainer[0][row]+=1;
            columnContainer[0][column]+=1;
            if (row === column){
                diagonalContainer[0][row] += 1;    
            };
            if (row + column + 1 ===3){
                oppositeDiagonalContainer[0][row] +=1;
            };
            let totalSum = diagonalContainer[0].reduce((accumulator, currentValue) => accumulator + currentValue);
            let oppositeTotalSum = oppositeDiagonalContainer[0].reduce((accumulator,currentValue) => accumulator + currentValue);
                if (rowsContainer[0][row]=== 3){
                    console.log('Player X has won!');
                } else if (columnContainer[0][column]===3){
                    console.log('Player X has won!'); 
                } else if (totalSum ===3){
                    console.log('Player X has won!')
                } else if (oppositeTotalSum ===3){
                    console.log('Player X has won!')
                };
        } else if (marker === 'O'){
            rowsContainer[1][row]+=1;
            columnContainer[1][column]+=1;
            if (row === column){
                diagonalContainer[1][row] += 1;    
            };
            if (row + column + 1 ===3){
                oppositeDiagonalContainer[1][row] +=1;
            };
            let totalSum = diagonalContainer[1].reduce((accumulator, currentValue) => accumulator + currentValue);
            let oppositeTotalSum = oppositeDiagonalContainer[1].reduce((accumulator,currentValue) => accumulator + currentValue);
                if (rowsContainer[1][row]=== 3){
                    console.log('Player O has won!');
                } else if (columnContainer[1][column]===3){
                    console.log('Player O has won!'); 
                } else if (totalSum ===3){
                    console.log('Player O has won!')
                } else if (oppositeTotalSum ===3){
                    console.log('Player O has won!')
                };
        };  
    };
    return {checkWinner};
})();


const gameFlow = (() =>{
    const buttons = document.querySelectorAll('button.game-button');
    let players = [playerFactory('julio', 'X'), playerFactory('alberto','O')];

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;
    
    const clickEvent = function(){
        buttons.forEach(button => button.addEventListener('click', () =>{
        button.textContent = getActivePlayer().marker;
        let rowIndex = parseInt(button.getAttribute('row-index'));
        let columnIndex = parseInt(button.getAttribute('column-index'));
        gameboard.checkWinner(rowIndex,columnIndex, getActivePlayer().marker);
       },{once:true}));
    };

    const handleTurn = function(){
        const once = {once:true};
        buttons.forEach(button => button.addEventListener('click',switchPlayer,once));
    };

    const switchPlayer = function(){
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
        
    };

    const playGame = function(){
        clickEvent();
        handleTurn();
        gameboard.checkWinner();
        
    };

    return {playGame};
})();

gameFlow.playGame();

















/*const displayBoard = (array) =>{
    const parent = document.querySelector('.gameboard-container');
        for (let i = 0; i < array.length; i++){
           parent.children[i].textContent = array[i];
        };   
    };*/