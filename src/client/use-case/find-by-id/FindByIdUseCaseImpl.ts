import {FindByIdUseCase} from "./FindByIdUseCase";
import {ClientResponse} from "../ClientResponse";
import {ClientRepository} from "../../domain/ClientRepository";
import Client from "../../domain/Client";

export class FindByIdUseCaseImpl implements FindByIdUseCase{
    private readonly clientRepository: ClientRepository;
    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    searchById(id: number): ClientResponse {
        const client: Client = this.clientRepository.findById(id);
        return {
            firstName: client.firstName,
            email: client.email,
            lastName: client.lastName
        } as ClientResponse;
    }

}