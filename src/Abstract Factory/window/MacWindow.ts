export class MacWindow implements IWindow{
    width: number
    height: number
    public show():void {
        console.log("Show Mac's window")
    }

    public hide():void {
        console.log("Hide Mac's window")
    }
}