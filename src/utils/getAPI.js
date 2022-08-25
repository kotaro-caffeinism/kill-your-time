// jokes378個
const jokes = require("../jokes/index.json");

export function joke() {
  const num = Math.floor(Math.random() * 379);
  return jokes[num].setup + " -- " + jokes[num].punchline;
}

export function advice() {
  return fetch("https://api.adviceslip.com/advice").then((res) => res.json());
}

export function buzzword() {
  return fetch("https://corporatebs-generator.sameerkumar.website/").then(
    (res) => res.json()
  );
}

export function activity() {
  return fetch("https://www.boredapi.com/api/activity/").then((res) =>
    res.json()
  );
}
