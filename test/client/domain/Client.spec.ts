import Client from "../../../src/client/domain/Client";
import {assert} from "chai";

const VALID_FIRST_NAME = 'FIRST NAME';
const VALID_LAST_NAME = 'LAST NAME';
const VALID_EMAIL = 'supinfo@supinfo.com';


describe('User first name tests', () => {
    it('should throw error on create user with empty first name', () => {
        assert.throw(() => new Client('', VALID_LAST_NAME, VALID_EMAIL));
    });
    it('should throw error on create user with undefined first name', () => {
        assert.throw(() => new Client(undefined, VALID_LAST_NAME, VALID_EMAIL));
    });
    it('should throw error on create user with undefined first name', () => {
        assert.throw(() => new Client(null, VALID_LAST_NAME, VALID_EMAIL));
    });
});

describe('User last name tests', () => {
    it('should throw error on create user with empty last name', () => {
        assert.throw(() => new Client(VALID_FIRST_NAME, '', VALID_EMAIL));
    });
    it('should throw error on create user with undefined last name', () => {
        assert.throw(() => new Client(VALID_FIRST_NAME, undefined, VALID_EMAIL));
    });
    it('should throw error on create user with undefined last name', () => {
        assert.throw(() => new Client(VALID_FIRST_NAME, undefined, VALID_EMAIL));
    });
});

describe('User email tests', () => {
    it('should throw error on create user with empty email.', () => {
        assert.throw(() => new Client(VALID_FIRST_NAME, VALID_LAST_NAME, ''));
    });
    it('should throw error on create user with undefined email', () => {
        assert.throw(() => new Client(VALID_FIRST_NAME, VALID_LAST_NAME, undefined));
    });
    it('should throw error on create user with undefined email', () => {
        assert.throw(() => new Client(VALID_FIRST_NAME, VALID_LAST_NAME, null));
    });
    it('should throw error on create user with invalid email', () => {
        assert.throw(() => new Client(VALID_FIRST_NAME, VALID_LAST_NAME, 'test'));
    });
    it('should be ok on create user with valid details', () => {
        const client: Client = new Client(VALID_FIRST_NAME, VALID_LAST_NAME, VALID_EMAIL);
        assert.strictEqual(VALID_LAST_NAME, client.lastName);
        assert.strictEqual(VALID_FIRST_NAME, client.firstName);
        assert.strictEqual(VALID_EMAIL, client.email);
    });
});