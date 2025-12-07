import TCGdex, { Query } from "@tcgdex/sdk";

const tcgdex = new TCGdex("en");

export const series = await tcgdex.serie.get("tcgp");
const allSets = series?.sets; // get all sets from tcgp
const setsArray: string[] = [];
allSets?.map((set) => setsArray.push(set.id)); // push all set ids into a new array

// paramaters are for pagination
export const cardList = async (
  set: string,
  page: number,
  itemsPerPage: number
) =>
  await tcgdex.card.list(
    Query.create().equal("set.id", set).paginate(page, itemsPerPage)
  );

export const searchCard = async (name: string) => {
  // Map promise for each set
  const promises = setsArray.map((id) =>
    tcgdex.card.list(
      Query.create().equal("set", `${id}`).contains("name", `${name}`)
    )
  );
  const results = await Promise.all(promises); // resolve all promises

  return results.flat(); // flatten into one cards array
};
