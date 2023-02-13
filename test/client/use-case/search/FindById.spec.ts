import {CreateClientRequest} from "../../../../src/client/use-case/create-client/CreateClientRequest";
import {ClientUseCaseFactory} from "../../../../src/client/use-case/ClientUseCaseFactory";
import {assert} from "chai";
import {AppConf} from "../../../../src/shared/AppConf";


const createClientUseCase = ClientUseCaseFactory.makeCreateClientUseCase();
const findByIdUseCase = ClientUseCaseFactory.makeFindByIdUseCase();

describe('Search a client using his/her id', () => {
   it('should return the user', () => {
       AppConf.switchToTest();
       const ludovicRequest: CreateClientRequest = {
           firstName: 'Ludovic',
           lastName: 'BORGES',
           email: 'ludovic.borges@supinfo.com'
       };

       const valentinRequest: CreateClientRequest = {
           firstName: 'Valentin',
           lastName: 'DUJARDIN',
           email: 'valentin.dujardin@supinfo.com'
       };

       createClientUseCase.createClient(ludovicRequest);
       createClientUseCase.createClient(valentinRequest);

       assert.strictEqual('Ludovic', findByIdUseCase.searchById(1).firstName);
       assert.strictEqual('Valentin', findByIdUseCase.searchById(2).firstName);
   })
});