import AnchorCardController from "./components/anchor-card/AnchorCardController.js";
import CarouselCardController from "./components/carousel-card/CarouselCardController.js";
import PreviewCardController from "./components/preview-card/PreviewCardController.js";
import RobotCardController from "./components/robot-card/RobotCardController.js";

let { controllers, components } = window.WebCardinal;
controllers["AnchorCardController"] = AnchorCardController;
controllers["CarouselCardController"] = CarouselCardController;
controllers["PreviewCardController"]=PreviewCardController;
controllers["RobotCardController"]=RobotCardController;

components.define('anchor-card', '/AIRobotWidgets/components/anchor-card/anchor-card');
components.define('robot-card','/AIRobotWidgets/components/robot-card/robot-card');
components.define('carousel-card','/AIRobotWidgets/components/carousel-card/carousel-card');
components.define('preview-card','/AIRobotWidgets/components/preview-card/preview-card');
