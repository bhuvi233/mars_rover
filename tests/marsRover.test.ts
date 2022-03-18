import { Direction } from '../src/direction';
import { Plateau } from '../src/plateau';

describe(`moveRoverOnPlateau`, () => {
    it.only.each([
        ['1 2 N', 'LMLMLMLMM', 1, 3,'N'],
        ['3 3 E', 'MMRMMRMRRM', 5, 1,'E'],
        ['3 3 E', 'MMRMMRMRRMM', 5, 1,'E'],
        ['0 0 N', 'MMMMMMM', 0, 5,'N'],
        ['0 0 N', 'LLLL',0, 0, 'N']

    ])('should execute the given moves and update its position and any move is leading out of the plateau, it should be stopped', (startPoint, moves, expectedX, expectedY, expectedFacing) => {
        const myPlateau = new Plateau(5, 5);
        myPlateau.rover.setRoverPosition(startPoint, 5, 5);
        myPlateau.setRoverMoves(moves);
        myPlateau.moveRoverOnPlateau();

        expect(myPlateau.rover.position.x).toBe(expectedX);
        expect(myPlateau.rover.position.y).toBe(expectedY);
        expect(Direction[myPlateau.rover.facing]).toBe(expectedFacing);

    });
})