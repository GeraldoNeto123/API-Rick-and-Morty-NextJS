import { useFavoriteCharacters } from "@/hooks/useFavoriteCharacters";
import { Button } from "./styles"
import { HeartIcon } from './HeartIcon'
import { Character } from '@/types/types'
interface FavoriteButtonProps {
    character: Character;
}

export default function FavoriteButton({ character }: FavoriteButtonProps) {
    const { handleFavoriteCharacters, isFavorite } = useFavoriteCharacters();
    const favorited = isFavorite(character.id);

    return (
        <Button
            favorite={favorited}
            onClick={() => handleFavoriteCharacters(character)}
            title={
                favorited
                    ? 'Remover dos favoritos'
                    : 'Adicionar aos favoritos'
            }
        >
            <HeartIcon />
        </Button>
    )
}