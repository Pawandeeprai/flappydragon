# Flappy Dragon

### Overview

- I wanted to work with canvas on a simple game so I chose to make a variation of Flappy Bird.

### Instructions

**Objective:** The point of the game is to guide your dragon around the bricks

- avoid the flying bricks
- press space bar for a burst of acceleration upwards


### Technical details

**tools:** this game uses the basic canvas and javascript
- I wanted to spend some time to figure out collision detection on canvas.
- The game is pretty simple.  The Dragon has a stationary x coordinate and has a y coordinate which takes a dy causing it to fall to the bottom of the frame. Pressing the space bar changes dy to push the dragon upwards and to make the transition smoother I have the dy decline back to the starting dy.
- To give the dragon the illusion of moving forward I move the blocks horizontally.
- The game over condition checks to see if the hit box of the dragon is taking up the same space as the hit box for the floating bricks.
