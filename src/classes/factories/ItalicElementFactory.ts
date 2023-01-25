import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { ItalicElement } from "../elements/ItalicElement";

export class ItalicElementFactory implements IElementFactory {
    createElement(): IElement {
        return new ItalicElement();
    }
}
