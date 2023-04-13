import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Character } from '@/types/types';
interface FavoriteCharactersProviderProps {
    children: ReactNode;
}

interface FavoriteCharactersContextData {
    favoriteCharacters: Character[];
    handleFavoriteCharacters: (character: Character) => void;
    isFavorite: (characterId: string) => boolean;
}

const FavoriteCharactersContext = createContext<FavoriteCharactersContextData>({} as FavoriteCharactersContextData);

export function FavoriteCharactersProvider({ children }: FavoriteCharactersProviderProps): JSX.Element {
    const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);

    useEffect(() => {
        (function getFavoriteCharactersLocalStorage() {
            setFavoriteCharacters(() => {
                const storagedFavorite = localStorage.getItem('@Characters:favorite');

                if (storagedFavorite) {
                    return JSON.parse(storagedFavorite);
                }

                return [];
            })
        })();
    }, [])

    const prevfavoriteCharactersRef = useRef<Character[]>();

    useEffect(() => {
        prevfavoriteCharactersRef.current = favoriteCharacters;
    });

    const favoriteCharactersPreviousValue = prevfavoriteCharactersRef.current ?? favoriteCharacters;

    useEffect(() => {
        if (favoriteCharactersPreviousValue !== favoriteCharacters) {
            localStorage.setItem('@Characters:favorite', JSON.stringify(favoriteCharacters));
        }
    }, [favoriteCharacters, favoriteCharactersPreviousValue]);

    const isFavorite = useCallback((characterId: string): boolean => {
        return Boolean(favoriteCharacters.find((favoriteCharacter) => favoriteCharacter.id === characterId));
    }, [favoriteCharacters])

    const handleFavoriteCharacters = useCallback((character: Character) => {
        if (isFavorite(character.id)) {
            setFavoriteCharacters(state => state.filter(item => item.id !== character.id))
        } else {
            setFavoriteCharacters(state => ([...state, character]))
        }
    }, [isFavorite]);


    return (
        <FavoriteCharactersContext.Provider
            value={{ favoriteCharacters, handleFavoriteCharacters, isFavorite }}
        >
            {children}
        </FavoriteCharactersContext.Provider>
    );
}

export function useFavoriteCharacters(): FavoriteCharactersContextData {
    const context = useContext(FavoriteCharactersContext);

    return context;
}