const { WebcController } = WebCardinal.controllers;

export default class CarouselCardController extends WebcController {
    constructor(...props) {
        super(...props);
        this.carouselContainer = this.getElementByTag("scroll-container");
        this.initCarouselListeners();
    }

    initCarouselItems(){

    }
    initCarouselListeners() {
        this.carouselContainer.addEventListener("mousedown", (e) => {
            this.carouselContainer.classList.toggle("grabbing", true);
            this.scrollLeft = this.carouselContainer.scrollLeft;
            this.userX = e.clientX;

            document.onmousemove = (e) => {
                const dx = e.clientX - this.userX;
                this.carouselContainer.scrollLeft = this.scrollLeft - dx;
            }
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
                this.carouselContainer.classList.toggle("grabbing", false);
                this.carouselContainer.scrollLeft += 1;
            }
        });
    }
}
