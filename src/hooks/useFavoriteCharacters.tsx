import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';

interface FavoriteCharactersProviderProps {
    children: ReactNode;
}

interface FavoriteCharactersContextData {
    favoriteCharacters: string[];
    handleFavoriteCharacters: (characterId: string) => void;
}

const FavoriteCharactersContext = createContext<FavoriteCharactersContextData>({} as FavoriteCharactersContextData);

export function FavoriteCharactersProvider({ children }: FavoriteCharactersProviderProps): JSX.Element {
    const [favoriteCharacters, setFavoriteCharacters] = useState<string[]>([]);

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

    const prevfavoriteCharactersRef = useRef<string[]>();

    useEffect(() => {
        prevfavoriteCharactersRef.current = favoriteCharacters;
    });

    const favoriteCharactersPreviousValue = prevfavoriteCharactersRef.current ?? favoriteCharacters;

    useEffect(() => {
        if (favoriteCharactersPreviousValue !== favoriteCharacters) {
            localStorage.setItem('@Characters:favorite', JSON.stringify(favoriteCharacters));
        }
    }, [favoriteCharacters, favoriteCharactersPreviousValue]);

    const handleFavoriteCharacters = useCallback((characterId: string) => {
        if (favoriteCharacters.includes(characterId)) {
            setFavoriteCharacters(state => state.filter(id => id !== characterId))
        } else {
            setFavoriteCharacters(state => ([...state, characterId]))
        }
    }, [favoriteCharacters]);

    return (
        <FavoriteCharactersContext.Provider
            value={{ favoriteCharacters, handleFavoriteCharacters }}
        >
            {children}
        </FavoriteCharactersContext.Provider>
    );
}

export function useFavoriteCharacters(): FavoriteCharactersContextData {
    const context = useContext(FavoriteCharactersContext);

    return context;
}