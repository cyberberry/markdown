import { Element } from "../abstracts/Element";

export class BoldElement extends Element {
    name: string = "bold";
    symbol: string = "**";
    regexp: RegExp = /\*\*(.*?)\*\*/g;
    pattern: string = '<strong>$1</strong>';
    icon: string = 'fa-solid fa-bold';
}