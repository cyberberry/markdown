import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { Heading3Element } from "../elements/Heading3Element";

export class Heading3ElementFactory implements IElementFactory {
    createElement(): IElement {
        return new Heading3Element();
    }
}