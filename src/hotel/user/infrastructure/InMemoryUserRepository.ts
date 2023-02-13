import {UserRepository} from "../domain/UserRepository";
import {User} from "../domain/User";
import {Database} from "../../../Database";

export class InMemoryUserRepository implements UserRepository {

    private mySql: Database;

    constructor(dataBaseConfiguration: Database) {
        this.mySql = dataBaseConfiguration;
    }
    createUser(user: User): User {
        this.mySql.insertUser(user);
        return user;
    }

}