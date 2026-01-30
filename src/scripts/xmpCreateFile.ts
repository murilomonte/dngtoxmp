export function xpmCreateFile(xmpData: string, name: string, group: string) {
  const groupName = group.toLowerCase().trim().replace(" ", "-");
  const presetName = name.toLowerCase().trim().replace(" ", "-");

  const file = new File(
    [xmpData],
    sanitizeFilename(`${groupName}-${presetName}.xmp`),
    {
      type: "text/xmp; charset=utf-8",
    },
  );

  return file;
}

function sanitizeFilename(name: string) {
  return name.replace(/[^A-Za-z0-9._-]+/g, "").replace(/^\.+/, "");
}
