const { WebcController } = WebCardinal.controllers;

export default class ChatMessagesController extends WebcController {
    constructor(...props) {
        super(...props);

        this.initializeScrollTop();
    }
    initializeScrollTop(){
        const repeat=setInterval(()=>{
            if(document.querySelector('ion-infinite-scroll')){
                document.querySelector('ion-infinite-scroll').setAttribute('position','top');
                clearInterval(repeat);
            }
        },500)
    }
}
