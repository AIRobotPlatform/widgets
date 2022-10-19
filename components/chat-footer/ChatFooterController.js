const { WebcController } = WebCardinal.controllers;
import { emojis } from "./emoji_json.js";
export default class ChatFooterController extends WebcController {
    timer;
    constructor(...props) {
        super(...props);
        this.model.emojis = emojis;
        setTimeout(() => {
            this.setNavigateTag(),
                this.setEmojiTag()
            this.setCategoryTag();
        }, 0);
        this.sendMessage();
        this.initializeEventListeners();

    }

    setNavigateTag() {
        const options = document.querySelector("#footer-options");
        Array.from(options.children).forEach(child => {
            const tagPage = child.getAttribute('data-tag');
            this.onTagClick(tagPage, () => {
                this.navigateToPageTag(tagPage);
            })
        })
    }

    setEmojiTag() {
        const emojiContainer = document.querySelector("#emoji-container");
        Array.from(emojiContainer.children).forEach((child) => {
            const tag = child.getAttribute('data-tag');
            const emoji = tag.split('-')[1];
            this.onTagClick(tag, () => {
                const textInput = this.getElementByTag('input');
                textInput.value += emoji;
                const length = textInput.value.length;
                textInput.setSelectionRange(length, length);
                textInput.focus();
            })
        })
    }

    setCategoryTag() {
        Array.from(document.querySelector("#emoji-category").children).forEach(element => {
            const dataTag = element.getAttribute("data-tag");
            const myCategory = dataTag.split('-')[1];
            this.onTagClick(dataTag, () => {
                const categoryElement = this.model.emojis.find(emoji => {
                    return emoji.category.toLowerCase() === myCategory.toLowerCase();
                })
                try{
                    this.getElementByTag(categoryElement.model.tag).scrollIntoView(true, { behaviour: "smooth" });
                }
                catch(err){
                    // console.log("No element selected///probably because search input isnt empty")
                }
            })
        })
    }

    sendMessage() {
        this.onTagClick("send-message", () => {
            const inputElement = this.getElementByTag('input');
            const messageToBeSend = inputElement.value;
            inputElement.value = ''
            if (messageToBeSend !== '') {
                const eventDetail = { 'message': messageToBeSend }
                this.element.dispatchEvent(new CustomEvent("messageSent", { detail: eventDetail }));
            }

        })
    }

    initializeEventListeners() {
        this.onTagClick("open-emoticons", () => {
            this.getElementByTag("emoji-menu").classList.toggle("hidden");
        })
        document.querySelector("#search-emoji").addEventListener('keyup', (e) => {
            const searched = e.currentTarget.value.toLowerCase();
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.filterEmojis(searched);
            }, 200);
        });
    }
    filterEmojis(searched) {
        this.model.emojis = emojis.filter(emoji => {
            emoji.keywords.forEach(keyword => {
                if (keyword.toLowerCase().includes(searched)) {
                    return true;
                }
            })
            if (emoji.name.toLowerCase().includes(searched)) {
                return true;
            }
            if (emoji.shortname.toLowerCase().includes(searched)) {
                return true;
            }
            return false;
        })
    }

}

