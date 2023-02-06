import {ClientResponse} from "../ClientResponse";
import {CreateClientRequest} from "./CreateClientRequest";

export interface CreateClientUseCase {
    createClient(request: CreateClientRequest): ClientResponse;
}