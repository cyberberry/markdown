import { IElementFactory } from "../../interfaces/IElementFactory";
import { IElement } from "../../interfaces/IElement";
import { CodeElement } from "../elements/CodeElement";

export class CodeElementFactory implements IElementFactory {
    createElement(): IElement {
        return new CodeElement();
    }
}