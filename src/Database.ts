import Client from "./client/domain/Client";

export interface Database {
    insertClient(client: Client): Client;

    findClientById(id: number): Client | undefined;

    findAllClients(): Client[];

    clear(): void;
}