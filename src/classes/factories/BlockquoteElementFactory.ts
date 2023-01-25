import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { BlockquoteElement } from "../elements/BlockquoteElement";

export class BlockquoteElementFactory implements IElementFactory {
    createElement(): IElement {
        return new BlockquoteElement();
    }
}