const playerFactory = (name, marker) =>{
    return {name, marker};

};

const gameboard = (() =>{
     const gameboardContents = [];
     const winningCombinations = [[0,1,2],
                                 [3,4,5],
                                 [6,7,8],
                                 [0,3,6], 
                                 [1,4,7],
                                 [2,5,8],
                                 [0,4,8],
                                 [2,4,6]
                                 ];
    


    return {gameboardContents, winningCombinations};
})();


const gameFlow = (() =>{

    const buttons = document.querySelectorAll('button');
    let players = [playerFactory('julio', 'X'), playerFactory('alberto','O')];

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;
    
    const clickEvent = function(){
        buttons.forEach(button => button.addEventListener('click', () =>{
        button.textContent = getActivePlayer().marker;
        let index = button.getAttribute('button-index');
        gameboard.gameboardContents.push(parseInt(index));
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