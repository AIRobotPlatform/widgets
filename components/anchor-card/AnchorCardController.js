const { WebcController } = WebCardinal.controllers;

export default class AnchorCardController extends WebcController {
    defaultValues = {
        background: 'linear-gradient(130.29deg, rgba(220, 177, 246, 0.2) 30.01%, rgba(150, 165, 246, 0.2) 60.2%, rgba(104, 114, 238, 0.2) 78.17%, rgba(74, 160, 179, 0.2) 128.79%)',
        cardImage: "./assets/icons/anchor-card-image.svg",
    }
    constructor(...props) {
        super(...props);
        this.model = {
            background: {
                style: `background:${this.model.background || this.defaultValues.background}`
            },
            memberCount: this.model.memberCount || "0 members",
            anchorText: this.model.anchorText || "Open community",
            cardImage: {
                src: this.model.cardImage || this.defaultValues.cardImage,
            }

        };
        this.eventListeners();
    }

    eventListeners() {
        this.onTagClick("anchor-tag", () => {
            if (this.model.navigateTo === undefined) {
                console.log("set navigateTo in parent controller");
                return;
            }
            this.navigateToPageTag(this.model.navigateTo);
        })
    }
}
