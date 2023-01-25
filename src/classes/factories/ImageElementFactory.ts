import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { ImageElement } from "../elements/ImageElement";

export class ImageElementFactory implements IElementFactory {
    createElement(): IElement {
        return new ImageElement();
    }
}