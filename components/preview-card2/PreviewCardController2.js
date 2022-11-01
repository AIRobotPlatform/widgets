/*
previewCard: {
                text: "text",
                background:'url(image.svg)',
                buttonColor:'white',
                buttonText:'Tap'
                navigateTo:'name-tag'
                type:'small','large','large2'
                Default-ul pentru type e small.
            },
 */

const {WebcController} = WebCardinal.controllers;

export default class PreviewCardController2 extends WebcController {
    defaultValues = {
        background: 'url(./AIRobotWidgets/components/assets/card-preview2.svg)',
        buttonColor: '#4CBC79',
        buttonText: 'Vezi harta'
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
                html: this.model.buttonText || this.defaultValues.buttonText,
            },
        };
        if (this.model.type == 'large') {
            this.getElementByTag('preview-card').classList.add('type2');
        } else if (this.model.type == 'large2') {
            this.getElementByTag('preview-card').classList.add('type3');
        } else {
            this.getElementByTag('preview-card').classList.add('type1');
        }
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
