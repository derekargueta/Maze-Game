
//function to check if the player hit a danger block. Gives alert message and refreshes the page if so
function checkLoss(){
	var you = document.getElementById("block").style;
	for( var x = 0; x < dangerous.length; x++){
		var tempStyle = document.getElementById(dangerous[x]).style;
		if(you.left == tempStyle.left && you.top == tempStyle.top){
			alert("You LOSE!");
			history.go(0);
		}
	}
}

//function that checks if the player reached the golden block. Gives alert message and refreshes the page if so
function checkWin(){
    turnNumber++;
	var youStyle = document.getElementById("block").style;
	var endStyle = document.getElementById("end").style;
	if(youStyle.left == endStyle.left && youStyle.top == endStyle.top){
		alert("You WIN!");
		history.go(0);
	}
}

function checkWall(){
    var walls = levelOne[0].split(";");
    var playerStyle = document.getElementById("block").style;
    for(var x = 0; x < walls.length; x++){
        var wallStyle = document.getElementById(walls[x]).style;
    }
}

function checkPortal(){
    if(inPortal() != -1){
        if(inPortal() == portals[0]){
            document.getElementById("block").style.left = document.getElementById(portals[1]).style.left;
            document.getElementById("block").style.top = document.getElementById(portals[1]).style.top;
        } else {
            document.getElementById("block").style.left = document.getElementById(portals[0]).style.left;
            document.getElementById("block").style.top = document.getElementById(portals[0]).style.top;
        }
    }
}

function inPortal(){
    var youStyle = document.getElementById("block").style;
    for(var x = 0; x < portals.length; x++){
        var portalStyle = document.getElementById(portals[x]).style;
        if(youStyle.left == portalStyle.left && youStyle.top == portalStyle.top){
            return portals[x];
        }
    }
    return -1;
}