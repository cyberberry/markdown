import { Element } from "../abstracts/Element"

export class Heading2Element extends Element {
    name: string = "heading";
    symbol: string = "\#\#";
    regexp: RegExp = /\#\#(.*)/g;
    pattern: string = '<h2>$1</h2>';
    icon: string = '';
}