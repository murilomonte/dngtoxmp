import { xmpExtract } from "./xmpExtract.js";
import { xmpParse } from "./xmpParse.js";
import { xpmCreateFile } from "./xmpCreateFile.js";
import { dropContainer } from "./dropcontainer.js";
import { easter } from "./easter.js";

const dngform = document.getElementById("dngform");
const output = document.querySelector<HTMLElement>(".output");

function downlodButton(file: File) {
  output!.innerHTML = "";
  const dlBtn = document.createElement("a");

  const url = URL.createObjectURL(file);
  dlBtn.classList.add("button");
  output?.classList.remove("disabled");
  dlBtn.href = url;
  dlBtn.download = file.name;
  dlBtn.innerText = `Download ${file.name}`;

  output?.appendChild(dlBtn);
}

dngform?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const presetName = document.querySelector<HTMLInputElement>("#presetName");
  const groupName = document.querySelector<HTMLInputElement>("#groupName");
  const dnginput = document.querySelector<HTMLInputElement>("#dnginput");

  try {
    if (
      !presetName ||
      presetName.value.length < 3 ||
      !groupName ||
      groupName.value.length < 3
    ) {
      throw new Error("The preset must have a name and a group.");
    }

    const files = dnginput?.files;

    if (!files || files.length === 0) {
      throw new Error("Insert a valid file.");
    }

    const xmpData = await xmpExtract(files[0]);
    const xmpStr = xmpParse(xmpData, presetName.value, groupName.value);
    const xmpFile = xpmCreateFile(xmpStr, presetName.value, groupName.value);

    downlodButton(xmpFile);
  } catch (err) {
    output!.innerHTML = "";
    if (err instanceof Error) {
      const errorDiv = document.createElement("div");
      errorDiv.innerText = err.message;
      output?.appendChild(errorDiv);
      output?.classList.remove("disabled");
    }
  }
});

/* DROP CONTAINER */
dropContainer();

/* SHHHHH */
easter();
