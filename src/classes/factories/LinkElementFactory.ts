import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { LinkElement } from "../elements/LinkElement";

export class LinkElementFactory implements IElementFactory {
    createElement(): IElement {
        return new LinkElement();
    }
}