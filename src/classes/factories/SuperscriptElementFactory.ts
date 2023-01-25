import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { SuperscriptElement } from "../elements/SuperscriptElement";

export class SuperscriptElementFactory implements IElementFactory {
    createElement(): IElement {
        return new SuperscriptElement();
    }
}