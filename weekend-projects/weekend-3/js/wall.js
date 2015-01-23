/*************************************************************************
 * Copyright Coding Campus 2015
 * wall.js
 *************************************************************************
 *
 * @description
 * Definition for a Wall object.
 * 
 * @author
 * Derek Argueta
 *
 * @date
 * 5/29/2014
 *
 *************************************************************************/

function Wall(id){
    //creating the HTML entity
    /*      STEP 6
     * Assign obj to the document element that has the ID of the parameter 'id'.
     * Then give that element the classes 'wall' and 'square'.
     */
    var obj;

    //creating the Wall object
    this.style = obj.style;
    this.className = "wall square";
    this.type = "Wall";
    this.isWall = true;
}

Wall.createWalls = function(wallArray) {
    /*      STEP 6
     * Using the array of ID's that are passed in as the parameter, create an 
     * array of new Wall objects built on those Id's. Then replace [] with your
     * new array in the return statement.
     *
     * An example of creating a new Wall object would be 
     * var test = new Wall(3);
     * which would create a Wall object on the div that has an ID of 3.
     */
    return [];
}