class editClientPage {

    editclient() {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:3000/api/client/2',
            headers: {
                'X-user-Auth': JSON.stringify(Cypress.env().Token),
                'Content-Type': 'application/json'
            },
            body: {
                "id": 2,
                "name": "New Tester",
                "email": "newtester@test.se",
                "telephone": "0701701701"
            }

        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }
}
export default editClientPage