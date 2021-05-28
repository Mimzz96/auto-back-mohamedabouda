class createRoomPage {

    createroom() {

        
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/room/new',
                headers: {
                    'X-user-Auth': JSON.stringify(Cypress.env().Token),
                    'Content-Type': 'application/json'
                },
                body: {
                    "number": "999",
                    "floor": "21",
                    "price": "5000"
                }

            }).then((response => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
            }))
        
    }
}
export default createRoomPage