import { Direction } from "../direction";

export class ExecuteTurn {

    turnLeft = (currentFacing: Direction): Direction => {
        const directionMap = new Map <Direction, Direction> ();

        directionMap.set(Direction.N , Direction.W);
        directionMap.set(Direction.S , Direction.E);
        directionMap.set(Direction.W , Direction.S);
        directionMap.set(Direction.E , Direction.N);

        let newfacing = directionMap.get(currentFacing);
        return (newfacing === undefined) ? currentFacing : newfacing;
    }
    
    turnRight = (currentFacing: Direction): Direction => {
        const directionMap = new Map <Direction, Direction> ();
    
        directionMap.set(Direction.N , Direction.E);
        directionMap.set(Direction.S , Direction.W);
        directionMap.set(Direction.W , Direction.N);
        directionMap.set(Direction.E , Direction.S);
    
        let newfacing = directionMap.get(currentFacing);
        return (newfacing === undefined) ? currentFacing : newfacing;
    }
}
