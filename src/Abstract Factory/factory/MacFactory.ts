import { MacButton } from "Abstract Factory/button/MacButton";
import { MacCheckBox } from "Abstract Factory/checkbox/MacCheckBox";
import { MacWindow } from "Abstract Factory/window/MacWindow";

export class MacFactory implements GUIFactory{
    createButton(): IButton {
        return new MacButton();
    }

    createCheckBox(): ICheckBox {
        return new MacCheckBox();
    }

    createWindow(): IWindow {
        return new MacWindow();
    }

}