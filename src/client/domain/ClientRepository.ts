import Client from "./Client";

export interface ClientRepository {
    addClient(client: Client): Client;
    findById(id: number): Client | undefined;
    findAll(): Client[];

    findByEmail(email: string): Client | undefined;
}
