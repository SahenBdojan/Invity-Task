it('Website check', () => {
    cy.visit('https://invity.io/')
});

it('Website check', () => {
    cy.get('.fw-normal.nav-link > span').click()
});

it('Website check', () => {
    cy.url().should('eq', 'https://invity.io/exchange-crypto')
});

it('Website check', () => {
    cy.get('.form-control-lg').click({ force: true })
    .type('10').should('have.value', '10')
});

it('Website check', () => {
    cy.get('.text-nowrap.btn-md-down-fluid.btn.btn-primary.btn-lg').click({force: true })
    cy.wait(3000)
});

it('Website check', () => {
    cy.url().should('eq', 'https://invity.io/exchange-crypto#quotes')
});

it('Website check', () => {
    cy.get('.badge.bg-success')
    .should('have.css', 'background-color', 'rgb(198, 237, 221)')
});


it('Website check', () => {
    cy.get('.badge')
    .should('have.text', 'Best offerBest offer')
});

it('Website check', () => {
    cy.get('#uncontrolled-tab-example-tabpane-fixedQuote > .trade-quote > :nth-child(1) > :nth-child(1) > .mt-3 > .w-100 > span').click({force: true })
});

it('Website check', () => {
    cy.get('.mb-7 > .mt-2').click()
    cy.wait(3000)
});

it('Website check', () => {
    cy.url().should('eq', 'https://invity.io/exchange-crypto/transact#step1')
    cy.wait(3000)
});

it('Website check', () => {
    cy.get('.p-4 > :nth-child(1) > .col > :nth-child(2)')
    .should('have.text', '10.0000 LTC')
    .should('contain', '10.0000 LTC')
});









