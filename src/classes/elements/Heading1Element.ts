import { Element } from "../abstracts/Element"

export class Heading1Element extends Element {
    name: string = "heading";
    symbol: string = "\#";
    regexp: RegExp = /\#(.*)/g;
    pattern: string = '<h1>$1</h1>';
    icon: string = '';
}