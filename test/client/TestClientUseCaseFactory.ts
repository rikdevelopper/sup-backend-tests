import {CreateClientUseCase} from "../../src/client/use-case/create-client/CreateClientUseCase";
import CreateClientUseCaseImpl from "../../src/client/use-case/create-client/CreateClientUseCaseImpl";
import {FindAllClientsUseCase} from "../../src/client/use-case/find-all/FindAllClientsUseCase";
import {FindAllClientsUseCaseImpl} from "../../src/client/use-case/find-all/FindAllClientsUseCaseImpl";
import {TestConf} from "../conf/TestConf";

export class TestClientUseCaseFactory {
    public static makeCreateClientUseCase(): CreateClientUseCase {
        return new CreateClientUseCaseImpl(TestConf.repositoryFactory.makeClientRepository());
    }

    public static makeFindAllClientsUseCase(): FindAllClientsUseCase {
        return new FindAllClientsUseCaseImpl(TestConf.repositoryFactory.makeClientRepository())
    }
}