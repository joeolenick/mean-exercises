function Wall(id){
    //creating the HTML entity
    obj = document.getElementById(id);
    obj.className = "wall square";

    //creating the Wall object
    this.div = document.getElementById(id);
    this.className = "wall square";
    this.type = "Wall";
    this.isWall = true;
}

Wall.createWalls = function(wallArray) {
    var allWalls = new Array();
    for(var x = 0; x < wallArray.length; x++){
        var stuff = new Wall(wallArray[x]);
        allWalls.push(stuff);
    }
    return allWalls;
}