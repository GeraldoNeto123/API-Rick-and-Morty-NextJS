import React from 'react';

import { Container, Menu, Wrapper } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png'
import logoRickyMorty from "@/assets/ricky-and-morty.svg";

export default function Header() {


    return (
        <Container>
            <Wrapper className='container'>
                <Link href="/">
                    <Image
                        src={logoRickyMorty}
                        alt=""
                        width={120}
                        height={120}
                    />
                </Link>

                <Menu>
                    <Link href="/">Home</Link>
                    <Link href="/favorites">Favoritos</Link>
                </Menu>
            </Wrapper>
        </Container>
    )
}