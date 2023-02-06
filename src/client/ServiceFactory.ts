import {ClientService} from "./services/ClientService";

export interface ServiceFactory {
    makeClientService(): ClientService;
}