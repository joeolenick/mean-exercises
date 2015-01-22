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

    /* Most browsers pass in the key-press event as the parameter, except for
     * Microsoft. Microsoft is awkward and puts it in 'window.event'. We need 
     * this line so that if the user is using Internet Explorer for some 
     * terrible reason, they can still play our epic game.
     *
     * What this line means is that if the event is in 'e', then great use it.
     * Otherwise grab it from window.event.
     */
    e = e || window.event;

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
            break;

        // Up arrow was pressed
        case 38:
            break;

        // Right arrow was pressed
        case 39:
            break;

        // Down arrow was pressed
        case 40:
            break;
    }
}
