import Header from "@/components/Header";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Character } from "@/types/types";
import { showCharacter } from "@/services/character";
import Image from "next/image";
import BadgeStatusCharacter from "@/components/BadgeStatusCharacter";
import { Container, Wrapper } from "@/styles/pages/charactersShow";
import FavoriteButton from "@/components/FavoriteButton";
import DateFNS from "@/components/DateFNS";

export default function CharacterDetails({ character }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Detalhes do personagem</title>
            </Head>

            <Header />

            <Container className='container'>
                <label role="button" onClick={() => router.back()} style={{ cursor: 'pointer' }}>
                    Voltar
                </label>
                <Wrapper>
                    <div className="container-image">
                        <Image
                            className="border-radius"
                            src={character.image}
                            alt={`Foto personagem ${character.name}`}
                            width={500}
                            height={500}
                        />
                        <div className="container-favorite">
                            <FavoriteButton character={character} />
                        </div>
                    </div>
                    <div className="infos">
                        <h2 className="name">
                            {character.name}
                            <BadgeStatusCharacter className="border-radius animate-pulse" status={character.status}>
                                {character.status}
                            </BadgeStatusCharacter>
                        </h2>

                        <p>
                            {character.gender} - {character.species}
                        </p>

                        <p>
                            Ultima localização: {character.location?.name}
                        </p>

                        <p>
                            Origem: {character.origin?.name}
                        </p>
                        <p>
                            Criado em: <DateFNS dateString={character.created} />
                        </p>
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<{ character: Character }> = async (context) => {
    const id = String(context.params?.id);

    const character: Character = await showCharacter(id)

    return {
        props: {
            character
        }
    }
}