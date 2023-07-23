describe('Amazon', function () {
    it('can find and add game console', function () {
        cy.getPage("/");

        cy.setTextToElement("//input[@id='twotabsearchtextbox']", "Playstation Classic Console");

        cy.clickOnElement("//input[@id='nav-search-submit-button']");

        cy.clickOnElement("(//span[contains(text(),'Sony PlayStation Classic')])[1]");

        cy.clickOnElement("//input[@name='submit.add-to-cart']");

        cy.checkVisibilityOfElement("//span[contains(text(),'Added to Cart')]");

        cy.clickOnElement("//header[@id='navbar-main']//a[contains(text(),'Go to Cart')]");

        cy.checkContainsTextInElement("//span[@class='a-truncate-cut']", "Sony PlayStation Classic");
    });
});