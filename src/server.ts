import HouseController from "./house/controller/HouseController";
import App from "./App";
import ClientController from "./client/controller/ClientController";
import * as process from "process";
import {AppConf} from "./shared/AppConf";

const app = new App(
    [
        new HouseController(),
        new ClientController()
    ],
    3000,
);

if(process.env.ENV_VARIABLE === 'test') {
    AppConf.switchToTest();
}
app.listen();

export default app;