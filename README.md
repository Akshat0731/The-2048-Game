# 2048 Game

A browser-based implementation of the classic 2048 puzzle game using HTML, CSS, and JavaScript.

## Features

* 4 × 4 game board
* Start the game using the keyboard
* Move tiles using **W, A, S, D**
* Automatically generates new `2` or `4` tiles
* Combines tiles with the same value
* Score calculation based on merged tiles
* High score tracking
* Game Over detection
* Restart the game after Game Over
* Supports tiles beyond `8192` with a custom high-value style

## How to Play

* Press any key to start the game.
* Use:

  * **W** → Move tiles upward
  * **A** → Move tiles left
  * **S** → Move tiles downward
  * **D** → Move tiles right
* When two tiles with the same value collide, they merge into one tile with double the value.
* Each merge increases the score.
* The game ends when the board is full and no more moves or merges are possible.

## Technologies Used

* HTML
* CSS
* JavaScript
* DOM Manipulation
* JavaScript Event Listeners

## Game Logic

The game maintains the current state of every tile and updates the board whenever the player makes a move.

After each valid movement:

1. Tiles are moved toward the selected direction.
2. Equal adjacent tiles are merged.
3. The score is updated.
4. A new tile is generated.
5. The game checks whether any valid moves remain.

The game also keeps track of the highest score achieved across multiple rounds.

## Controls

| Key | Action     |
| --- | ---------- |
| W   | Move Up    |
| A   | Move Left  |
| S   | Move Down  |
| D   | Move Right |

## Preview

The game runs directly in the browser and provides an interactive 2048-style puzzle experience.
