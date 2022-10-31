const { WebcController } = WebCardinal.controllers;

export default class PhotoWithNameController extends WebcController {
    defaultValues = {
        background: 'white',
    }
    constructor(...props) {
        super(...props);
        if(this.element.parentElement?.injectedProperties){

            this.model=this.element.parentElement?.injectedProperties;
        }
        this.model = {
            background: {
                style: `background:${this.model.background || this.defaultValues.background}`
            },
            cardImage: {
                src: this.model.cardImage
            },
        };

        this.eventListeners();
    }


    eventListeners() {
        this.onTagClick("tap-profile", () => {
            if (this.model.navigateTo === undefined) {
                console.log("set navigateTo in parent controller");
                return;
            }
            this.navigateToPageTag(this.model.navigateTo);
        })
    }
}
