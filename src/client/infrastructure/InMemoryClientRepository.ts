import Client from "../domain/Client";
import {ClientRepository} from "../domain/ClientRepository"
import {Database} from "../../Database";

class InMemoryClientRepository implements ClientRepository {
    private dataBaseConfiguration: Database;


    constructor(dataBaseConfiguration: Database) {
        this.dataBaseConfiguration = dataBaseConfiguration;
    }

    addClient(client: Client): Client {
        return this.dataBaseConfiguration.insertClient(client);
    }

    findById(id: number): Client | undefined {
        return this.dataBaseConfiguration.findClientById(id);
    }

    findAll(): Client[] {
        return this.dataBaseConfiguration.findAllClients();
    }

    findByEmail(email: string): Client | undefined {
        return this.findAll().find(value => value.email === email);
    }
}

export default InMemoryClientRepository;