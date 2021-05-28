class createReservationPage {

    createreservation() {

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/reservation/new',
            headers: {
                'X-user-Auth': JSON.stringify(Cypress.env().Token),
                'Content-Type': 'application/json'
            },
            body: {
                "start": "2021-04-04",
                "end": "2021-05-05",
            }

        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))

    }
}
export default createReservationPage
