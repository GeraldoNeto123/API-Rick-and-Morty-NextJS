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
import ReactPaginate from 'react-paginate';
import Pagination from '@/components/Pagination';

type Data = {
    info: Info;
    results: Character[]
}

export default function Characters({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    // const { page } = router.query;

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

                <Pagination
                    paginationInfo={data.info}
                    handlePagination={handlePagination}
                />

                {/* <Link
                    href={{
                        pathname: router.pathname,
                        query: { ...router.query, page: page ? Number(page) + 1 : 2 },
                    }}
                >
                    Próxima pagina
                </Link> */}
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