import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { SubscriptElement } from "../elements/SubscriptElement";

export class SubscriptElementFactory implements IElementFactory {
    createElement(): IElement {
        return new SubscriptElement();
    }
}