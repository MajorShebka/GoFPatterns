import { WinButton } from "Abstract Factory/button/WinButton";
import { WinCheckBox } from "Abstract Factory/checkbox/WinCheckBox";
import { WinWindow } from "Abstract Factory/window/WinWindow";

export class WinFactory implements GUIFactory{
    constructor() {
    }
    public createButton(): IButton {
        return new WinButton();
    }

    public createCheckBox(): ICheckBox {
        return new WinCheckBox();
    }

    public createWindow(): IWindow {
        return new WinWindow();
    }

}