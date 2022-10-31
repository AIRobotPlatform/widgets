const { WebcController } = WebCardinal.controllers;

export default class AnchorCardController extends WebcController {
    defaultValues = {
        background: 'url(./AIRobotWidgets/components/assets/card-background.jpg)',
        cardImage: "./AIRobotWidgets/components/assets/anchor-card-image.svg",
    }
    constructor(...props) {
        super(...props);
        this.injectedProperties = this.element.parentElement?.injectedProperties;
        // this.element.setAttribute('instantiate','');
        if (this.injectedProperties) {
            this.model = this.injectedProperties;
        }
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
