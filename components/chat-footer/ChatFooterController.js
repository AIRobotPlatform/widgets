const { WebcController } = WebCardinal.controllers;
import { emojis } from "./emoji_json.js";
export default class ChatFooterController extends WebcController {
    timer;
    constructor(...props) {
        super(...props);
        this.carouselContainer = this.getElementByTag("scroll-container");
        this.model.emojis = emojis;
        setTimeout(() => {
            //this.setNavigateTag(),
            this.setEmojiTag()
            this.setCategoryTag();
        }, 0);
        this.sendMessage();
        this.initializeEventListeners();
        // this.initCarouselListeners();
        this.initMenuEventListeners();
    }

    initMenuEventListeners(){
        this.onTagClick("open-menu", ()=>{
            const element = document.querySelector(".menu-container")
            element.classList.toggle("hidden");
        });

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
                try {
                    this.getElementByTag(categoryElement.model.tag).scrollIntoView(true, { behaviour: "smooth" });
                }
                catch (err) {
                    // console.log("No element selected///probably because search input isnt empty")
                }
            })
        })
    }

    handleKeyPress(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            const inputElement = this.getElementByTag('input');
            const messageToBeSend = inputElement.value;
            inputElement.value = ''
            if (messageToBeSend !== '') {
                const eventDetail = { 'message': messageToBeSend }
                this.element.dispatchEvent(new CustomEvent("messageSent", { detail: eventDetail }));
            }
        }
    }

    initializeEventListeners() {
        this.onTagClick("open-emoticons", () => {
            this.getElementByTag("emoji-menu").classList.toggle("hidden");
        })
        this.getElementByTag('input').addEventListener("keydown",
            (event) => this.handleKeyPress(event))

        const fileElem = document.getElementById("fileElem");
        this.onTagClick("add-file", () => {
            fileElem.click();
        })
        fileElem.addEventListener("change", ()=>{
            const fileList = fileElem.files;
            this.model.handleFiles(fileList);
        }, false);
    }

    initCarouselListeners() {
        this.carouselContainer.addEventListener("mousedown", (e) => {
            this.carouselContainer.classList.toggle("grabbing", true);
            this.scrollLeft = this.carouselContainer.scrollLeft;
            this.userX = e.clientX;

            document.onmousemove = (e) => {
                const dx = e.clientX - this.userX;
                this.carouselContainer.scrollLeft = this.scrollLeft - dx;
            }
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
                this.carouselContainer.classList.toggle("grabbing", false);
                this.carouselContainer.scrollLeft += 1;
            }
        });
    }

}

