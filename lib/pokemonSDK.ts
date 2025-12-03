import TCGdex, { Query } from "@tcgdex/sdk";

const tcgdex = new TCGdex("en");

export const series = await tcgdex.serie.get("tcgp");

// paramaters are for pagination
export const cardList = async (
  set: string,
  page: number,
  itemsPerPage: number
) =>
  await tcgdex.card.list(
    Query.create().equal("set.id", set).paginate(page, itemsPerPage)
  );

export const searchCard = async (name: string) =>
  await tcgdex.card.list(
    Query.create().equal("series", "pgtcp").contains("name", `${name}`)
  );
