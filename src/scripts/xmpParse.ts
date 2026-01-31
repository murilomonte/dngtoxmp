// Fazer o parse para xml, adicionar os dados de autor e grupo, voltar para string

const NS = {
  crs: "http://ns.adobe.com/camera-raw-settings/1.0/",
  rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
};

export function xmpParse(xmpstr: string, name: string, group: string) {
  try {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmpstr, "application/xml");

    const rdfDescription = xml.getElementsByTagNameNS(NS.rdf, "Description")[0];

    // Adicionando autor
    const crsName = xml.createElementNS(NS.crs, "crs:Name");
    const rdfNameAlt = xml.createElementNS(NS.rdf, "rdf:Alt");
    const rdfNameLi = xml.createElementNS(NS.rdf, "rdf:li");

    rdfNameLi.setAttributeNS(
      "http://www.w3.org/XML/1998/namespace",
      "xml:lang",
      "x-default",
    );
    rdfNameLi.textContent = name;

    rdfNameAlt.appendChild(rdfNameLi);
    crsName.appendChild(rdfNameAlt);
    rdfDescription.appendChild(crsName);

    // Adicionando grupo
    const crsGroup = xml.createElementNS(NS.crs, "crs:Group");
    const rdfGroupAlt = xml.createElementNS(NS.rdf, "rdf:Alt");
    const rdfGroupLi = xml.createElementNS(NS.rdf, "rdf:li");

    rdfGroupLi.setAttributeNS(
      "http://www.w3.org/XML/1998/namespace",
      "xml:lang",
      "x-default",
    );
    rdfGroupLi.textContent = group;

    rdfGroupAlt.appendChild(rdfGroupLi);
    crsGroup.appendChild(rdfGroupAlt);
    rdfDescription.appendChild(crsGroup);

    return xmpSerializer(xml);
  } catch (err) {
    throw new Error("An error occurred while converting the file to xmp.");
  }
}

function xmpSerializer(xml: Document): string {
  const serializer = new XMLSerializer();
  return serializer.serializeToString(xml);
}
