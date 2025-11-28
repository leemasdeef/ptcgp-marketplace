import TCGdex from "@tcgdex/sdk";

const tcgdex = new TCGdex("en");

export const series = await tcgdex.serie.get("tcgp");

export const a1set = await tcgdex.set.get("A1");
