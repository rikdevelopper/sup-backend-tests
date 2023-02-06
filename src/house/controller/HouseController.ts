import Controller from "../../shared/Controller";
import * as express from 'express';

class HouseController extends Controller {
    public path = '/house';

    initializeRoutes(): void {
        this.router.post(this.path, this.createHouse);
    }

    private createHouse = (request: express.Request, response: express.Response) => {
        response.send();
    }

}

export default HouseController;