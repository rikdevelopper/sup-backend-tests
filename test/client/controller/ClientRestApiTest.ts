import {assert} from "chai";
import * as supertest from "supertest"
import app from "../../../src/server";
import {AppConf} from "../../../src/shared/AppConf";

describe('CREATE CLIENT API TEST', () => {
    before(() => AppConf.switchToTest());
    beforeEach(() => AppConf.database.clear());
    after(() => app.shutdown());
    it('POST /clients should successfully create client', async () => {
        await supertest(app.app)
            .post('/clients')
            .send({firstName: 'Prenom', lastName: 'Nom', email: 'supinfo@supinfo.com'})
            .expect(200)
            .then(response => {
                assert.strictEqual(response.body.firstName, 'Prenom');
            });
    });
    it('POST /clients should return 400 create client', async () => {
        await supertest(app.app)
            .post('/clients')
            .send({firstName: 'Prenom', lastName: 'Nom', email: 'supinfo@supinfo'})
            .expect(400)
            .then(response => {
                assert.strictEqual(response.text, 'The email is not valid.');
            });
    });
});