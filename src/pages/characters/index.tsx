import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react';
import { Aside, Container, Main } from '@/styles/pages/characters';
import Header from '@/components/Header';
import { Character, Info } from '@/types/types';
import Card from '@/components/Card';
import { useRouter } from 'next/router';
import { getCharacters } from '@/services/character';
import Head from 'next/head';
import Pagination from '@/components/Pagination';
import FilterCharacter from '@/components/Filters/Characters';

type Data = {
    info: Info;
    results: Character[]
}

export default function Characters({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();

    const handlePagination = (pageNumber: number) => {
        const path = router.pathname
        const query = router.query
        query.page = String(pageNumber)
        router.push({
            pathname: path,
            query: query,
        })
    }

    return (
        <>
            <Head>
                <title>Rick and Morty Personagens</title>
            </Head>

            <Header />
            <Container className='container'>
                <Aside>
                    <FilterCharacter />
                </Aside>

                <Main>
                    {
                        data.results?.map(character => (
                            <Card key={character.id} character={character} />
                        ))
                        ?? <div>Personagem não encontrado.</div>
                    }

                    <Pagination
                        paginationInfo={data.info}
                        handlePagination={handlePagination}
                    />
                </Main>
            </Container>
        </>
    )
}


export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
    const { query } = context;
    const page = Number(query.page) || 1;
    const name = String(query.name || '');
    const status = String(query.status || '');

    const data: Data = await getCharacters(page, name, status)

    return {
        props: {
            data
        }
    }
}