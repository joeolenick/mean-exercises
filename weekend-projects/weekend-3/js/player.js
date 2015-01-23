/*************************************************************************
 * Copyright Coding Campus 2015
 * player.js
 *************************************************************************
 *
 * @description
 * Definition for a player object.
 * 
 * @author
 * Derek Argueta
 *
 * @date
 * 5/29/2014
 *
 *************************************************************************/

function Player() {

    /*
     * This variable is used to keep track of whether or not the player is
     * animating. The reason for this is to prevent the player from starting a
     * movement or animation while an animation is already going.
     */
    animating = false;

    self = document.getElementById('block');

    var moveCallback = function() {
        animating = false;
        /*      STEP 4
         *  Check the different statuses of the player after every movement animation.
         */
    }

    //function to move the player's block one space to the left
    Player.prototype.moveLeft = function() {

        var left = self.style.left;
        var top = self.style.top;

        var wallPresent = false;
        /*      STEP 6
         * Add code to check if there is a wall to the player's left. If so,
         * set wallPresent to false so that the if-statement below will not
         * execute and thus not move the player.
         */
        
        if(parseInt(left, 10) > parseInt("0px", 10) && !wallPresent) {

            if(!animating){
                animating = true;
                /*      STEP 3
                 * Use the animation functions in lib.js to move the player to
                 * the left.
                 */
            }
        }
	};

	// funtion to move the player's block on space to the right
	Player.prototype.moveRight = function() {

        var left = self.style.left;
        var top = self.style.top;

        var wallPresent = false;
        /*      STEP 6
         * Add code to check if there is a wall to the player's right. If so,
         * set wallPresent to false so that the if-statement below will not
         * execute and thus not move the player.
         */

        if(parseInt(left, 10) < parseInt("850px", 10) && !wallPresent) {

            if(!animating){
                animating = true;
                /*      STEP 3
                 * Use the animation functions in lib.js to move the player to
                 * the right.
                 */
            }
        }
	};

	//function to move the player's block one space up
	Player.prototype.moveUp = function() {

        var left = self.style.left;
        var top = self.style.top;

        var wallPresent = false;
        /*      STEP 6
         * Add code to check if there is a wall above the player. If so,
         * set wallPresent to false so that the if-statement below will not
         * execute and thus not move the player.
         */

        if(parseInt(top, 10) > parseInt("0px", 10) && !wallPresent) {

            if(!animating){
                animating = true;
                /*      STEP 3
                 * Use the animation functions in lib.js to move the player up.
                 */
            }
		}
	};

	// function to move the player's block one space down
	Player.prototype.moveDown = function() {

        var left = self.style.left;
        var top = self.style.top;

        var wallPresent = false;
        /*      STEP 6
         * Add code to check if there is a wall below the player. If so,
         * set wallPresent to false so that the if-statement below will not
         * execute and thus not move the player.
         */

        if(parseInt(top, 10) < parseInt("450px", 10) && !wallPresent) {

            if(!animating){
                animating = true;
                /*      STEP 3
                 * Use the animation functions in lib.js to move the player down.
                 */
            }
        }
	};
}