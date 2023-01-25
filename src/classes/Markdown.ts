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


export class Markdown {

    factories: Record<string, IElementFactory>;
    emojies: Record<string, string> = {
        ":smile:": "😄",
        ":laughing:": "😆",
        ":blush:": "😊",
        ":smiley:": "😃",
        ":smirk:": "😏",
        ":heart_eyes:": "😍",
        ":kissing_heart:": "😘",
        ":kissing_closed_eyes:": "😚",
        ":flushed:": "😳",
        ":relieved:": "😌",
        ":satisfied:": "😆",
        ":grin:": "😁",
        ":wink:": "😉",
        ":stuck_out_tongue_winking_eye:": "😜",
        ":stuck_out_tongue_closed_eyes:": "😝",
        ":grinning:": "😀",
        ":kissing:": "😗",
        ":kissing_smiling_eyes:": "😙",
        ":stuck_out_tongue:": "😛",
        ":sleeping:": "😴",
        ":worried:": "😟",
        ":frowning:": "😦",
        ":anguished:": "😧",
        ":open_mouth:": "😮",
        ":grimacing:": "😬",
        ":confused:": "😕",
        ":hushed:": "😯",
        ":expressionless:": "😑",
        ":unamused:": "😒",
        ":sweat_smile:": "😅",
        ":sweat:": "😓",
        ":disappointed_relieved:": "😥",
        ":weary:": "😩",
        ":pensive:": "😔",
        ":disappointed:": "😞",
        ":confounded:": "😖",
        ":fearful:": "😨",
        ":cold_sweat:": "😰",
        ":persevere:": "😣",
        ":cry:": "😢",
        ":sob:": "😭",
        ":joy:": "😂",
        ":astonished:": "😲",
        ":scream:": "😱",
        ":tired_face:": "😫",
        ":angry:": "😠",
        ":rage:": "😡",
        ":triumph:": "😤",
        ":sleepy:": "😪",
        ":yum:": "😋",
        ":mask:": "😷",
        ":sunglasses:": "😎",
        ":dizzy_face:": "😵",
        ":imp:": "👿",
        ":smiling_imp:": "😈",
        ":neutral_face:": "😐",
        ":no_mouth:": "😶",
        ":innocent:": "😇",
        ":alien:": "👽",
        ":yellow_heart:": "💛",
        ":blue_heart:": "💙",
        ":purple_heart:": "💜",
        ":heart:": "️❤",
        ":green_heart:": "💚",
        ":broken_heart:": "💔",
        ":heartbeat:": "💓",
        ":heartpulse:": "💗",
        ":two_hearts:": "💕",
        ":revolving_hearts:": "💞",
        ":cupid:": "💘",
        ":sparkling_heart:": "💖",
        ":sparkles:": "✨",
        ":star:": "⭐",
        ":star2:": "🌟",
        ":dizzy:": "💫",
        ":boom:": "💥",
        ":collision:": "💥",
        ":anger:": "💢",
        ":exclamation:": "❗",
        ":question:": "❓",
        ":grey_exclamation:": "❕",
        ":grey_question:": "❔",
        ":zzz:": "💤",
        ":dash:": "💨",
        ":sweat_drops:": "💦",
        ":notes:": "🎶",
        ":musical_note:": "🎵",
        ":fire:": "🔥",
        ":thumbsup:": "👍",
        ":thumbsdown:": "👎",
        ":ok_hand:": "👌",
        ":punch:": "👊",
        ":facepunch:": "👊",
        ":fist:": "✊",
        ":v:": "️✌",
        ":wave:": "👋",
        ":hand:": "✋",
        ":raised_hand:": "✋",
        ":open_hands:": "👐",
        ":point_up:": "️☝",
        ":point_down:": "👇",
        ":point_left:": "👈",
        ":point_right:": "👉",
        ":raised_hands:": "🙌",
        ":pray:": "🙏",
        ":point_up_2:": "👆",
        ":clap:": "👏",
        ":muscle:": "💪",
        ":metal:": "🤘",
        ":fu:": "🖕",
        ":walking:": "🚶",
        ":runner:": "🏃",
        ":running:": "🏃",
        ":couple:": "👫",
        ":family:": "👪",
        ":two_men_holding_hands:": "👬",
        ":two_women_holding_hands:": "👭",
        ":dancer:": "💃",
        ":dancers:": "👯",
        ":ok_woman:": "️🙆‍♀",
        ":no_good:": "🙅",
        ":information_desk_person:": "💁",
        ":raising_hand:": "🙋",
        ":bride_with_veil:": "️👰‍♀"
    }

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

        resultText = resultText.replace(/\n/g, '</br>');
       // resultText = resultText.replace('\n', '</br>');

        for(let key of Object.keys(this.factories)) {
            resultText = this.factories[key].createElement().parse(resultText);
        }
        
        //parse emoji
        resultText = this.parseEmoji(resultText);

        return resultText;
    }

    parseEmoji(text: string): string {
        let resultText = text;

        for(let key of Object.keys(this.emojies)) {
            resultText = resultText.replace(key, this.emojies[key]);
        }

        return resultText;
    }
}