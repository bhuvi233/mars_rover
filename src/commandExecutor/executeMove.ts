import { Direction } from '../direction';
import { Rover } from "../rover";

export class ExecuteMove {

    newX = (currentRover: Rover): number => {
        const stepsMap = this.xSteps();
        const step = stepsMap.get(currentRover.facing);
        return step ? currentRover.position.x + step: currentRover.position.x;
    }

    newY = (currentRover: Rover): number => {
        const stepsMap = this.ySteps();
        const step = stepsMap.get(currentRover.facing);
        return step ? currentRover.position.y + step: currentRover.position.y;
    }

    xSteps(): Map<Direction, number> {
        const steps = new Map<Direction, number>();

        steps.set(Direction.N, 0);
        steps.set(Direction.E, 1);
        steps.set(Direction.W, -1);
        steps.set(Direction.S, 0);

        return steps;
    }

    ySteps(): Map<Direction, number> {
        const steps = new Map<Direction, number>();

        steps.set(Direction.N, 1);
        steps.set(Direction.E, 0);
        steps.set(Direction.W, 0);
        steps.set(Direction.S, -1);

        return steps;
    }

}