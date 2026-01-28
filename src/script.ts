import { xmpExtract } from "./xmpExtract.js";
import { xmpParser } from "./xmpParser.js";

const dngform = document.getElementById("dngform");
const dngbutton = document.getElementById("dngsubmit");

dngform?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const dnginput = document.querySelector<HTMLInputElement>("#dnginput");
  const files = dnginput?.files;

  if (!files || files.length === 0) return;

  const xmpstr = await xmpExtract(files[0]);
  const xmp = xmpParser(xmpstr, 'nome', 'grupo')
});
