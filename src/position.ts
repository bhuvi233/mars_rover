import { Direction } from "./direction";

export class Position{
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    updatePosition(newposition: Position) {
        this.x = newposition.x;
        this.y = newposition.y;
    }
}