import {User} from "./User";

export interface UserRepository {
    createUser(user: User): User
}