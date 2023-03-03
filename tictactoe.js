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
                    alert('Player X has won!');
                } else if (columnContainer[0][column]===3){
                    alert('Player X has won!'); 
                } else if (totalSum ===3){
                    alert('Player X has won!');
                } else if (oppositeTotalSum ===3){
                    alert('Player X has won!');
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
                    alert('Player O has won!');
                } else if (columnContainer[1][column]===3){
                    alert('Player O has won!'); 
                } else if (totalSum ===3){
                    alert('Player O has won!');
                } else if (oppositeTotalSum ===3){
                    alert('Player O has won!');
                };
        };  
    };
    return {checkWinner, rowsContainer, columnContainer, diagonalContainer, oppositeDiagonalContainer};
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

    const restart = function(){
        const restartButton = document.querySelector('.restart');
        restartButton.addEventListener('click', restartGame)
    }

    const restartGame = function(){
        const gameButtons = document.querySelectorAll('.game-button');
        gameButtons.forEach( button => button.textContent = '');

            for (let i = 0; i < gameboard.rowsContainer.length; i++){
                for (let j = 0; j < gameboard.rowsContainer[i].length; j++){
                    gameboard.rowsContainer[i][j] = 0; 
                };
            };

            for (let i = 0; i < gameboard.columnContainer.length; i++){
                for (let j = 0; j < gameboard.columnContainer[i].length; j++){
                    gameboard.columnContainer[i][j] = 0; 
                };
            };

            for (let i = 0; i < gameboard.diagonalContainer.length; i++){
                for (let j = 0; j < gameboard.diagonalContainer[i].length; j++){
                    gameboard.diagonalContainer[i][j] = 0; 
                };
            };

            for (let i = 0; i < gameboard.oppositeDiagonalContainer.length; i++){
                for (let j = 0; j < gameboard.oppositeDiagonalContainer[i].length; j++){
                    gameboard.oppositeDiagonalContainer[i][j] = 0; 
                };
            };

            playGame();
        };



    const playGame = function(){
        clickEvent();
        handleTurn();
        gameboard.checkWinner();
        restart();
        
    };
    return {playGame, restart, restartGame};
})();

gameFlow.playGame();