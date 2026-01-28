import ExifReader from "exifreader";

// Extrair exif, validar o retorno, remover caracteres indesejados, retornar a string pura.
export async function xmpExtract(file: File) {
  const tags = await ExifReader.load(file, { async: true, expanded: true });

  if (!tags.xmp) {
    throw new Error("Imagem nao possui dados xmp");
  }

  return tags.xmp._raw.replaceAll("\n", "");
}

