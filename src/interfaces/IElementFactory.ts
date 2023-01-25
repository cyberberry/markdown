import { IElement } from "../interfaces/IElement"

export interface IElementFactory {
    createElement(): IElement;
}