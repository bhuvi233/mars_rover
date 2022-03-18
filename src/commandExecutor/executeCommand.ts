import { Position } from "../position";
import { Rover } from "../rover";
import { ExecuteMove } from "./executeMove";
import { ExecuteTurn } from "./executeTurn";
import { print } from '../console';
import { Direction } from '../direction';

export class ExecuteCommand {

    private findNewPosition: ExecuteMove = new ExecuteMove();
    private findNewFacing: ExecuteTurn = new ExecuteTurn();

    /* For the given Position, moves the rover by one step.
    If move is leading out of plateau, movement is not done. */

    executeMove = (rover: Rover, plateauX: number, plateauY: number): boolean => {
    
        const newX = this.findNewPosition.newX(rover);
        const newY = this.findNewPosition.newY(rover);
        if(newX > plateauX || newY > plateauY){
            print(`Commands leads out of the Plateau, so stopped !!!`);
            return false;
        }

        const newPosition = new Position(newX, newY);
        rover.updateRoverPositionAndFacing(newPosition, rover.facing);
        return true;
    }

    /* Rover is rotated 90 degress Left or Right */
    
    executeTurn = (rover: Rover, turn: string): boolean => {
        const newfacing = (turn == "L") ? this.findNewFacing.turnLeft(rover.facing) : 
                                    this.findNewFacing.turnRight(rover.facing);
        rover.updateRoverPositionAndFacing(rover.position, newfacing);
        return true;
    }
    
}