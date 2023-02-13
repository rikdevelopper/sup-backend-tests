import {FindByIdUseCase} from "./FindByIdUseCase";
import {ClientResponse} from "../ClientResponse";
import {ClientRepository} from "../../domain/ClientRepository";

export class FindByIdUseCaseImpl implements FindByIdUseCase{
    private readonly clientRepository: ClientRepository;
    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    searchById(id: number): ClientResponse {
        return this.clientRepository.findById(id);
    }

}