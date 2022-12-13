
const { WebcController } = WebCardinal.controllers;

export default class PopupMenuController extends WebcController {
    constructor(...props) {
        super(...props);
        setTimeout(() => this.init(), 100)
    }
    init() {
        document.querySelectorAll(".option-input").forEach((input, index) => {
            if (index == 0) {
                input.setAttribute("checked", "checked")
            }
            input.setAttribute("id", index);
            console.log(input.nextSibling)
            input.nextElementSibling.setAttribute("for", index);
        })

        this.onTagClick("close-button", () => {
            document.querySelector(".menu-container").classList.toggle("hidden");
        })
        
    }
}