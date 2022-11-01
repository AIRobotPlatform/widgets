/*Pentru ca avem bug pe data-binding in webcardinal, pana o sa fie rezolvat, componenta asta
poate fi utilizata doar in carusel sau doar in afara. Daca vrem sa o folosim ca o componenta simpla,
trebuie sa adaugam data-view-model="@" pe <webc-container>.


model : {
            header: "SuperRare3",
            description: "A network governed by artists, collectors and curators.",
            memberCount: "199 members",
            background: url(image.svg) sau culoare
            cardImage: "image.svg"
            navigateTo: tag - ul paginii pe care vrei sa ajungi cand apesi pe componenta
        }
*/
const {WebcController} = WebCardinal.controllers;
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
