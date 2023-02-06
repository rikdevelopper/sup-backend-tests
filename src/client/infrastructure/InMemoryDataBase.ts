import Client from "../domain/Client";
import {Database} from "../../Database";

export class InMemoryDataBase implements Database {
    static clients: Client[] = [];
    static idCount: number = 1;

    static SINGLETON: InMemoryDataBase = new InMemoryDataBase();

    private constructor() {
    }

    findClientById(id: number): Client {
        return InMemoryDataBase.clients.find(value => value.id === id);
    }

    findAllClients(): Client[] {
        return InMemoryDataBase.clients;
    }

    insertClient(client: Client): Client {
        client.id = InMemoryDataBase.idCount++;
        InMemoryDataBase.clients.push(client);
        return client;
    }

    clear(): void {
        throw new Error('Can not clear production database.');
    }
}