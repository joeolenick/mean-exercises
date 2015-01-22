/*************************************************************************
 * Copyright Coding Campus 2015
 * keyboard.js
 *************************************************************************
 *
 * @description
 * Handles key-press events and calls the appropriate function for moving the
 * player accordingly.
 * 
 * @author
 * Derek Argueta
 *
 * @date
 * 5/29/2014
 *
 *************************************************************************/


/**
 * Here we redefine what the browser should do when the user presses a keyboard
 * key down.
 *
 * @param e  -  e is the event object itself. We use it to prevent what the
 *              browser would normally do, such as scrolling up/down, and then
 *              perform any custom actions we actually want to do.
 */
document.onkeydown = function(e) {

    //generate a random danger block whenever an arrow key was pressed and it is
    // the 3rd turn

    keyCodeIsInRange = e.keyCode >= '37' && e.keyCode <= '40';
	if(keyCodeIsInRange && turnNumber % redBlockFrequency == 0) {

		randomDanger();
	}

    // Most browsers pass in the key-press event as the parameter, except for
    // Microsoft. Microsoft puts it in 'window.event'. We need this line so that
    // if the user is using Internet Explorer for some terrible reason, they can
    // still play our game.
    e = e || window.event;

    var block = document.getElementById("block");
    var left = block.style.left;
    var top = block.style.top;

    /*
     * The process for moving involves overriding the browser's default arrow 
     * key commands (e.preventDefault()), and then calling our custom actions to
     * occur
     *
     * e.keyCode gives us the assigned number value of the key that was pressed
     */
    switch(e.keyCode) {

        // Left arrow was pressed
        case 37:
            e.preventDefault();
            player.moveLeft(left, top);
            break;

        // Up arrow was pressed
        case 38:
            e.preventDefault();
            player.moveUp(left, top);
            break;

        // Right arrow was pressed
        case 39:
            e.preventDefault();
            player.moveRight(left, top);
            break;

        // Down arrow was pressed
        case 40:
            e.preventDefault();
            player.moveDown(left, top);
            break;
    }
}
