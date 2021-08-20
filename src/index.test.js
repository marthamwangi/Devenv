import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

/**
 * In describe(bdd, tdd)
TDD focuses on how the functionality is implemented. BDD focuses on the behavior of an application for the end user.
 */
describe("our first test", () => {
  /**
   * Describe a specification or test-case with the given title and callback fn acting as a thunk.
   * it(title, fn)
   */
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should have users", () => {
    /**The fs module enables interacting with the file system in a way modeled on standard POSIX functions. */
    const indexFile = fs.readFileSync("./src/index.html", "utf-8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(indexFile);
    const h1Element = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1Element.innerHTML).to.equal("Users");
    dom.window.close();
  });
});
