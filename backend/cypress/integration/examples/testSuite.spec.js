import loginLogoutPage from '../examples/loginLogout.spec'
import showRoomsPage from '../examples/show-rooms.spec'
import createRoomPage from '../examples/create-room.spec'
import showClientsPage from './show-clients.spec'
import createClientPage from './create-client.spec'
import editClientPage from './edit-client.spec'
import showBillsPage from './show-bills.spec'
import createBillPage from './create-bill.spec.js'
import editBillPage from './edit-bill.spec'
import showReservationsPage from './show-reserv.spec'
import createReservationPage from './create-reserv.spec'




describe('Test Suite', () => {
    const a = new loginLogoutPage()
    a.login()


    it('show rooms', () => {
        const b = new showRoomsPage

        cy.authenticate()
            .then(() => {
                b.showrooms()
            }).then(() => {
                a.logout()
            }).then(() => {
                b.showrooms401()
            })

    })

    it('create room', () => {
        const c = new createRoomPage

        cy.authenticate()
            .then(() => {
                c.createroom()
            }).then(() => {
                a.logout()
            })

    })




    it('show clients', () => {
        const d = new showClientsPage

        cy.authenticate()
            .then(() => {
                d.showclients()
            }).then(() => {
                a.logout()
            })

    })

    it('create client', () => {
        const e = new createClientPage

        cy.authenticate()
            .then(() => {
                e.createclient()
            }).then(() => {
                a.logout()
            })

    })

    it('edit client', () => {
        const f = new editClientPage

        cy.authenticate()
            .then(() => {
                f.editclient()
            }).then(() => {
                a.logout()
            })

    })




    it('show bills', () => {
        const g = new showBillsPage

        cy.authenticate()
            .then(() => {
                g.showbills()
            }).then(() => {
                a.logout()
            })

    })

    it('create bill', () => {
        const h = new createBillPage

        cy.authenticate()
            .then(() => {
                h.createbill()
            }).then(() => {
                a.logout()
            })
    })

    it('edit bill', () => {
        const i = new editBillPage

        cy.authenticate()
            .then(() => {
                i.editbill()
            }).then(() => {
                a.logout()
            })

    })




    it('show reservations', () => {
        const j = new showReservationsPage

        cy.authenticate()
            .then(() => {
                j.showreservations()
            }).then(() => {
                a.logout()
            })

    })

    it('create reservation', () => {
        const h = new createReservationPage

        cy.authenticate()
            .then(() => {
                h.createreservation()
            }).then(() => {
                a.logout()
            })

    })




})

