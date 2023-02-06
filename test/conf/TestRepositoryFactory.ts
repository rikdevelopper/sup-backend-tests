import {RepositoryFactory} from "../../src/RepositoryFactory";
import {ClientRepository} from "../../src/client/domain/ClientRepository";
import InMemoryClientRepository from "../../src/client/infrastructure/InMemoryClientRepository";
import {TestConf} from "./TestConf";

export class TestRepositoryFactory implements RepositoryFactory {
    static SINGLETON: TestRepositoryFactory = new TestRepositoryFactory();
    makeClientRepository(): ClientRepository {
        return new InMemoryClientRepository(TestConf.database);
    }

}