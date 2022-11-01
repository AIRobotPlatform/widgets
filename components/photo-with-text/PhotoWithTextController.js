/*Pentru ca avem bug pe data-binding in webcardinal, pana o sa fie rezolvat, componenta asta
poate fi utilizata doar in carusel sau doar in afara. Daca vrem sa o folosim ca o componenta simpla,
trebuie sa adaugam data-view-model="@" pe <webc-container>.


model : {
            background: url(image.svg) sau culoare
            cardImage: "image.svg"
            navigateTo: tag - ul paginii pe care vrei sa ajungi cand apesi pe componenta
        }
*/
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
