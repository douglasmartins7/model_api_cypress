import { requestTeste } from "../../requisicoes/index"
import testeSchema  from "../../contratos/teste"

describe('', () => {
    let teste

    beforeEach(() => {
        cy.teste().then(response => {
            teste = response.body
        })
    });

    it('', () => {
        requestTeste.teste().should((testeResponse) => {
            expect(testeResponse.status).to.be.eq(200)
            console.log(testeResponse.body)
            return testeSchema.validateAsync(testeResponse.body)
        })
    });
});
