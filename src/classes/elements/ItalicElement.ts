import { Element } from "../abstracts/Element"

export class ItalicElement extends Element {
    name: string = "italic";
    symbol: string = "\*";
    regexp: RegExp = /\*(.*?)\*/g;
    pattern: string = '<em>$1</em>';
    icon: string = 'fa-solid fa-italic';
}