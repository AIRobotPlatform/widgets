const { WebcController } = WebCardinal.controllers;

export default class CardInfoStripController extends WebcController {
    constructor(...props) {
        super(...props);
        this.eventListeners();
    }

    eventListeners() {
        this.onTagClick("tap-button", () => {
            if (this.model.navigateTo === undefined) {
                console.log("set navigateTo in parent controller");
                return;
            }
            this.navigateToPageTag(this.model.navigateTo);
        })
    }
}
