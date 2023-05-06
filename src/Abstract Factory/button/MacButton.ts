export class MacButton implements IButton{
    height: number;
    width: number;

    setOnClick(): boolean {
        console.log("MacButton set on click")
        return true;
    }
}