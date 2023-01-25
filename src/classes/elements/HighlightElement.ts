import { Element } from "../abstracts/Element"

export class HighlightElement extends Element {
    name: string = "highlight";
    symbol: string = "\=\=";
    regexp: RegExp = /\=\=(.*?)\=\=/g;
    pattern: string = '<mark>$1</mark>';
    icon: string = '';
}