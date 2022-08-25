// テスト用
const jokes = require("../jokes/index.json");

class Functions {
  getJoke() {
    const num = Math.floor(Math.random() * 379);
    return jokes[num].setup + " -- " + jokes[num].punchline;
  }

  async getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    return await res.json();
  }

  async getBuzzword() {
    const res = await fetch(
      "https://corporatebs-generator.sameerkumar.website/"
    );
    return await res.json();
  }

  async getActivity() {
    const res = await fetch("https://www.boredapi.com/api/activity/");
    return await res.json();
  }
}

module.exports = new Functions();
