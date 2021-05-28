class showRoomsPage {

    showrooms() {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/api/rooms',
            headers: {
                'X-user-Auth': JSON.stringify(Cypress.env().Token),
                'Content-Type': 'application/json'
            },
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))

    }

    showrooms401() {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/api/rooms',
            headers: {
                'X-user-Auth': JSON.stringify(Cypress.env().Token),
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false,
        }).then((response => {
            expect(response.status).to.eq(401)
            cy.log(JSON.stringify(response.body))
        }))

    }
}
export default showRoomsPage
