const { WebcController } = WebCardinal.controllers;

export default class ChatYesNoMenuController extends WebcController {
    defaultValues = {
        buttonColor: '#4CBC79'
    }
    constructor(...props) {
        super(...props);
        this.model.button = { style: `background:${this.model.background || this.defaultValues.buttonColor}` }

        console.log("pagina mea");
    }
}
