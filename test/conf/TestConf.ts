import {Database} from "../../src/Database";
import {TestInMemoryDatabase} from "./TestInMemoryDatabase";
import {RepositoryFactory} from "../../src/RepositoryFactory";
import {TestRepositoryFactory} from "./TestRepositoryFactory";

export class TestConf {
    static database: Database = TestInMemoryDatabase.SINGLETON;
    static readonly repositoryFactory: RepositoryFactory = TestRepositoryFactory.SINGLETON;
}