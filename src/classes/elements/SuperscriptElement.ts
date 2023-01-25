import { Element } from "../abstracts/Element"

export class SuperscriptElement extends Element {
    name: string = "bold";
    symbol: string = "\^";
    regexp: RegExp = /\^(.*?)\^/g;
    pattern: string = '<sup>$1</sup>';
    icon: string = '';
}