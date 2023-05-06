export class MacCheckBox implements ICheckBox{
    height: number;
    width: number;

    setOnCheck(): boolean {
        console.log("MacCheckBox set on check")
        return true;
    }
}