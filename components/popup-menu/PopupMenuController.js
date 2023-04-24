
const { WebcController } = WebCardinal.controllers;

export default class PopupMenuController extends WebcController {
    constructor(...props) {
        super(...props);
        setTimeout(() => this.init(), 100)
    }
    init() {
        document.querySelectorAll(".option-wrapper").forEach((button, index) => {
            button.addEventListener("click", () => {
                document.querySelector(".menu-container").classList.toggle("hidden");
                this.model.options[index].action()
            });

        })

        this.onTagClick("close-button", () => {
            document.querySelector(".menu-container").classList.toggle("hidden");
        })

    }
}
