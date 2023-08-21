describe('', async () => {
  it('should access detailed page of the first product correctly', () => {
    cy.visit('http://localhost:3000/items')

    cy.findByTestId('search-input').type('iphone')

    cy.findByTestId('search-button').click()

    cy.findAllByTestId('item').should('have.length', 4)

    cy.findAllByTestId('item')
      .first()
      .findByTestId('item-title')
      .invoke('text')
      .then((text) => {
        cy.wrap(text).as('title')
      })

    cy.findAllByTestId('item').first().click()

    cy.get('@title').then((title) => {
      cy.findByTestId('detailed-product-title').should('have.text', title)
    })
  })
})
