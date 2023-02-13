import {Role} from "../Role";
import {CreateUserUCResponse} from "./create-user-u-c-response";
import {UserRepository} from "../domain/UserRepository";
import {AppConf} from "../../../shared/AppConf";
import {InMemoryUserRepository} from "../infrastructure/InMemoryUserRepository";
import {User} from "../domain/User";

export class CreateUserUseCase {
    userRepository: UserRepository = new InMemoryUserRepository(AppConf.database);
    static regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    addUser(email: string, pseudo: string, pwd: string, role: Role): CreateUserUCResponse {
        const response: CreateUserUCResponse = new CreateUserUCResponse();
        this.validateData(email, pseudo, pwd, response);
        if (!response.hasErrors()) {
            const user: User = new User(pseudo, email, pwd, role);
            this.userRepository.createUser(user);
            response.userId = user.id;
        }
        return response;
    }

    private validateData(email: string, pseudo: string, pwd: string, response: CreateUserUCResponse) {
        if (email === undefined || !CreateUserUseCase.regexp.test(email))
            response.addError('The email address is not valid');
        if (pseudo === undefined || pseudo.trim().length === 0)
            response.addError('The pseudo can not be empty or undefined');
        if (pwd === undefined || pwd.trim().length === 0)
            response.addError('The password can not be null or empty');
        if (pwd === pseudo) response.addError('The password can not be same as the pseudo.');
    }
}