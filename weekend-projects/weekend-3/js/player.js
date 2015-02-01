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
    var self = document.getElementById('block');

    animating = false;

    var moveCallback = function() {
        animating = false;
        /*      STEP 4
        *  Check the different statuses of the player after every movement animation.
        */
        checkStatuses();
    };

//function to move the player's block one space to the left
Player.prototype.moveLeft = function() {

        var self = document.getElementById('block');

        var left = self.style.left;
        var top = self.style.top;

        var wallPresent = false;
        /*      STEP 6
        * Add code to check if there is a wall to the player's left. If so,
        * set wallPresent to false so that the if-statement below will not
        * execute and thus not move the player.
        */
        for(var i = 0; i < wallObjs.length; i++) {
           var wall = wallObjs[i];
           if (self.style.left === wall.style.left
                 &&
               self.style.top === wall.style.top){
             wallPresent = true;
          }

        }


        if(parseInt(left, 10) > parseInt("0px", 10) && !wallPresent) {

            if(!animating){
                animating = true;
                /*      STEP 3
                * Use the animation functions in lib.js to move the player to
                * the left.
                */
                animateLeft(self, moveCallback);

            }
        }
};

// funtion to move the player's block on space to the right
Player.prototype.moveRight = function() {

        var self = document.getElementById('block');

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
                animateRight(self, moveCallback);
            }
        }
};

//function to move the player's block one space up
Player.prototype.moveUp = function() {

        var self = document.getElementById('block');

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
                animateUp(self, moveCallback);
            }
}
};

// function to move the player's block one space down
Player.prototype.moveDown = function() {

        var self = document.getElementById('block');

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
                animateDown(self, moveCallback);
            }
        }
};
}
