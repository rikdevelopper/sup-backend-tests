import {CreateClientUseCase} from "./create-client/CreateClientUseCase";
import CreateClientUseCaseImpl from "./create-client/CreateClientUseCaseImpl";
import {FindAllClientsUseCase} from "./find-all/FindAllClientsUseCase";
import {FindAllClientsUseCaseImpl} from "./find-all/FindAllClientsUseCaseImpl";
import {AppConf} from "../../shared/AppConf";

export class ClientUseCaseFactory {
    public static makeCreateClientUseCase(): CreateClientUseCase {
        return new CreateClientUseCaseImpl(AppConf.repositoryFactory.makeClientRepository());
    }

    public static makeFindAllClientsUseCase(): FindAllClientsUseCase{
        return new FindAllClientsUseCaseImpl(AppConf.repositoryFactory.makeClientRepository())
    }
}