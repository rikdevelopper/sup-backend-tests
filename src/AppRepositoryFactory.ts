import {ClientRepository} from "./client/domain/ClientRepository";
import InMemoryClientRepository from "./client/infrastructure/InMemoryClientRepository";
import {AppConf} from "./shared/AppConf";
import {RepositoryFactory} from "./RepositoryFactory";

export class AppRepositoryFactory implements RepositoryFactory {
    static SINGLETON: RepositoryFactory = new AppRepositoryFactory();
    private constructor() {
    }

    makeClientRepository(): ClientRepository {
        return new InMemoryClientRepository(AppConf.database);
    }
}