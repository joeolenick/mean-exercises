Weekend Exercise 3 -- Maze Game
================================

The exercise for this weekend is to create a first-person game where the user
controls a little blue circle that can navigate through a maze of walls which it
cannot cross, use a portal to get to the other side of the screen, be killed by
'danger blocks', and ultimately reach an endpoint at which the user wins the
game. No big deal, right? So let's get started!!


In cloning the repo, you should have an index.html, some javascript files, and
a style.css. You won't need to worry about CSS. We will have to modify the
index.html just a bit, but most of this lab will be JavaScript.


<h2>Step One - Hooking Things Up</h2>
This step should be quite simple for you. All you need to do is link the
JavaScript into the index.html file using the `<script>` tag. Link the
JavaScript files in the following order:
- lib.js
- player.js
- wall.js
- init.js
- statusCheck.js
- keyboard.js

Because we make use of global variables, linking them in a different order may
cause errors. You can verify that they were linked correctly by making sure
there's no errors in the console. You can also click on the "networks" tab in
the Chrome dev tools and check that each file was loaded in.


<h2>Step Two - The Arrow Keys</h2>
Games are typically played with keyboard keys, especially arrow keys. If our
game is going to beat Call of Duty, we probably should utilize arrows as well.
Pop open keyboard.js.