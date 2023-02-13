import {CreateClientUseCase} from "./create-client/CreateClientUseCase";
import CreateClientUseCaseImpl from "./create-client/CreateClientUseCaseImpl";
import {FindAllClientsUseCase} from "./find-all/FindAllClientsUseCase";
import {FindAllClientsUseCaseImpl} from "./find-all/FindAllClientsUseCaseImpl";
import {AppConf} from "../../shared/AppConf";
import {FindByIdUseCase} from "./find-by-id/FindByIdUseCase";
import {FindByIdUseCaseImpl} from "./find-by-id/FindByIdUseCaseImpl";

export class ClientUseCaseFactory {
    public static makeCreateClientUseCase(): CreateClientUseCase {
        return new CreateClientUseCaseImpl(AppConf.repositoryFactory.makeClientRepository());
    }

    public static makeFindAllClientsUseCase(): FindAllClientsUseCase{
        return new FindAllClientsUseCaseImpl(AppConf.repositoryFactory.makeClientRepository())
    }

    public static makeFindByIdUseCase(): FindByIdUseCase {
        return new FindByIdUseCaseImpl(AppConf.repositoryFactory.makeClientRepository());
    }
}