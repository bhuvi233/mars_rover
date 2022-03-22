import { Rover } from "./rover";
import { Direction } from "./direction";
import { print } from './console';
import { ExecuteCommand } from './commandExecutor/executeCommand';

export class Plateau {
    x: number;
    y: number;
    rover: Rover;
    moves: string;
    private executeCommand: ExecuteCommand;

    constructor (x: number, y: number){
        this.x = x;
        this.y = y;
        this.rover = new Rover(0,0);
        this.moves = "";
        this.executeCommand = new ExecuteCommand();
        print(`Plateau size (x,y) = (${this.x}, ${this.y})`)
    }

    /* Validates and updates rover movement instructions */
    setRoverMoves = (moves: string): boolean => {
        if (/[^LRM]/g.test(moves)) return false;

        this.moves = moves;
        return true;
    }

    /* Based on the instruction Rover is moved around the Plateau. */
    
    moveRoverOnPlateau = (): void =>  {
        this.moves.split("").every(move => {
            switch(move){
                case 'L':
                case 'R':
                    return (this.executeCommand.executeTurn(this.rover, move));
                case 'M':
                    return (this.executeCommand.executeMove(this.rover, this.x, this.y));
                default:
                    throw "Invalid Move";
            }
        });
        print(`new position = ${this.rover.position.x} ${this.rover.position.y} ${Direction[this.rover.facing]}`);
    }

}