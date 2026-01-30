export function dropContainer() {
  const dropContainer = document.getElementById("dropContainer");
  const dnginput = document.querySelector<HTMLInputElement>("#dnginput");

  dropContainer?.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dropContainer?.addEventListener("dragover", (e) => {
    dropContainer.classList.add("drag-active");
  });

  dropContainer?.addEventListener("dragleave", (e) => {
    dropContainer.classList.remove("drag-active");
  });

  dropContainer?.addEventListener("drop", (e) => {
    e.preventDefault();
    dropContainer.classList.remove("drag-active");
    if (!e.dataTransfer?.files) return;
    dnginput!.files = e.dataTransfer?.files;
  });
}
