/*
previewCard: {
                text: "text",
                background:'url(image.svg)',
                buttonColor:'white',
                buttonText:'Tap'
                navigateTo:name-tag
            },
 */


const { WebcController } = WebCardinal.controllers;

export default class PreviewCardController extends WebcController {
    defaultValues = {
        background: 'url(./AIRobotWidgets/components/assets/map-preview.png)',
        buttonColor: 'linear-gradient(0deg, rgba(66, 59, 183, 0.29), rgba(66, 59, 183, 0.29)), linear-gradient(107.45deg, #6EB2F7 -2.29%, #6661EC 92.25%, #697FEF 187.08%)',
        buttonText:'Tap'
    }
    constructor(...props) {
        super(...props);
        this.model = {
            background: {
                style: `background:${this.model.background || this.defaultValues.background}`
            },
            button: {
                tag: "tap-button",
                style: `background:${this.model.buttonColor || this.defaultValues.buttonColor}`,
                html:this.model.buttonText||this.defaultValues.buttonText,
            },
        };
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
