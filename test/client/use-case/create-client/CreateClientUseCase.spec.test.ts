import {assert, expect} from "chai";
import {ClientResponse} from "../../../../src/client/use-case/ClientResponse";
import {CreateClientRequest} from "../../../../src/client/use-case/create-client/CreateClientRequest";
import {ClientUseCaseFactory} from "../../../../src/client/use-case/ClientUseCaseFactory";
import {AppConf} from "../../../../src/shared/AppConf";

AppConf.switchToTest();

const VALID_FIRST_NAME = 'FIRST NAME';
const VALID_LAST_NAME = 'LAST NAME';
const VALID_EMAIL = 'supinfo@supinfo.com';
const createClientUseCase = ClientUseCaseFactory.makeCreateClientUseCase();

describe('User first name tests', () => {
    before(() => AppConf.database.clear());
    afterEach(() => AppConf.database.clear());
    it('should throw error on create user with empty first name', () => {
        expect(() => createClientUseCase.createClient({
            firstName: '',
            lastName: VALID_LAST_NAME,
            email: VALID_EMAIL
        })).to.throw('The firstname can not be null');
    });
    it('should throw error on create user with undefined first name', () => {
        assert.throw(() => createClientUseCase.createClient({
            firstName: undefined,
            lastName: VALID_LAST_NAME,
            email: VALID_EMAIL
        }));
    });
    it('should throw error on create user with null first name', () => {
        assert.throw(() => createClientUseCase.createClient({
            firstName: null,
            lastName: VALID_LAST_NAME,
            email: VALID_EMAIL
        }));
    });
});

describe('User last name tests', () => {
    before(() => AppConf.database.clear());
    afterEach(() => AppConf.database.clear());
    it('should throw error on create user with empty last name', () => {
        assert.throw(() => createClientUseCase.createClient({
                firstName: VALID_FIRST_NAME,
                lastName: '',
                email: VALID_EMAIL
            })
        );
    });
    it('should throw error on create user with undefined last name', () => {
        assert.throw(() => createClientUseCase.createClient({
            firstName: VALID_FIRST_NAME,
            lastName: undefined,
            email: VALID_EMAIL
        }));
    });
    it('should throw error on create user with null last name', () => {
        assert.throw(() => createClientUseCase.createClient({
            firstName: VALID_FIRST_NAME,
            lastName: null,
            email: VALID_EMAIL
        }));
    });
});

describe('User email tests', () => {
    before(() => AppConf.database.clear());
    afterEach(() => AppConf.database.clear());
    it('should throw error on create user with empty email.', () => {
        assert.throw(() => createClientUseCase.createClient({
                firstName: VALID_FIRST_NAME,
                lastName: VALID_LAST_NAME,
                email: ''
            })
        );
    });
    it('should throw error on create user with undefined email', () => {
        assert.throw(() => createClientUseCase.createClient({
            firstName: VALID_FIRST_NAME,
            lastName: VALID_LAST_NAME,
            email: undefined
        }));
    });
    it('should throw error on create user with null email', () => {
        assert.throw(() => createClientUseCase.createClient({
            firstName: VALID_FIRST_NAME,
            lastName: VALID_LAST_NAME,
            email: null
        }));
    });
    it('should throw error on create user with invalid email', () => {
        assert.throw(() => createClientUseCase.createClient({
            firstName: VALID_FIRST_NAME,
            lastName: VALID_LAST_NAME,
            email: 'test'
        }));
    });
    it('should be ok on create user with valid details', () => {
        const client: ClientResponse = createClientUseCase.createClient({
            firstName: VALID_FIRST_NAME,
            lastName: VALID_LAST_NAME,
            email: VALID_EMAIL
        });
        assert.strictEqual(VALID_LAST_NAME, client.lastName);
        assert.strictEqual(VALID_FIRST_NAME, client.firstName);
        assert.strictEqual(VALID_EMAIL, client.email);
    });

    it('should throw on create user with existing email', () => {
        const request: CreateClientRequest = {
            firstName: VALID_FIRST_NAME,
            lastName: VALID_LAST_NAME,
            email: VALID_EMAIL
        };
        createClientUseCase.createClient(request);
        assert.throw(() => createClientUseCase.createClient(request));

    });
});