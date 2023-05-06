import {Builder} from "./Builder";
import {CarBuilder} from "./CarBuilder";

export class Director {
    private builder: Builder

    constructor(builder: Builder) {
        this.builder = builder
    }

    buildCar(): void{
        console.log(this.builder.getResult())
        console.log(this.builder
            .buildDriver("Jon")
            .buildPrice(100)
            .buildMark("BMW")
            .getResult())
    }
}