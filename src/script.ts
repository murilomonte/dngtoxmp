import { xmpExtract } from "./xmpExtract.js";
import { xmpParse } from "./xmpParse.js";
import { xmpSave } from "./xmpSave.js";

const dngform = document.getElementById("dngform");
const output = document.querySelector<HTMLElement>(".output");

function downlodButton(file: File) {
  const dlBtn = document.createElement("a");

  const url = URL.createObjectURL(file);
  dlBtn.href = url;
  dlBtn.download = file.name;
  dlBtn.innerText = "baixar";

  output?.appendChild(dlBtn);
}

dngform?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const dnginput = document.querySelector<HTMLInputElement>("#dnginput");
  const files = dnginput?.files;

  if (!files || files.length === 0) return;

  const xmpData = await xmpExtract(files[0]);
  const xmpStr = xmpParse(xmpData, "nome", "grupo");
  const downloadLink = xmpSave(xmpStr, "preset");
  downlodButton(downloadLink);
});
