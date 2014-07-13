// Create a new player object
var player = new Player();

// This array holds the IDs of all the red blocks that kill you
var dangerous = new Array();

var animationTime = 100;


// This array holds the IDs of all the portals
var portals = new Array();

// Turn count which can be used in the future to count how many turns the player 
// took to complete the level
var turnNumber = 0;

// Determines how often the red blocks will appear.
var redBlockFrequency = 3;
$("#redBlock").val(redBlockFrequency);

//array[walls, portals]
var levelOne = new Array("7;18;25;19;31;49;37;38;56;57;58;59;60;61;62;63;64;65;66;67;68;69;70;71;147;129;111;112;113;114;115;116;117;118;119;120;165",
						 "51;72");
var walls = levelOne[0].split(";");
var levels = new Array("one", "two", "three", "four");
var wallObjs = new Array();

one();

//initiate level one
function one(){

	createBack();
	var p = levelOne[1].split(";");
	createPortal(p[0], p[1]);
	createWalls();
}

// This function creates the grid of grey blocks that serve as the backdrop and 
// can be manipulated by turning them into danger blocks, portals, etc.
function createBack(){

	var t = 0;
	var left = 0;

	var numID = 0;
	for(var x = 1; x < 181; x++){

		//create the element, style it, and add it in
		var div = document.createElement("div");
		div.className = "empty square";
		div.id = numID;
		div.style.top = t + 'px';
		div.style.left = left + 'px';
		div.type = "Nothing";
		document.getElementById("cage").appendChild(div);

		if(x % 18 == 0){

			t += 50;
			left = 0;

		} else {

			left += 50;
		}

		numID++;
	}
}

function Wall(id){
	//creating the HTML entity
	obj = document.getElementById(id)
	obj.className = "wall square";

	//creating the Wall object
	this.div = document.getElementById(id);
	this.className = "wall square";
	this.type = "Wall";
	this.isWall = true;
}

function createWalls(){
	for(var x = 0; x < walls.length; x++){
		var stuff = new Wall(walls[x]);
		wallObjs.push(stuff);
	}
}

// This function creates a random danger block on a valid location on the grid. 
// Blocks can be made where the player is
function randomDanger(){

	//acquire a random number within the grid
	var rand = Math.floor((Math.random() * 140) + 1);
	while(rand == 0 ||
		  inArray(rand, dangerous) ||
		  inArray(rand, portals) ||
		  inArray(rand, walls)) {

		rand = Math.floor((Math.random() * 140 + 1));
	}

	var elem = document.getElementById(rand);
	elem.className = "danger square";
	elem.type = "Danger";
	dangerous.push(rand);
}

function createPortal(portal1, portal2){

	var elem1 = document.getElementById(portal1);
	var elem2 = document.getElementById(portal2);
	elem1.className = "portal square p1";
	portals.push(portal1);
	elem2.className = "portal square p2";
	portals.push(portal2);

	elem1.type = "Portal";
	elem2.type = "Portal";
}

//function to check if a value is in an array, returns true or false
function inArray(val, array){

	for(var x = 0; x < array.length; x++){

		if(array[x] == val){

			return true;
		}
	}

	return false;
}

function modGame(){

	redBlockInput = $("#redBlock").val();
	redBlockNum = parseInt(redBlockInput, 10);
	redBlockFrequency = redBlockNum;
	console.log(redBlockFrequency);
}
