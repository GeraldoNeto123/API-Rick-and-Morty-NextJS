import { useFavoriteCharacters } from "@/hooks/useFavoriteCharacters";
import { Button } from "./styles"
import { HeartIcon } from './HeartIcon'

interface FavoriteButtonProps {
    id: string;
}

export default function FavoriteButton({ id }: FavoriteButtonProps) {
    const { favoriteCharacters, handleFavoriteCharacters, isFavorite } = useFavoriteCharacters();

    return (
        <Button
            favorite={isFavorite(id)}
            onClick={() => handleFavoriteCharacters(id)}
            title={
                isFavorite(id)
                    ? 'Remover dos favoritos'
                    : 'Adicionar aos favoritos'
            }
        >
            <HeartIcon />
        </Button>
    )
}