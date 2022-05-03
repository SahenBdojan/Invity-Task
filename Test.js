/*

**Description:**

1. Write the following **test case** using Cypress
2. Test **must** pass at least 5 times consecutively

---
1. OK
2. NOK -> Test neprosel kvuli spatnemu textu v zaverecnem assertu ani jednou, test take nebyl odevzdany ve spustitelne podobe

---

Steps:
1. navigate to the Invity web
2. verify that you’re indeed on a correct url (https://invity.io/)
3. navigate to `Exchange crypto` page
4. fill in the exchange form in order to change `10 LTC` to `BTC`
5. click on `Compare offers`
6. wait for the offers to appear
7. select the row containing `Best deal` label and click on `Get this deal`
8. verify that you’re on the page containing `So here's the deal`
9. verify that the `LTC` amount in the header of the page is indeed set to `10`

---

1. OK
2. NOK -> assert mel probehnout na zacatku testu na url "https://invity.io/"
3. OK
4. OK
5. OK
6. OK
7. OK
8. NOK -> chybi overeni, ze stranka obsahuje "So here's the deal"
9. NOK -> Text uvnitr spanu ma podobnu "LTC 10.000", v assertu je to prohozene, a tudiz assert nemuze projit
*/


Cypress._.times(5, () => {
    it('Run it 5 times', () => {
        cy.visit('https://invity.io/')
        // v tomto kroku by se vice hodil pouzit zobrazeny text a cy.contains(), navbar vetsinou zustava konstantni.
        cy.get('.fw-normal.nav-link > span').click()
        // nejednotne razeni chain eventu 1, styl by mel byt jednotny
        cy.url().should('eq', 'https://invity.io/exchange-crypto')
        // nejednotne razeni chain eventu 2, styl by mel byt jednotny
        cy.get('.form-control-lg').click({ force: true })
            .type('10').should('have.value', '10')
        // tady bych zase pouzil text zobrazeny v buttonu. Staci, aby jen jedna classa zmizela a selektor prestane byt platny.
        cy.get('.text-nowrap.btn-md-down-fluid.btn.btn-primary.btn-lg').click({force: true })
        // staticky wait by se mel pouzivat az jako uplne posledni zachrana. V celem testu sly pouzit dynamicke waity
        cy.wait(3000)
        cy.url().should('eq', 'https://invity.io/exchange-crypto#quotes')
        cy.get('.badge.bg-success')
            .should('have.css', 'background-color', 'rgb(198, 237, 221)')
        cy.get('.badge')
            .should('have.text', 'Best offerBest offer')
        // nejednotne razeni chain eventu 3, styl by mel byt jednotny
        // selector je velmi nestabilni, situace se s pomoci cypressiho ".then()" callbacku dala vyresit elegantnej
        cy.get('#uncontrolled-tab-example-tabpane-fixedQuote > .trade-quote > :nth-child(1) > :nth-child(1) > .mt-3 > .w-100 > span').click({force: true })
        cy.get('.mb-7 > .mt-2').click()
        cy.url().should('eq', 'https://invity.io/exchange-crypto/transact#step1')
        
        cy.get('.p-4 > :nth-child(1) > .col > :nth-child(2)')
            .should('have.text', '10.0000 LTC')
            .should('contain', '10.0000 LTC')
      }); // nejednotne pouzivani stredniku
  });



// Bellow code will run only one time.


/* it('Run it 5 times', () => {
    cy.visit('https://invity.io/')
    cy.get('.fw-normal.nav-link > span').click()
    cy.url().should('eq', 'https://invity.io/exchange-crypto')
    cy.get('.form-control-lg').click({ force: true })
        .type('10').should('have.value', '10')
    cy.get('.text-nowrap.btn-md-down-fluid.btn.btn-primary.btn-lg').click({force: true })
    cy.wait(3000)
    cy.url().should('eq', 'https://invity.io/exchange-crypto#quotes')
    cy.get('.badge.bg-success')
        .should('have.css', 'background-color', 'rgb(198, 237, 221)')
    cy.get('.badge')
        .should('have.text', 'Best offerBest offer')
    cy.get('#uncontrolled-tab-example-tabpane-fixedQuote > .trade-quote > :nth-child(1) > :nth-child(1) > .mt-3 > .w-100 > span').click({force: true })
    cy.get('.mb-7 > .mt-2').click()
    cy.url().should('eq', 'https://invity.io/exchange-crypto/transact#step1')
    cy.get('.p-4 > :nth-child(1) > .col > :nth-child(2)')
        .should('have.text', '10.0000 LTC')
        .should('contain', '10.0000 LTC')
  }); */
