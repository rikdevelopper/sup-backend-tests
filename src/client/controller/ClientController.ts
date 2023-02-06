import * as express from "express";
import Controller from "../../shared/Controller";
import {ClientUseCaseFactory} from "../use-case/ClientUseCaseFactory";

class ClientController extends Controller {
    public path = '/clients';

    constructor() {
        super();
        this.initializeRoutes();
    }

    initializeRoutes(): void {
        this.router.post(this.path, this.createClient);
        this.router.get(this.path, this.findAllClients);
    }

    private createClient = (request: express.Request, response: express.Response) => {
        response.send(ClientUseCaseFactory.makeCreateClientUseCase().createClient(request.body));
    }
    private findAllClients = (request: express.Request, response: express.Response) => {
        response.send(ClientUseCaseFactory.makeFindAllClientsUseCase().findAll());
    }
}

export default ClientController;