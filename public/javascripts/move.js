/*
 * Provides mobility for the player and also checks if the player is in the correct square to win, lose, or access a portal
 * Essentially anything that involves the location of the player 
 */

document.onkeydown = checkKey;

function checkKey(e) {

    //generate a random danger block whenever an arrow key was pressed and it is the 3rd turn
	if((e.keyCode >= '37' && e.keyCode <= '40') && turnNumber % 3 == 0){
		randomDanger();
	}

    e = e || window.event;

    var objStyle = document.getElementById("block").style;
    var left = objStyle.left;
    var top = objStyle.top;

    /*
     * The process for moving involves overriding the browser's default arrow 
     * key commands (e.preventDefault()), and then calling our custom actions to
     * occur
     */
    switch(e.keyCode){

        case 37:
            e.preventDefault();
            player.moveLeft(left, top);
            
            break;
        case 38:
            e.preventDefault();
            player.moveUp(left, top);
            break;
        case 39:
            e.preventDefault();
            player.moveRight(left, top);
            break;
        case 40:
            e.preventDefault();
            player.moveDown(left, top);
            break;
    }

    //status checks
    checkWin();
    checkLoss();
    checkPortal();
}
