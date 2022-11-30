const { WebcController } = WebCardinal.controllers;

export default class PreviewCardController2 extends WebcController {
    defaultValues = {
        background: 'url(./AIRobotWidgets/components/assets/card-preview2.svg)',
    }
    constructor(...props) {
        super(...props);
        this.model = {
            background: {
                style: `background:${this.model.background || this.defaultValues.background}`
            }
        };
        if(this.model.type=='large'){
            this.getElementByTag('preview-card').classList.add('type2');
        }
        else if(this.model.type=='large2'){
            this.getElementByTag('preview-card').classList.add('type3');
        }
        else {
            this.getElementByTag('preview-card').classList.add('type1');
        }
    }
}
