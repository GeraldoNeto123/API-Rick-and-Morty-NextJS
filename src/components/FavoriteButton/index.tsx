import { useFavoriteCharacters } from "@/hooks/useFavoriteCharacters";
import { Button } from "./styles"
import { HeartIcon } from './HeartIcon'

interface FavoriteButtonProps {
    id: string;
}

export default function FavoriteButton({ id }: FavoriteButtonProps) {
    const { favoriteCharacters, handleFavoriteCharacters } = useFavoriteCharacters();

    const isFavorite = (): boolean => {
        return favoriteCharacters.includes(id);
    }

    return (
        <Button
            favorite={isFavorite()}
            onClick={() => handleFavoriteCharacters(id)}
            title={
                isFavorite()
                    ? 'Remover dos favoritos'
                    : 'Adicionar aos favoritos'
            }
        >
            <HeartIcon />
        </Button>
    )
}