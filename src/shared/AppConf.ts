import {Database} from "../Database";
import {InMemoryDataBase} from "../client/infrastructure/InMemoryDataBase";
import {RepositoryFactory} from "../RepositoryFactory";
import {AppRepositoryFactory} from "../AppRepositoryFactory";
import {TestInMemoryDatabase} from "../../test/conf/TestInMemoryDatabase";

export class AppConf {
    static database: Database = InMemoryDataBase.SINGLETON;
    static repositoryFactory: RepositoryFactory = AppRepositoryFactory.SINGLETON;

   static switchToTest(): void{
       console.log('test');
        AppConf.database = TestInMemoryDatabase.SINGLETON;
    }
}