import { Element } from "../abstracts/Element"

export class Heading3Element extends Element {
    name: string = "heading";
    symbol: string = "\#\#\#";
    regexp: RegExp = /\#\#\#(.*)/g;
    pattern: string = '<h3>$1</h3>';
    icon: string = '';
}