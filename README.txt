
"Detective Thesaurus Rex is on the hunt for a good speller, but he’s got a few lexicon artists on his trail. Can you help him find the real spellers amongst the fake?
Click on the criminal with the correct spelling of the word. You got three chances to win the game. Good luck!""

What You Need:

Images: Con Artist (Silhouettes of Men in Trench coats), Police Line-Up Backdrop, Dinosaur
Controls:
Timer: The timer should countdown until it either runs out or the player makes a choice
Con Artists: When the game starts, a new line up should move onto the screen; After the player clicks the right answer, a new line up should move onto the screen
Strikes:  Every time a player gets an answer wrong, a strike should disappear. The game should stop running after the third strike.
Line-Up: should show up every time a timer is reset. A set of words should roll up on the screen.
Score: 50 points are added or subtracted to this, depending on if answers are right or wrong
Pause: Stops The Game
Quit: brings redirects to opening screen
Opening Screen: Title, Play, Directions
Closing Screen: Play Again (same as Play), Score, Message
Mouse: (Mouse 1D, Mouse Functions (?))

(These are the main functions of the game (Most things are omitted due to time constraints).

Method:
Show Opening Screen
After Play is clicked: Pause, Help, Strikes and Timer are on screen (Must not start right away)
Call Line-Up
After Line-Up stops, each should reflect an answer and the Timer should start
When the mouse scrolls over each Con Artists, it should glow blue;
When the mouse clicks an answer, it should remain glowing and Timer stops
After a second, the correct answer should glow green; the wrong answers should glow red
If the correct answer is selected, screen should output message, “Good Job!”
Add 50 points to Score
The Line-Up walk away, and a new Line- Up rolls in.
The timer resets and a new level initiates
If a Wrong Answer is selected, screen should output message, “Incorrect”
Subtract 50 points from Score
A Strike is taken from the list
When all three strikes are gone, initiate Closing Screen
Closing Screen
If user loses, show Score, Play Again (same as Play), Directions
Screen should output, “Better Luck next Time Kid”
If user wins, show Score, Play Again (same as Play), Directions
Screen should output, You’ve Got a Good Eye Kid!
