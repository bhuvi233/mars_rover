import { Plateau } from '../src/plateau';
import { MarsRover } from '../src/marsRover';
jest.mock('../src/plateau');

beforeEach(()=> {
    jest.resetAllMocks();
    jest.dontMock('../src/plateau');
});

describe('updatePlateauSize', () => {
    it.each([
        ['5 5', 5, 5],
        ['4 4', 4, 4],
        ['6 6', 5, 5],
        ['0 0', 5, 5],
        ['3', 3, 5]
    ])('should take the Upper Right corner correctly, if the input value is greater than default, set the value to default', 
        (givenString, ExpectedX, ExpectedY) => {
        
        const marsRover = new MarsRover();
        marsRover.continueRover = false;

        marsRover.updatePlateauSize(givenString);
        
        expect(Plateau).toHaveBeenCalledTimes(1);
        expect(Plateau).toHaveBeenCalledWith(ExpectedX, ExpectedY);
        
    });
})