class createBillPage {

    createbill() {

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/bill/new',
            headers: {
                'X-user-Auth': JSON.stringify(Cypress.env().Token),
                'Content-Type': 'application/json'
            },
            body: {
                "value": "10900",
            }

        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))

    }
}
export default createBillPage
