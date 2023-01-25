import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { HighlightElement } from "../elements/HighlightElement";

export class HighlightElementFactory implements IElementFactory {
    createElement(): IElement {
        return new HighlightElement();
    }
}