export class WinButton implements IButton{
    height: number;
    width: number;

    setOnClick(): boolean {
        console.log("WinButton set on click")
        return true;
    }
}