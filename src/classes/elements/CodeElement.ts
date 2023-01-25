import { Element } from "../abstracts/Element"

export class CodeElement extends Element {
    name: string = "code";
    symbol: string = "\`";
    regexp: RegExp = /\`(.*?)\`/g;
    pattern: string = '<code>$1</code>';
    icon: string = 'fa-solid fa-code';
}