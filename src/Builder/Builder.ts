import {Car} from "./Car";

export interface Builder {
    buildWidth(value: number):Builder
    buildMark(value: string):Builder
    buildPrice(value: number):Builder
    buildHeight(value: number):Builder
    buildDriver(value: string):Builder
    buildWeight(value: number):Builder
    getResult():Car
}