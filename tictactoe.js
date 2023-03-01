const playerFactory = (name, marker) =>{
    return {name, marker};

};

const gameboard = (() =>{
    const gameboardContents = ['X','O','X','X','O','X','X','O','O'];
    return {gameboardContents};
})();




const gameFlow = (() =>{
    
    const displayBoard = (array) =>{
    const parent = document.querySelector('.gameboard-container');
        for (let i = 0; i < array.length; i++){
           parent.children[i].textContent = array[i];
        };   
    };
    
    const clickEvent = function(){
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.addEventListener('click', () =>{
        button.textContent = getActivePlayer().marker;
       }));
    };

    let players = [playerFactory('julio', 'X'), playerFactory('alberto','O')];

    let activePlayer = players[0];

    const switchPlayer = function(){
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const playGame = function(){

    };

    
    


    return {clickEvent};
})();

gameFlow.clickEvent();