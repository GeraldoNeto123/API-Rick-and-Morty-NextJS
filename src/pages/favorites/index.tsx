import Card from "@/components/Card";
import { useFavoriteCharacters } from "@/hooks/useFavoriteCharacters";

export default function Favorites() {
    const { favoriteCharacters } = useFavoriteCharacters();

    return (
        <div className="container" style={{padding: '3rem 0'}}>
            {
                favoriteCharacters?.map(character => (
                    <Card key={character.id} character={character} />
                ))
                ?? <div>Sem favoritos por aqui 😔.</div>
            }
        </div>
    )
}