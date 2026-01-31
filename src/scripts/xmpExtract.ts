import ExifReader from "exifreader";

export async function xmpExtract(file: File) {
  try {
    const tags = await ExifReader.load(file, {
      async: true,
      expanded: true,
    });

    if (!tags.xmp) {
      throw new Error("The image does not contain xmp data.");
    }

    return tags.xmp._raw.replaceAll("\n", "");
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error(
        "An error occurred while extracting the metadata from the file.",
      );
    }
  }
}
