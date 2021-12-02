beforeEach(() => {
});

Given('I navigate to the search engine web address', () => {
    cy.visit('https://google.com');

})
When('I look for the term cypressio',  function () {

    cy.get('input[title="Search"]').type('cypressio{enter}')
})
Then('the first result is related to cypressio', () => {
})
