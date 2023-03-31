import Image from "next/image";
import { Container, Badge } from "./styles";
import { Character } from "@/types/types";
import Link from "next/link";

interface CardProps {
    character: Character;
}

export default function Card({ character }: CardProps) {

    return (
        <Container>
            <Link href="/" className="product-link" title="Ver detalhes">
                <Image
                    className="border-radius"
                    src={character.image}
                    alt={`Foto personagem ${character.name}`}
                    width={130}
                    height={130}
                />
                <div className="infos">
                    <div>
                        <p className="name">
                            {character.name}
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
                    <Badge className="border-radius" status={character.status}>
                            {character.status}
                        </Badge>
                </div>
            </Link>
        </Container>
    )
}