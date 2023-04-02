import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react';
import { Container } from './styles';
import Header from './Header';
import { Character, Info } from '@/types/types';
import Card from '@/components/Card';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getCharacters } from '@/services/character';
import Head from 'next/head';

type Data = {
    info: Info;
    results: Character[]
}

export default function Characters({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    const { page } = router.query;

    return (
        <>
            <Head>
                <title>Personagens</title>
            </Head>

            <Header />
            <Container className='container'>
                {
                    data.results?.map(character => (
                        <Card key={character.id} character={character} />
                    ))
                    ?? <div>Personagem não encontrado.</div>
                }

                <Link
                    href={{
                        pathname: router.pathname,
                        query: { ...router.query, page: page ? Number(page) + 1 : 2 },
                    }}
                >
                    Próxima pagina
                </Link>
            </Container>
        </>
    )
}


export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
    const { query } = context;
    const page = Number(query.page) || 1;
    const name = String(query.name || '');

    const data: Data = await getCharacters(page, name)

    return {
        props: {
            data
        }
    }
}