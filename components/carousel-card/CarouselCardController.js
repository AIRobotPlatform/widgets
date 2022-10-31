const { WebcController } = WebCardinal.controllers;
export default class CarouselCardController extends WebcController {
    constructor(...props) {
        super(...props);
        this.carouselContainer = this.getElementByTag("scroll-container");
        this.initCarouselListeners();
        this.setCarouselType();
        setTimeout(()=>{this.addCarouselChildrens();});
    }


    setCarouselType(){
        if(this.model.type==='big'){
            this.getElementByTag('scroll-container').classList.add('big');
        }
    }
    addCarouselChildrens(){
        const parent=this.getElementByTag("slider");
        let childrens=[]
        this.model.items.forEach((item)=>{
            const newChild = this.createElement(item.type,{injectedProperties:item.model});
            newChild.classList.add('slider-item');
            childrens.push(newChild);
        });
        parent.append(...childrens);
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
