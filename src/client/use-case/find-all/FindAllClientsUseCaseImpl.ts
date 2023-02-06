import {FindAllClientsUseCase} from "./FindAllClientsUseCase";
import {ClientResponse} from "../ClientResponse";
import {ClientRepository} from "../../domain/ClientRepository";
import Client from "../../domain/Client";

export class FindAllClientsUseCaseImpl implements FindAllClientsUseCase {
    private repository: ClientRepository;

    constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    findAll(): ClientResponse[] {
        return this.repository.findAll().map(client => this.mapToResponse(client));
    }

    private mapToResponse(client: Client): ClientResponse {
        return {
            firstName: client.firstName,
            lastName: client.lastName,
            email: client.email
        } as ClientResponse
    }

}