import {CreateUserUseCase} from "../../src/hotel/user/use-cases/CreateUserUseCase";
import {Role} from "../../src/hotel/user/Role";
import {assert} from "chai";
import {BasicUCResponse} from "../../src/shared/BasicUCResponse";
import {CreateUserUCResponse} from "../../src/hotel/user/use-cases/create-user-u-c-response";
import {AppConf} from "../../src/shared/AppConf";

describe('User should have email, pseudo, password and role', () => {
    beforeEach(()=> {
        AppConf.switchToTest();
    })
    it('Create user with wrong email should throw', () => {
        const useCase: CreateUserUseCase = new CreateUserUseCase();
        const email: string = 'errrtecfgvad';
        const pseudo: string = 'batman';
        const pwd: string = 'rudy';
        const role: Role = Role.GUEST;
        const response: BasicUCResponse = useCase.addUser(email, pseudo, pwd, role);
        assert.isFalse(response.hasSucceeded());
    })

    it('Create user with undefined or empty pseudo should not succeed', () => {
        const useCase: CreateUserUseCase = new CreateUserUseCase();
        const email: string = 'batman.rudy@batman.com';
        const pseudo: string = '';
        const pwd: string = 'rudy';
        const role: Role = Role.GUEST;
        const response: BasicUCResponse = useCase.addUser(email, pseudo, pwd, role);
        assert.isFalse(response.hasSucceeded());
    })

    it('Create user with undefined or empty pwd should not succeed', () => {
        const useCase: CreateUserUseCase = new CreateUserUseCase();
        const email: string = 'batman.rudy@batman.com';
        const pseudo: string = 'batman';
        const pwd: string = '';
        const role: Role = Role.GUEST;
        const response: BasicUCResponse = useCase.addUser(email, pseudo, pwd, role);
        assert.isFalse(response.hasSucceeded());
    })

    it('Create user with same values for pwd and pseudo should not succeed', () => {
        const useCase: CreateUserUseCase = new CreateUserUseCase();
        const email: string = 'batman.rudy@batman.com';
        const pseudo: string = 'batman';
        const pwd: string = 'batman';
        const role: Role = Role.GUEST;
        const response: BasicUCResponse = useCase.addUser(email, pseudo, pwd, role);
        assert.isFalse(response.hasSucceeded());
    })

    it('Create user should work', () => {
        const useCase: CreateUserUseCase = new CreateUserUseCase();
        const email: string = 'batman.rudy@batman.fr';
        const pseudo: string = 'batman';
        const pwd: string = 'leaaaaaaa';
        const role: Role = Role.GUEST;
        const response: BasicUCResponse = useCase.addUser(email, pseudo, pwd, role)
        assert.isTrue(response.hasSucceeded());
    })

    it('Create user should return ID of created user', () => {
        const useCase: CreateUserUseCase = new CreateUserUseCase();
        const email: string = 'batman.rudy@batman.fr';
        const pseudo: string = 'batman';
        const pwd: string = 'leaaaaaaa';
        const role: Role = Role.GUEST;
        const response: CreateUserUCResponse = useCase.addUser(email, pseudo, pwd, role)
        assert.isTrue(response.hasSucceeded());
        assert.notEqual(response.userId, undefined);
    })
})