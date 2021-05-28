class editBillPage {

    editbill() {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:3000/api/bill/1',
            headers: {
                'X-user-Auth': JSON.stringify(Cypress.env().Token),
                'Content-Type': 'application/json'
            },
            body: {
                "id": 1,
                "value": "55600",
            }

        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }
}
export default editBillPage