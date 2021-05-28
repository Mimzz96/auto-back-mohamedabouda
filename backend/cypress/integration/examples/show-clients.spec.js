class showClientsPage {

    showclients() {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/api/clients',
            headers: {
                'X-user-Auth': JSON.stringify(Cypress.env().Token), // auth token shortcut
                'Content-Type': 'application/json'
            },
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body)) // alla kunder
        }))
    }
}
export default showClientsPage