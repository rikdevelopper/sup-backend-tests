import {ClientResponse} from "../ClientResponse";

export interface FindAllClientsUseCase {
    findAll(): ClientResponse[];
}