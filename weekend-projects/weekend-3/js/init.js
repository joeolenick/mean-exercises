// Create a new player object
var player = new Player();

// This array holds the IDs of all the red blocks that kill you
var dangerous = new Array();


var ANIMATION_TIME = 100;


// This array holds the IDs of all the portals
var portalIds = new Array();

// Turn count used to spawn the red blocks every 3 turns
var turnNumber = 0;

// Determines how often the red blocks will appear.
var redBlockFrequency = 3;


/**
* This defines how the level looks.
* 
* - the int array for 'walls' is a list containing the ID's of the background
* squares that should be turned into walls.
*
* - 'portals' gives an array describing where the two portals should appear.
*/
var levelDefinition = {
	'walls': [7,18,25,19,31,49,37,38,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,147,129,111,112,113,114,115,116,117,118,119,120,165],
	'portals': [51, 72]
};
var wallIds = levelDefinition['walls'];
var portals = levelDefinition['portals'];

createBack();
createPortal(portals[0], portals[1]);


var wallObjs = Wall.createWalls(wallIds);



// This function creates the grid of grey blocks that serve as the backdrop and 
// can be manipulated by turning them into danger blocks, portals, etc.
function createBack(){

	var t = 0;
	var left = 0;

	var numID = 0;
	for(var x = 1; x < 181; x++) {

		//create the element, style it, and add it in
		var div = document.createElement("div");
		div.className = "empty square";
		div.id = numID;
		div.style.top = t + 'px';
		div.style.left = left + 'px';
		div.type = "Nothing";
		$("#cage").append(div);

		if(x % 18 == 0){

			t += 50;
			left = 0;

		} else {

			left += 50;
		}

		numID++;
	}
}

// This function creates a random danger block on a valid location on the grid. 
// Blocks can be made where the player is
function randomDanger(){

	//acquire a random number within the grid
	var rand = Math.floor((Math.random() * 140) + 1);
	while(rand == 0 ||
		dangerous.indexOf(rand) > 0 ||
		portalIds.indexOf(rand) > 0 ||
		wallIds.indexOf(rand) > 0) {

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
	portalIds.push(portal1);
	elem2.className = "portal square p2";
	portalIds.push(portal2);

	elem1.type = "Portal";
	elem2.type = "Portal";
}