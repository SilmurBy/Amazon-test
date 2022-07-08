describe('Amazon', function () {
    it('can find and add game console', function () {

        cy.getPage("/");

        cy.setTextToElement(".//input[@id='twotabsearchtextbox']", "Playstation Classic Console");

        cy.clickOnElement(".//input[@id='nav-search-submit-button']");

        cy.clickOnElement("(.//img[contains(@alt,'Playstation')])[1]");

        cy.clickOnElement(".//a[@title='See All Buying Options']");

        cy.clickOnElement(".//input[@name='submit.addToCart']");

        cy.checkVisibilityOfElement(".//div[text()='Added']");

        cy.clickOnElement(".//i[@aria-label='aod-close']");

        cy.clickOnElement(".//a[@id='nav-cart']");

        cy.checkContainsTextInElement(".//span[@class='a-truncate-cut']", "Playstation Classic Console");
    });
});