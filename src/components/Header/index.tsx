import React, { FormEvent, useRef } from 'react';

import { Container, FormSearchName, InputContainer, Menu, Wrapper } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png'
import logoRickyMorty from "@/assets/ricky-and-morty.svg";
import { useRouter } from 'next/router';
import Input from '../Input';
import searchIcon from "@/assets/searchIcon.svg";

export default function Header() {
    const router = useRouter();
    const { name } = router.query;
    const nameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        delete router.query.page;
        
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                name: nameRef.current?.value
            }
        })
    }


    return (
        <Container>
            <Wrapper className='container'>
                <Link href="/" title='Home'>
                    <Image
                        src={logoRickyMorty}
                        alt=""
                        width={120}
                        height={120}
                        style={{ marginLeft: -25 }}
                    />
                </Link>

                <FormSearchName onSubmit={handleSubmit}>
                    <InputContainer>
                        <Input
                            ref={nameRef}
                            defaultValue={name || ''}
                            // type='search'
                            name='name'
                            placeholder='Qual personagem você quer ver?'
                        />

                        <button
                            type="submit"
                            className='btn-search'
                            title='Buscar'
                        >
                            <Image
                                src={searchIcon}
                                alt=""
                                width={24}
                                height={24}
                            />
                        </button>
                    </InputContainer>
                </FormSearchName>

                <Menu>
                    <Link href="/characters">Personagens</Link>
                    <Link href="/favorites">Favoritos</Link>
                </Menu>
            </Wrapper>
        </Container>
    )
}