import { Direction } from '../src/direction';
import { Rover } from '../src/rover';
import { Plateau } from '../src/plateau';
import { MarsRover } from '../src/marsRover';

describe('setRoverPosition', () => {

    it.each([
        ['1 2 N', 1, 2, 'N'],
        ['3 3 E', 3, 3, 'E']
    ])('should start from a given initial point', (givenString, expectedX, expectedY, expectedDirec) => {
        const rover = new Rover(0,0);
        
        rover.setRoverPosition(givenString, MaxUpperRight.X, MaxUpperRight.Y);

        expect(rover.position.x).toBe(expectedX);
        expect(rover.position.y).toBe(expectedY);
        expect(Direction[rover.facing]).toBe(expectedDirec);
        
    });

    it.each([
        ['1 2N', false],
        ['3 3 Q', false],
        ['3 3 NW', false],
        ['3 3 NWSE', false],
        ['3 3 n', false],
        ['3 3 N S', true],
        ['3 3 W', true]
    ])('should check for invalid string and prompt for the input again', (givenString, expectedError) => {
        const rover = new Rover(0,0);

        expect(rover.setRoverPosition(givenString, MaxUpperRight.X, MaxUpperRight.Y)).toBe(expectedError);
        
    });

    it.each([
        [5, 5, '1 2 N', 1, 2, 'N'],
        [4, 4, '3 3 E', 3, 3, 'E'],
        [4, 4, '5 3 E', 0, 0, 'N'],
    ])('should not take the coordinates out of the plateau', (plateauX, plateauY, startPoint, expectedX, expectedY, expectedDirec) => {
        const marRover = new MarsRover();
        marRover.continueRover = false;

        const plateau = new Plateau(plateauX, plateauY);
        
        plateau.rover.setRoverPosition(startPoint, plateauX, plateauY);

        expect(plateau.rover.position.x).toBe(expectedX);
        expect(plateau.rover.position.y).toBe(expectedY);
        expect(Direction[plateau.rover.facing]).toBe(expectedDirec);
        
    });
})

describe('setRoverMoves', () => {
    it.each([
        ['LMLMRM', true],
        ['ML', true],
        ['M', true],
        ['m', false],
        ['LQ', false],
        ['Lqm', false]
    ])('should read the moves correctly ', (moves, expectedStatus) => {
        const plateau = new Plateau(5,5);

        expect(plateau.setRoverMoves(moves)).toBe(expectedStatus);
    });
})
