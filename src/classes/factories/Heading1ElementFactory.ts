import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { Heading1Element } from "../elements/Heading1Element";

export class Heading1ElementFactory implements IElementFactory {
    createElement(): IElement {
        return new Heading1Element();
    }
}