import Client from "../../domain/Client";
import {ClientResponse} from "../ClientResponse";
import {CreateClientUseCase} from "./CreateClientUseCase";
import {ClientRepository} from "../../domain/ClientRepository";
import {CreateClientRequest} from "./CreateClientRequest";

class CreateClientUseCaseImpl implements CreateClientUseCase {
    private readonly repository: ClientRepository;

    constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    createClient(request: CreateClientRequest): ClientResponse {
        const client: Client = new Client(
            request.firstName,
            request.lastName,
            request.email
        );
        const isEmailAlreadyUsed = this.repository.findByEmail(request.email) !== undefined;
        if (isEmailAlreadyUsed) throw new Error('The email is already in use');
        const savedClient = this.repository.addClient(client);
        return {
            firstName: savedClient.firstName,
            lastName: savedClient.lastName,
            email: savedClient.email
        } as ClientResponse;
    }

}

export default CreateClientUseCaseImpl;