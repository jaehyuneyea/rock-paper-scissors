# rock-paper-scissors
<p>In this project I will be using vanilla JavaScript to create a game that challenges the game in a classic game of rock paper scissors. For now, the game will be done purely in the console, however I will come back to it later to add GUI elements.</p>

<p>3/8/2022: Finished the console functionality of the game! The game is played to be 5 rounds- where the user is prompted to choose rock paper or scissors. Any input other than that prompts the user to choose a proper value. The CPU will then select its choice and compare it to see who the winner is. A series of if statements, switch statements were used to create the structure of this game.</p>

<div>
  <p>3/12 2022: Finished the UI representation of the game at its very core in the UI branch.</p>
  <ul>
    <li>Three buttons that represent rock paper and scissors that execute a round of the game with the cpu</li>
    <li>Result of each round is calculated and determined to update the score</li>
    <li>Resets the game and displays a game over message upon either player reaching a score of 5</li>
  </ul>

  <strong>Some thoughts that I have after implementation:</strong>
  <p>I'd like to add a more immersive experience to the round rather than displaying the rounds instantly- have the round occur a bit more
  slowly to build more suspense, display what the cpu has actually chosen, etc.</p>
  <p>I'm mostly happy with the way I've structured the code. It's much more cleaner than the GUI experience I've had with building my Java project
  and I've done my best to reduce repeated code. One thing that I do note is that my way of determining the winner (endGame and update function) is not very future friendly. Since the function looks for the word 'You win' as the first two words its argument, if I wanted to the message later on, it's something that I would also have to reflect the changes to in other parts of the code.</p>
  <p>Time to add style!</p>
</div>
<div>
<p>3/14 2022: Finished styling the game! The additions I made are:</p>
  <ul>
    <li>Image buttons that react and grow on hover</li>
    <li>Font and background color additions</li>
    <li>Flexbox alignment and centering properties to space out elements</li>
    <li>Buttons and other parts of the page grow and shrink according to the size of the window</li>
  </ul>
<p>Some thing that I want to try and do is immitate a button press upon the mouse being pressed down.</p>
</div>

<p>For the most part, this project is finished. Some trouble that I had while I had making this and what I learned from it were:</p>
<ul>
  <li>Anonymous functions. I'm still working to understand them fully but initially I had no idea that why I needed them for eventlisteners and why they wouldn't take a function that took parameters.</li>
  <li>Aligning the score. Initially when styling the score at the top they stayed glued to eachother despite applying flex. I fixed this by setting width to 100% to fill the entire container.</li>
  <li>Aligning the images and their right border. The images I downloaded all came in different sizes and slightly different from the other. It was hard to try and make all of the identical using CSS- I didn't know how to have the image while cropping some contents of the image- so I looked it up and came up with a solution of using object-fit: none.</li>
</ul>