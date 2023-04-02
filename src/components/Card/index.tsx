import Image from "next/image";
import { Container, Badge, ContainerFavorite } from "./styles";
import { Character } from "@/types/types";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

interface CardProps {
    character: Character;
}

export default function Card({ character }: CardProps) {

    return (
        <Container>
            <Link href="/" className="product-link" title="Ver detalhes">
                <div className="container-image">
                    <Image
                        className="border-radius"
                        src={character.image}
                        alt={`Foto personagem ${character.name}`}
                        width={130}
                        height={130}
                    />
                </div>
                <div className="infos">
                    <div>
                        <p className="name">
                            {character.name}
                            <Badge className="border-radius" status={character.status}>
                                {character.status}
                            </Badge>
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
                </div>
            </Link>
            <ContainerFavorite>
                <FavoriteButton id={character.id} />
            </ContainerFavorite>
        </Container>
    )
}