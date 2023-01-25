import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { StrikethroughElement } from "../elements/StrikethroughElement";

export class StrikethroughElementFactory implements IElementFactory {
    createElement(): IElement {
        return new StrikethroughElement();
    }
}