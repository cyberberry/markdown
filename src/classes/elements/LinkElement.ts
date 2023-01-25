import { Element } from "../abstracts/Element"

export class LinkElement extends Element {
    name: string = "link";
    symbol: string = "";
    regexp: RegExp = /\[(.*?)\]\((.*?)\)/g;
    pattern: string = '<a href="$2">$1</a>';
    icon: string = '';
}