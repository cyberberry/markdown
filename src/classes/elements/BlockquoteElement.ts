import { Element } from "../abstracts/Element"

export class BlockquoteElement extends Element {
    name: string = "blockquote";
    symbol: string = ">";
    regexp: RegExp = /^\>(.*)/gm;
    pattern: string = '<blockquote class="blockquote"><p class="mb-0">$1</p></blockquote>';
    icon: string = 'fa-solid fa-quote-left';
}