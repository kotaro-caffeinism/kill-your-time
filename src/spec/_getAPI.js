const { expect } = require("chai");
const Functions = require("./copy_getAPI");

describe("getAPI test", () => {
  describe("getJoke", () => {
    it("should not return undefined", () => {
      const result = Functions.getJoke();
      expect(result).to.not.equal("undefined");
    });
  });

  describe("getAdvice", () => {
    it("should not return undefined", () => {
      const result = Functions.getAdvice();
      expect(result).to.not.equal("undefined");
    });
  });

  describe("getBuzzword", () => {
    it("should not return undefined", () => {
      const result = Functions.getBuzzword();
      expect(result).to.not.equal("undefined");
    });
  });

  describe("getActivity", () => {
    it("should not return undefined", () => {
      const result = Functions.getActivity();
      expect(result).to.not.equal("undefined");
    });
  });
});
