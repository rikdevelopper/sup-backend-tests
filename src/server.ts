import HouseController from "./house/controller/HouseController";
import App from "./App";
import ClientController from "./client/controller/ClientController";

const app = new App(
    [
        new HouseController(),
        new ClientController()
    ],
    3000,
);

app.listen();
