import Card from "@/components/Card";
import Header from "@/components/Header";
import { useFavoriteCharacters } from "@/hooks/useFavoriteCharacters";
import { Character } from "@/types/types";
import { useRouter } from "next/router";

export default function Favorites() {
    const router = useRouter();
    const name = String(router.query.name || '');

    const { favoriteCharacters } = useFavoriteCharacters();

    const filteredFavoriteCharacters: Character[] = name
        ? favoriteCharacters.filter((character) => character.name.toUpperCase().includes(name.toUpperCase().trim()))
        : [];

        return (
        <>
            <Header />

            <div className="container-page">
                {name
                    ? <>
                        {filteredFavoriteCharacters.map(character => (
                            <Card key={character.id} character={character} />
                        )) ?? <div>Personagem não encontrado 😔.</div>}
                    </>
                    : <>
                        {favoriteCharacters?.map(character => (
                            <Card key={character.id} character={character} />
                        )) ?? <div>Sem favoritos por aqui 😔.</div>}
                    </>
                }
            </div>
        </>
    )
}