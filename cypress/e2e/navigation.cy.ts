/// <reference types="cypress"/>

const development = "localhost:3000";

describe("Given the full FakeNews app", () => {
  describe("When loading it at the root path ('/')", () => {
    beforeEach(() => {
      cy.visit(development);
    });

    it("Then it should show 100 news to the user", () => {
      const numberOfNews = 100;

      cy.get(".news-list__news").should("have.length", numberOfNews);
    });

    it("When the user clicks the delete button, there should be only 99 news left", () => {
      const numberOfNews = 99;

      cy.get(".button--icon.news__delete").last().click();

      cy.get(".news-list__news").should("have.length", numberOfNews);
    });

    it("When the user clicks the update button, it should redirect to update that specific news", () => {
      cy.get(".button--icon.news__update").last().click();

      cy.location().should((location) => {
        expect(location.pathname).to.eq("/update/100");
      });
    });
  });

  describe("When loading a random fake page ('/fake-page')", () => {
    it("Then it should display a not found page", () => {
      cy.visit(`${development}/fake-page`);

      cy.get("h1").should("have.text", "Page not found (404)");
    });
  });

  describe("When loading the update page ('/update/100')", () => {
    beforeEach(() => {
      cy.visit(development);

      cy.get(".button--icon.news__update").last().click();

      cy.location().should((location) => {
        expect(location.pathname).to.eq("/update/100");
      });
    });

    const { name, author, body } = {
      name: "Name",
      author: "Author",
      body: "Body",
    };

    it("If the update form is filled incorrectly, then it should display errors", () => {
      cy.get("#title").clear();
      cy.get("#body").clear();
      cy.get("#author").clear().type("{enter}");

      cy.get(".errors__message").should(
        "have.length",
        [name, author, body].length
      );

      cy.get(".errors__message")
        .first()
        .should("have.text", '"title" is not allowed to be empty');
      cy.get(".errors__message")
        .last()
        .should("have.text", '"body" is not allowed to be empty');
    });

    it("If the update form is filled correctly, then it should update the news and redirect", () => {
      cy.get("#title").type(name);
      cy.get("#body").type(body);
      cy.get("#author").type(`${author}{enter}`);

      cy.location().should((location) => {
        expect(location.pathname).to.eq("/news");
      });

      cy.get(".news__author").last().contains(author);
      cy.get(".news__title").last().contains(name);
      cy.get(".news__body").last().contains(body);
    });
  });

  describe("When loading the log in page ('/log-in')", () => {
    beforeEach(() => {
      cy.visit(development);

      cy.get("[data-testid=burger__icon]").click();
      cy.get(".navigation__link").eq(1).click();
    });

    const { email, password } = {
      email: "Name",
      password: "{enter}",
    };

    it("If the log in form is filled incorrectly, then it should display errors ", () => {
      cy.get("#email").type(email);
      cy.get("#password").type(password);

      cy.get(".errors__message")
        .first()
        .should("have.text", '"email" must be a valid email');
      cy.get(".errors__message")
        .last()
        .should("have.text", '"password" is not allowed to be empty');
    });

    it("If the log in form is filled correctly, then it redirect the user", () => {
      const { validEmail, validPassword } = {
        validEmail: "name@gmail.com",
        validPassword: "Password{enter}",
      };

      cy.get("#email").type(validEmail);
      cy.get("#password").type(validPassword);
    });
  });
});
