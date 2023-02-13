import Client from "./client/domain/Client";
import {User} from "./hotel/user/domain/User";

export interface Database {
    insertClient(client: Client): Client;

    findClientById(id: number): Client | undefined;

    findAllClients(): Client[];

    clear(): void;

    insertUser(user: User): User;
}