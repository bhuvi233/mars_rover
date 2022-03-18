import { Direction } from "./direction";
import { Position } from "./position";

export class Rover {
    position: Position;
    facing: Direction;

    constructor(x: number, y: number) {
        this.position = new Position(x,y);
        this.facing = Direction.N;
    }
    
    /* Validate the given startPoint by the user and sets the position of the rover accordingly */

    setRoverPosition = (input: string, plateauX: number, plateauY: number): boolean => {
        let [x, y, facing]: string[] = input.split(" ");

        if (x === undefined || y === undefined || facing === undefined) return false;
        if (facing.length > 1 || /[^NSWE]/g.test(facing)) return false;
        if (parseInt(x) > plateauX || parseInt(y) > plateauY) return false;

        this.position.x = parseInt(x);
        this.position.y = parseInt(y);
        this.facing = Direction[facing as keyof typeof Direction];
        return true;
    }

    /* Rover position is updated with given new position */
    
    updateRoverPositionAndFacing = (newposition: Position, facing: Direction): void => {
        this.position.updatePosition(newposition);
        this.facing = facing;
    }
    
}
