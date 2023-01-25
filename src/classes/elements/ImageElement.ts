import { Element } from "../abstracts/Element"

export class ImageElement extends Element {
    name: string = "image";
    symbol: string = "";
    regexp: RegExp = /\!\[(.*?)\]\((.*?)\)/g;
    pattern: string = '<img src="$2" alt="$1" height = 170px width = 500px/>';
    icon: string = '';
}