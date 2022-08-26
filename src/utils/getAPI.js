// jokes378個
const jokes = require("../jokes/index.json");

export function getJoke() {
  const num = Math.floor(Math.random() * 379);
  return jokes[num].setup + " -- " + jokes[num].punchline;
}

export async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  return await res.json();
}

export async function getBuzzword() {
  const res = await fetch("https://corporatebs-generator.sameerkumar.website/");
  return await res.json();
}

export async function getActivity() {
  const res = await fetch("https://www.boredapi.com/api/activity/");
  return await res.json();
}
