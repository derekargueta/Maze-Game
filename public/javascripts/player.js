/* The Player object */

function Player(){

    animating = false;

    //function to move the player's block one space to the left
    Player.prototype.moveLeft = function(left, top){

    	var wallPresent = false;
        for(var x = 0; x < wallObjs.length; x++){

        	var wallLeft = wallObjs[x].div.style.left;
        	var wallTop = wallObjs[x].div.style.top;
            var wallOnTop = parseInt(wallTop, 10) == parseInt(top, 10);
            var wallOnLeft = parseInt(wallLeft, 10) + 50 == parseInt(left, 10);

            if( wallOnTop && wallOnLeft){

                wallPresent = true;
            }
        }
        
        if(parseInt(left, 10) > parseInt("0px", 10) && !wallPresent){

            if(!animating){
                animating = true;
                $("#block").animate({
                    left: "-=50"
                }, animationTime, function(){
                    animating = false;
                    checkWin();
                    checkLoss();
                    checkPortal();
                });
            }
        }
	};

	// funtion to move the player's block on space to the right
	Player.prototype.moveRight = function(left, top){

        var wallPresent = false;
        for(var x = 0; x < wallObjs.length; x++){

        	var wallLeft = wallObjs[x].div.style.left;
        	var wallTop = wallObjs[x].div.style.top;
            var wallOnTop = parseInt(wallTop, 10) == parseInt(top, 10);
            var wallOnLeft = parseInt(wallLeft, 10) == parseInt(left, 10) + 50;

            if(wallOnTop && wallOnLeft){

                wallPresent = true;
           }
        }

        if (parseInt(left, 10) < parseInt("850px", 10) && !wallPresent) {

            if (!animating) {
                animating = true;
                $("#block").animate({
                    left: "+=50"
                }, animationTime, () => {
                    animating = false;
                    checkWin();
                    checkLoss();
                    checkPortal();
                });
            }
        }
	};

	//function to move the player's block one space up
	Player.prototype.moveUp = function(left, top){

		var wallPresent = false;
        for(var x = 0; x < wallObjs.length; x++){

        	var wallLeft = wallObjs[x].div.style.left;
        	var wallTop = wallObjs[x].div.style.top;
            var wallOnTop = parseInt(wallTop, 10) + 50 == parseInt(top, 10);
            var wallOnLeft = parseInt(wallLeft, 10) === parseInt(left, 10);

            if (wallOnTop && wallOnLeft) {
                wallPresent = true;
            }
        }

        if (parseInt(top, 10) > parseInt("0px", 10) && !wallPresent){

            if (!animating) {
                animating = true;
                $("#block").animate({
                    top: "-=50"
                }, animationTime, function() {
                    animating = false;
                    checkWin();
                    checkLoss();
                    checkPortal();
                });
            }
		}
	};

	// function to move the player's block one space down
	Player.prototype.moveDown = function(left, top) {
        var wallPresent = false;
        for(var x = 0; x < wallObjs.length; x++) {
        	var wallLeft = wallObjs[x].div.style.left;
        	var wallTop = wallObjs[x].div.style.top;
            var wallOnTop = parseInt(wallTop, 10) == parseInt(top, 10) + 50;
            var wallOnLeft = parseInt(wallLeft, 10) == parseInt(left, 10);

            if( wallOnTop && wallOnLeft ){

                wallPresent = true;
           }
        }

        if (parseInt(top, 10) < parseInt("450px", 10) && !wallPresent) {

            if (!animating) {
                animating = true;
                $("#block").animate({
                    top: "+=50"
                }, animationTime, () => {
                    animating = false;
                    checkWin();
                    checkLoss();
                    checkPortal();
                });
            }
        }
	};
}
