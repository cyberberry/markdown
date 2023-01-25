import { IElement } from "../../interfaces/IElement";

export abstract class Element implements IElement {
    name: string;
    symbol: string;
    regexp: RegExp;
    pattern: string;
    icon: string;

    parse(text: string) {
        return text.replace(this.regexp, this.pattern);
    }
}