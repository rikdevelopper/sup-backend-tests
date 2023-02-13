import {ClientResponse} from "../ClientResponse";

export interface FindByIdUseCase {
    searchById(id: number): ClientResponse;
}