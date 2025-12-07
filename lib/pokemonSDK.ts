import TCGdex, { Query } from "@tcgdex/sdk";

const tcgdex = new TCGdex("en");

export const series = await tcgdex.serie.get("tcgp");
const allSets = series?.sets; // see series object here: https://api.tcgdex.net/v2/en/series/tcgp

// Example: setIds = ["P-A", "A1", "A1A" ]
const setIds = allSets?.map((set) => set.id);
//Example: allSetsString = "P-A|A1|A1A", to be used in TCGDex sdk
const allSetsString = setIds?.join("|");

// paramaters are for pagination
export const cardList = async (
  set: string,
  page: number,
  itemsPerPage: number
) =>
  await tcgdex.card.list(
    Query.create().equal("set.id", set).paginate(page, itemsPerPage)
  );

export const searchCard = async (
  name: string,
  page: number,
  itemsPerPage: number
) =>
  await tcgdex.card.list(
    Query.create()
      .includes("set", allSetsString!)
      .contains("name", `${name}*`)
      .sort("id", "ASC")
      .paginate(page, itemsPerPage)
  );
