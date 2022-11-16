import AnchorCardController from "./components/anchor-card/AnchorCardController.js";
import CarouselCardController from "./components/carousel-card/CarouselCardController.js";
import PreviewCardController from "./components/preview-card/PreviewCardController.js";
import RobotCardController from "./components/robot-card/RobotCardController.js";
import ChatFooterController from "./components/chat-footer/ChatFooterController.js";
import ChatMessagesController from "./components/chat-messages/ChatMessagesController.js"
import PreviewCardController2 from "./components/preview-card2/PreviewCardController2.js";
import PhotoWithTextController from "./components/photo-with-text/PhotoWithTextController.js";
import ChatOptionMenuController from "./components/chat-option-menu/ChatOptionMenuController.js";
import ChatYesNoMenuController from "./components/chat-yes-no-menu/ChatYesNoMenuController.js";


let { controllers, components } = window.WebCardinal;
controllers["AnchorCardController"] = AnchorCardController;
controllers["CarouselCardController"] = CarouselCardController;
controllers["PreviewCardController"] = PreviewCardController;
controllers["RobotCardController"] = RobotCardController;
controllers["ChatFooterController"] = ChatFooterController;
controllers["ChatMessagesController"] = ChatMessagesController;
controllers["PreviewCardController2"] = PreviewCardController2;
controllers["PhotoWithTextController"] = PhotoWithTextController;
controllers["ChatOptionMenuController"] = ChatOptionMenuController;
controllers["ChatYesNoMenuController"] = ChatYesNoMenuController;


components.define('anchor-card', '/AIRobotWidgets/components/anchor-card/anchor-card');
components.define('robot-card', '/AIRobotWidgets/components/robot-card/robot-card');
components.define('carousel-card', '/AIRobotWidgets/components/carousel-card/carousel-card');
components.define('preview-card', '/AIRobotWidgets/components/preview-card/preview-card');
components.define('preview-card2', '/AIRobotWidgets/components/preview-card2/preview-card2');
components.define('chat-footer', '/AIRobotWidgets/components/chat-footer/chat-footer');
components.define('chat-messages', '/AIRobotWidgets/components/chat-messages/chat-messages');
components.define('photo-with-text', '/AIRobotWidgets/components/photo-with-text/photo-with-text');
components.define('chat-option-menu', '/AIRobotWidgets/components/chat-option-menu/chat-option-menu')
components.define('chat-yes-no-menu', '/AIRobotWidgets/components/chat-yes-no-menu/chat-yes-no-menu')