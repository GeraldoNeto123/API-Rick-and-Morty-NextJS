import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React, { useEffect, useState } from 'react';
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
    const [loading, setLoading] = useState(false);
    const startLoading = () => setLoading(true)
    const stopLoading = () => setLoading(false)

    useEffect(() => {
        // Router event handler
        router.events.on("routeChangeStart", startLoading)
        router.events.on("routeChangeComplete", stopLoading)
        return () => {
            router.events.off("routeChangeStart", startLoading)
            router.events.off("routeChangeComplete", stopLoading)
        }
    }, [router.events])

    return (
        <>
            <Head>
                <title>Personagens</title>
            </Head>

            <Header />
            <Container className='container'>
                {loading
                    ? <h1 style={{ marginTop: 100 }}>Carregando...</h1>
                    : data.results?.map(character => (
                        <Card key={character.id} character={character} />
                    ))
                }

                <Link
                    href={{
                        pathname: router.pathname,
                        query: { ...router.query, page: page ? Number(page) + 1 : 2 },
                    }}
                >
                    Próxima pagina
                </Link>
                {loading && <h1>Loading..</h1>}

            </Container>
        </>
    )
}


export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
    const { query } = context;
    const page = Number(query.page) || 1;
    const name = String(query.name) || '';
    const data: Data = await getCharacters(page, name)

    return {
        props: {
            data
        }
    }
}