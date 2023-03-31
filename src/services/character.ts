import { Character, Info } from "@/types/types";

type Data = {
  info: Info;
  results: Character[];
};

export async function getCharacters(
  page: number = 1,
  name: string = ""
): Promise<Data> {
  try {
    const url = new URL(`${process.env.ENV_BASE_URL_RICKANDMORTY}/character`);
    url.searchParams.set("page", page.toString());
    if (name) url.searchParams.set("name", name);
    const res = await fetch(url);

    const data: Data = await res.json();
    
    return data;
  } catch (error) {
    throw new Error("Erro ao obter personagens");
  }
}
