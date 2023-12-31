import { BASE_URL, MUNDO_COLORADO_URL } from "../../fixtures/variables";

describe("Testing the Sport Club Internacional ticker purchase flow", () => {
  it("Visiting the Internacional Website", () => {
    cy.visit(BASE_URL);
    cy.viewport(1980, 1080);

    cy.url().should("eq", BASE_URL);

    cy.get(
      ".Header__CTA-sc-1bghfs2-6 > .Header__MembershipLink-sc-1bghfs2-11 > img"
    ).click();

    cy.url().should("eq", MUNDO_COLORADO_URL);

    cy.get(".button-accept-cookie").click();

    cy.wait(1000);

    cy.get("#input-19").type(Cypress.env("username"));

    cy.get("#input-22").type(Cypress.env("password"),{ log: false });;

    cy.get(".button-login").click();

    cy.url().should("eq", "https://socio.internacional.com.br/pt/hub");

    cy.get(".nav-list").children().first().children().first().click();

   cy.get(".col > div > .cta-button").click({ force: true });

  });
});
