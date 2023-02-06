import {Database} from "../Database";
import {InMemoryDataBase} from "../client/infrastructure/InMemoryDataBase";
import {RepositoryFactory} from "../RepositoryFactory";
import {AppRepositoryFactory} from "../AppRepositoryFactory";

export class AppConf {
    static database: Database = InMemoryDataBase.SINGLETON;
    static repositoryFactory: RepositoryFactory = AppRepositoryFactory.SINGLETON;
}