import {Car} from "./Car";
import {Builder} from "./Builder";


export class CarBuilder implements Builder{
    private car = new Car()

    buildDriver(value: string): Builder {
        this.car.driver = value
        return this;
    }

    buildHeight(value: number): Builder {
        this.car.height = value
        return this;
    }

    buildMark(value: string): Builder {
        this.car.mark = value
        return this;
    }

    buildPrice(value: number): Builder {
        this.car.price = value
        return this;
    }

    buildWeight(value: number): Builder {
        this.car.weight = value
        return this;
    }

    buildWidth(value: number): Builder {
        this.car.width = value
        return this;
    }

    getResult(): Car {
        return this.car
    }
}