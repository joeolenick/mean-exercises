/*************************************************************************
 * Copyright Coding Campus 2015
 * statusCheck.js
 *************************************************************************
 *
 * @description
 * A collection of functions that checks on various statuses of the player,
 * such as whether the player has won/lost or stepped in a portal.
 * 
 * @author
 * Derek Argueta
 *
 * @date
 * 5/29/2014
 *
 *************************************************************************/

function checkStatuses() {

    /*
     * Checks if the player hit a danger block. Gives alert message and refreshes 
     * the page if so
     */
    function checkLoss() {
        /*
         *       ~~~~~ A D D   C O D E    H E R E ~~~~~~~
         * Iterate through every danger block and check if it occupies the same
         * space as the player block. If so, make a pop-up (alert) indicating 
         * the player lost, and refresh the browser so the game restarts
         */
    }

    /*
     * Checks if the player reached the golden block. Gives alert message and 
     * refreshes the page if so
     */
    function checkWin(){
        /*          STEP 4
         *       ~~~~~ A D D   C O D E    H E R E ~~~~~~~
         * check if player is in the same spot as the victory (yellow) block If 
         * so, make a pop-up (alert) indicating the player won, and refresh the
         * browser so the game restarts.
         */
    }

    /*
     * Function that utilizes the inPortal() function to move the player object to
     * the other portal if it currently is in one.
     */
    function checkPortal(){
        var portalIndex = inPortal(); // will be -1, 0, or 1.
        if(portalIndex != -1){
            var block = document.getElementById("block");

            /*          STEP 7
             *  ~~~~~ A D D   C O D E    H E R E ~~~~~~~
             * if the block is in one portal, "move" the block to the other 
             * portal by modifying the block's 'top' and 'left' values.
             */
        }
    }

    /*
     * Helper function that determines if the player object is currently inside 
     * of a portal.
     */
    function inPortal(){
        for(var x = 0; x < portals.length; x++){
            
            /*          STEP 7
             *  ~~~~~ A D D   C O D E    H E R E ~~~~~~~
             * check if the player's circle is in the same location as a portal.
             * if so, return that portal. i.e. return portal[x];
             */
        }

        // If no portals match location, then -1 will be returned.
        return -1;
    }

    // run all the status checks and increment the turn number
    checkLoss();
    checkWin();
    checkPortal();
    turnNumber++;
}
