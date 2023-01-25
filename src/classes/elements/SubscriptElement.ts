import { Element } from "../abstracts/Element"

export class SubscriptElement extends Element {
    name: string = "bold";
    symbol: string = "\~";
    regexp: RegExp = /\~(.*?)\~/g;
    pattern: string = '<sub>$1</sub>';
    icon: string = '';
}