class loginLogoutPage {

    login() {
        Cypress.Commands.add('authenticate', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/login',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: {
                    "username": "tester02",
                    "password": "sppm7qncqmVft5uECkwjLcLdEJGzM3Cw"
                }
            })
                .then((response => {
                    expect(response.status).to.eq(200)
                    Cypress.env({ Token: response.body }) // auth token
                    cy.log(response.body)
                }))
        })
    }

    logout() {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/logout',
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
export default loginLogoutPage


