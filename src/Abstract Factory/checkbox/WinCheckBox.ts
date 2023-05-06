export class WinCheckBox implements ICheckBox{
    height: number;
    width: number;

    setOnCheck(): boolean {
        console.log("WinCheckBox set on check")
        return true;
    }
}