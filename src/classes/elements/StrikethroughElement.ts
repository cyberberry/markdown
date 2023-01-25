import { Element } from "../abstracts/Element"

export class StrikethroughElement extends Element {
    name: string = "trikethrough";
    symbol: string = "\~\~";
    regexp: RegExp = /\~\~(.*?)\~\~/g;
    pattern: string = '<del>$1</del>';
    icon: string = 'fa-solid fa-strikethrough';
}