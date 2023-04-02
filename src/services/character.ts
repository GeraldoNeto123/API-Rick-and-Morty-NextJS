import { Character, Info } from "@/types/types";

type Data = {
  info: Info;
  results: Character[];
};

export async function getCharacters(
  page: number = 1,
  name: string = "",
  status: string = ""
): Promise<Data> {
  try {
    const url = new URL(`${process.env.ENV_BASE_URL_RICKANDMORTY}/character`);
    url.searchParams.set("page", page.toString());

    if (name) url.searchParams.set("name", name);
    if (status) url.searchParams.set("status", status);

    const res = await fetch(url);

    const data: Data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Erro ao obter personagens");
  }
}

export async function showCharacter(id: string): Promise<Character> {
  try {
    const url = new URL(
      `${process.env.ENV_BASE_URL_RICKANDMORTY}/character/${id}`
    );

    const res = await fetch(url);

    const data: Character = await res.json();

    return data;
  } catch (error) {
    throw new Error("Erro ao obter personagem.");
  }
}
