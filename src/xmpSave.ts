// transformar a string em um blob para salvar

export function xmpSave(xmpData: string, name: string) {
  const file = new File([xmpData], `${name}.xmp`, {
    type: "text/xmp; charset=utf-8",
  });

  return file;
}
