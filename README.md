Kata - Mars Rover
Introduction
This repo is designed to enable you to instruct the Mars Rover to move around a defined plateau.

Assumption
Max upper Right coordinates as (5 , 5). Plateau, Rover and Position are class Objects.

Key Features 

🔭  A service to take input from the console. Takes following input
    1. The size of the plateau => 
        • Input is validated, if input is greater than Max (5,5) or less than 0 or not defined, the set to default Max value.
        • New instance of Plateau is created and A rover will be set at default position (0, 0 , 'N') by default
          
    2. Start Point of the rover => 
        • Input is validated for out of boundary(plateau) coordinates and valid direction string. If invalid prompts the user to input valid values.  
        • The rover position will be updated to the given starting point.
    
    3. Movement instruction for the rover =>
        • Input is validated for non valid instructions(other than N,W,S,E)

🔭  A service to move the rover as per the instruction received
        For each of the instruction, the rover is moved. If the instruction leads to out of the plateau, rover is stopped at it's last position.

Pre-Requisites

You can run the code in the terminal by running:

npm install

npm start

To run the test cases:

npm test

Improvements
    • Multiple rovers in a single plateau and checking for collision.