import { BoldElementFactory } from "./factories/BoldElementFactory";
import { ItalicElementFactory } from "./factories/ItalicElementFactory";
import { StrikethroughElementFactory } from "./factories/StrikethroughElementFactory";
import { SubscriptElementFactory } from "./factories/SubscriptElementFactory";
import { SuperscriptElementFactory } from "./factories/SuperscriptElementFactory";
import { HighlightElementFactory } from "./factories/HighlightElementFactory";
import { BlockquoteElementFactory } from "./factories/BlockquoteElementFactory";
import { CodeElementFactory } from "./factories/CodeElementFactory";
import { Heading1ElementFactory } from "./factories/Heading1ElementFactory";
import { Heading2ElementFactory } from "./factories/Heading2ElementFactory";
import { Heading3ElementFactory } from "./factories/Heading3ElementFactory";
import { LinkElementFactory } from "./factories/LinkElementFactory";
import { ImageElementFactory } from "./factories/ImageElementFactory";
import { IElementFactory } from "../interfaces/IElementFactory";

import { Emojies } from "./Emojies";

export class Markdown {

    factories: Record<string, IElementFactory>;
    //emojies: Record<string, string> = Emojies;

    getFactory(name: string): IElementFactory | null {


        if (this.factories.hasOwnProperty(name)) {
            let factory = this.factories[name];
            return factory;
        }

        return null;
    }

    constructor() {

        console.log(this.factories);
        this.factories = {

            'BoldElementFactory': new BoldElementFactory(),
            'ItalicElementFactory': new ItalicElementFactory(),
            'StrikethroughElementFactory': new StrikethroughElementFactory(),
            'SubscriptElementFactory': new SubscriptElementFactory(),
            'SuperscriptElementFactory': new SuperscriptElementFactory(),
            'HighlightElementFactory': new HighlightElementFactory(),
            'BlockquoteElementFactory': new BlockquoteElementFactory(),
            'CodeElementFactory': new CodeElementFactory(),
            'Heading3ElementFactory': new Heading3ElementFactory(),
            'Heading2ElementFactory': new Heading2ElementFactory(),
            'Heading1ElementFactory': new Heading1ElementFactory(),
            'ImageElementFactory': new ImageElementFactory(),
            'LinkElementFactory': new LinkElementFactory(),
        };

    }

    parseAll(text: string): string {
        let resultText = text;

       // resultText = resultText.replace('\n', '</br>');

        for(let key of Object.keys(this.factories)) {
            resultText = this.factories[key].createElement().parse(resultText);
        }
        
        //parse emoji
        resultText = this.parseEmoji(resultText);

        resultText = resultText.replace(/\n/g, '</br>');

        return resultText;
    }

    parseEmoji(text: string): string {
        let resultText = text;

        for(const key in Emojies) {
            const value = Emojies[key];
            resultText = resultText.replace(key, value);
        }

        return resultText;
    }
}