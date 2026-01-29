export function xmpSave(xmpData: string, name: string, group: string) {
  const file = new File([xmpData], `${group}-${name}.xmp`, {
    type: "text/xmp; charset=utf-8",
  });

  return file;
}
