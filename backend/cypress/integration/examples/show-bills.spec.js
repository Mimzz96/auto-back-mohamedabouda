class showBillsPage {

    showbills() {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/api/bills',
            headers: {
                'X-user-Auth': JSON.stringify(Cypress.env().Token),
                'Content-Type': 'application/json'
            },
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }
}
export default showBillsPage