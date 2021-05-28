const homePage = require('../fixtures/homePage.json');
const manageYourMoneyPage = require('../fixtures/manageYourMoney.json');
const loginPage = require('../fixtures/loginPage.json')


describe("Visit the thinkmoney website", () => {
	it("should see the thinkmoney homepage", () => {
		cy.visit("/");
		cy.get(homePage.acceptCookie).click();
		cy.contains(homePage.h1Message);
	});

	it("should see the manage your money page", () => {
		cy.get(homePage.logInButton).click();
		cy.url().should("include", manageYourMoneyPage.manageYourMoneyUrl);
		cy.get(manageYourMoneyPage.continueToLoginHrefLink).invoke(
			"removeAttr",
			"target"
		);
		cy.get(manageYourMoneyPage.continueToLogin).click();
		
	});

	it("should see the login page", () => {
		cy.url().should("include", loginPage.loginPageUrl);
		cy.contains(loginPage.continueButton);
		cy.contains(loginPage.registerButton);
	});
});