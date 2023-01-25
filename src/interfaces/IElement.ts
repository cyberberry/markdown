export interface IElement {
    name: string;
    symbol: string;
    regexp: RegExp
    pattern: string
    icon: string
    parse(text: string): string;
}