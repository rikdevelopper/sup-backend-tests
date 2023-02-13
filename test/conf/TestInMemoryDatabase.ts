import {Database} from "../../src/Database";
import Client from "../../src/client/domain/Client";

export class TestInMemoryDatabase implements Database {
    static clients: Client[] = [];
    static idCount: number = 1;

    static SINGLETON: TestInMemoryDatabase = new TestInMemoryDatabase();

    private constructor() {
    }

    findClientById(id: number): Client {
        return TestInMemoryDatabase.clients.find(value => value.id === id);
    }

    findAllClients(): Client[] {
        return TestInMemoryDatabase.clients;
    }

    insertClient(client: Client): Client {
        client.id = TestInMemoryDatabase.idCount++;
        TestInMemoryDatabase.clients.push(client);
        return client;
    }

    clear(): void {
        TestInMemoryDatabase.clients = [];
    }

}