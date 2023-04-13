import Image from "next/image";
import { Container, ContainerFavorite, Description } from "./styles";
import { Character } from "@/types/types";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import BadgeStatusCharacter from "../BadgeStatusCharacter";

interface CardProps {
    character: Character;
}

export default function Card({ character }: CardProps) {

    return (
        <Container status={character.status}>
            <Link
                href={`/characters/${character.id}`}
                className="character-link"
                title="Ver detalhes"
            >
                <div className="container-image">
                    <Image
                        src={character.image}
                        alt={`Foto personagem ${character.name}`}
                        fill
                    />
                </div>
                <Description>
                    <div>
                        <p className="name">
                            {character.name}
                            <BadgeStatusCharacter className="border-radius" status={character.status}>
                                {character.status}
                            </BadgeStatusCharacter>
                        </p>

                        <p>
                            {character.gender} - {character.species}
                        </p>

                        <p>
                            Ultima localização: {character.location?.name}
                        </p>

                        <p>
                            Origem: {character.origin?.name}
                        </p>
                    </div>
                </Description>
            </Link>
            <ContainerFavorite>
                <FavoriteButton character={character} />
            </ContainerFavorite>
        </Container>
    )
}