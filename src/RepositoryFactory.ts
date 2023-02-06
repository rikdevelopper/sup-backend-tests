import {ClientRepository} from "./client/domain/ClientRepository";

export interface RepositoryFactory {
    makeClientRepository(): ClientRepository;
}