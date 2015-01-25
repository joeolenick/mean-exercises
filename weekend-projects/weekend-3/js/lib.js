/*************************************************************************
 * Copyright Coding Campus 2015
 *
 *************************************************************************
 *
 * @description
 * A small library of animation functions
 *
 * @author
 * Derek Argueta
 *
 * @date
 * 1/22/2015
 *
 *************************************************************************/

/**
Make an object appear to be animating to the left by moving it 10 pixels to the
left at an interval of 10 milliseconds
*/
function animateLeftHelper(obj, from, to, callback) {
    if(from <= to - 9) {
        callback();
        return;
    } else {
        obj.style.left = from + 'px';
        setTimeout(function() {
            animateLeftHelper(obj, from - 10, to, callback);
        }, 10);
    }
}

function animateLeft(obj, callback) {
    var from = parseInt(obj.style.left, 10);
    var to = from - 50;
    animateLeftHelper(obj, from, to, callback);
}


/**
Make an object appear to be animating to the right by moving it 10 pixels to the
left at an interval of 10 milliseconds
*/
function animateRightHelper(obj, from, to, callback) {
    if(from >= to + 9) {
        callback();
        return;
    } else {
        obj.style.left = from + 'px';
        setTimeout(function() {
            animateRightHelper(obj, from + 10, to, callback);
        }, 10);
    }

}

function animateRight(obj, callback) {
    var from = parseInt(obj.style.left, 10);
    var to = from + 50;
    animateRightHelper(obj, from, to, callback);
}


/**
Make an object appear to be animating up by moving it 10 pixels to the
left at an interval of 10 milliseconds
*/
function animateUpHelper(obj, from, to, callback) {
    if(from <= to - 9) {
        callback();
        return;
    } else {
        var box = obj;
        box.style.top = from + 'px';
        setTimeout(function() {
            animateUpHelper(obj, from - 10, to, callback);
        }, 10);
    }
}

function animateUp(obj, callback) {
    var from = parseInt(obj.style.top, 10);
    var to = from - 50;
    animateUpHelper(obj, from, to, callback);
}


/**
Make an object appear to be animating down by moving it 10 pixels to the
left at an interval of 10 milliseconds
*/
function animateDownHelper(obj, from, to, callback) {
    if(from >= to + 9) {
        callback();
        return;
    } else {
        obj.style.top = from + 'px';
        setTimeout(function() {
            animateDownHelper(obj, from + 10, to, callback);
        }, 10);
    }
}

function animateDown(obj, callback) {
    var from = parseInt(obj.style.top, 10);
    var to = from + 50;
    animateDownHelper(obj, from, to, callback);
}
