class createClientPage {

    createclient() {



        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/client/new',
            headers: {
                'X-user-Auth': JSON.stringify(Cypress.env().Token),
                'Content-Type': 'application/json'
            },
            body: {
                "name": "Tester Testson",
                "email": "test2021@test.se",
                "telephone": "0700700700"
            }

        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))

    }
}
export default createClientPage

