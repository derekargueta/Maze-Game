// create a new player object
var player = new Player();

//this array holds the IDs of all the red blocks that kill you
var dangerous = new Array();

//this array holds the IDs of all the portals
var portals = new Array();

//turn count which can be used in the future to count how many turns the player took to complete the level
var turnNumber = 0;

//array[walls, portals]
var levelOne = new Array("36;37;38;39;40;41;42;43;44;45;46;47;48;49;50;51;52;53", "2;54");
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

//this function creates the grid of grey blocks that serve as the backdrop and can be manipulated by turning them into danger blocks, portals, etc.
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
	obj.innerHTML = "<h4>WALL</h4>";

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

//this function creates a random danger block on a valid location on the grid. Blocks can be made where the player is
function randomDanger(){

	//acquire a random number within the grid
	var rand = Math.floor((Math.random()*140)+1);
	while(rand == 0 || inArray(rand, dangerous) || inArray(rand, portals) || inArray(rand, walls)){
		rand = Math.floor((Math.random()*140+1));
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

	elem1.innerHTML = "<h6>PORTAL</h6>";
	elem2.innerHTML = "<h6>PORTAL</h6>";
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