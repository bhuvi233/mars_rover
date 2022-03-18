import { clear, print, askQuestion} from './console';
import readlineSync = require('readline-sync');
import { Plateau } from './plateau';

global.MaxUpperRight = {X: 5,Y: 5};

export class MarsRover {
    continueRover: boolean | string = true;

    constructor () {
        clear(false);
        print('--------------------------');
        print('| Welcome to Mars Rover! |');
        print('--------------------------');

        askQuestion(`What's is the upper Right corner co-ordinate? (x y) : `, this.updatePlateauSize);
    }

    /* Updates the size of the Plateau checking against the Default Max Coordinates */
    
    updatePlateauSize =  (coordinates: string): void => {
        let [x , y] : number[] = coordinates.split(" ").map(ele => parseInt(ele));
        
        if (x > MaxUpperRight.X || x <= 0 || x === undefined) x = MaxUpperRight.X;
        if (y > MaxUpperRight.Y || y <= 0 || y === undefined) y = MaxUpperRight.Y;

        const myPlateau = new Plateau(x, y);

        while(this.continueRover === true) {

            this.getRoverPosition(myPlateau);
            
            this.getRoverMoves(myPlateau);

            myPlateau.moveRoverOnPlateau();
            
            this.continueRover = readlineSync.keyInYN(`Do you want to continue : ` );
        }
        
    }

    /* Takes the rover current position from the console and validates it. 
    If invalid, prompts again */

    getRoverPosition = (plateau: Plateau): void => {
        let status = true;
        do{
            let userInput = readlineSync.question(`What's the rover starting position : ` );
            print(userInput);

            status = plateau.rover.setRoverPosition(userInput, plateau.x, plateau.y);
            if (!status) print(`Invalid Input. Try again.`);

        } while(!status);
    }

    /* Takes the rover movement Instruction from the console and validates it. 
    If invalid, prompts again */

    getRoverMoves = (plateau: Plateau): void => {
        let status = true;
        do{
            let userInput = readlineSync.question(`What are the rover Moves : ` );
            print(userInput);

            status = plateau.setRoverMoves(userInput);
        } while(!status);
    }
}

const marsRover = new MarsRover();