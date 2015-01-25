/*************************************************************************
 * Copyright Coding Campus 2015
 * init.js
 *************************************************************************
 *
 * @description
 * Initial set-up code.
 *
 * @author
 * Derek Argueta
 *
 * @date
 * 5/29/2014
 *
 *************************************************************************/

/*          STEP 3
 *  ~~~~~ A D D   C O D E    H E R E ~~~~~~~
 * Instantiate a new player object here.
 */
var player = new Player();

// the number of tiles in the game
var CAGE_SIZE = 180;

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

createBackground();
createPortal(portals[0], portals[1]);


var wallObjs = Wall.createWalls(wallIds);



// This function creates the grid of grey blocks that serve as the backdrop and
// can be manipulated by turning them into danger blocks, portals, etc.
function createBackground() {
     /*          STEP 5
     *  ~~~~~ A D D   C O D E    H E R E ~~~~~~~
     * Write code that generates 180 divs that act as a manipulatable background
     */
	var topHolder = -50
	var leftHolder = 0

	for (i = 0; i < CAGE_SIZE; i++){
			var background = document.createElement("div")
			background.className = "empty square";
			background.id = i;
			document.getElementById('cage').appendChild(background);


			if (i % 18 === 0){

				topHolder += 50;
				leftHolder = 0;

		}	else{

				leftHolder += 50;

		}

		background.style.top = topHolder + "px";
		background.style.left = leftHolder + "px";



	}

}

// This function creates a random danger block on a valid location on the grid.
// Blocks can be made where the player is
function randomDanger() {

	/*          STEP 8
     *  ~~~~~ A D D   C O D E    H E R E ~~~~~~~
     * Write code that generates a single random danger square that is not on top
     * of an existing danger square, a portal, or a wall.
     */
}

function createPortal(portal1, portal2) {

	/*          STEP 7
     *  ~~~~~ A D D   C O D E    H E R E ~~~~~~~
     * Create portal DOM elements and add to portalIds array
     */
}
