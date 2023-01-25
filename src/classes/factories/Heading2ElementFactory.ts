import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { Heading2Element } from "../elements/Heading2Element";

export class Heading2ElementFactory implements IElementFactory {
    createElement(): IElement {
        return new Heading2Element();
    }
}