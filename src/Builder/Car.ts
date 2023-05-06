export class Car {
    private _mark: string
    private _price: number
    private _height: number
    private _width: number
    private _driver: string
    private _weight: number


    set mark(value: string) {
        this._mark = value;
    }

    set price(value: number) {
        this._price = value;
    }

    set height(value: number) {
        this._height = value;
    }

    set width(value: number) {
        this._width = value;
    }

    set driver(value: string) {
        this._driver = value;
    }

    set weight(value: number) {
        this._weight = value;
    }
}