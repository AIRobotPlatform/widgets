/*
Componenta primeste in data-view-model doar datasource-ul cu mesaje;
 */

const { WebcController } = WebCardinal.controllers;

export default class ChatMessagesController extends WebcController {
    constructor(...props) {
        super(...props);
    }
}
