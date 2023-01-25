import { BoldElement } from "../elements/BoldElement";
import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";

export class BoldElementFactory implements IElementFactory {
    createElement(): IElement {
        return new BoldElement();
    }
}