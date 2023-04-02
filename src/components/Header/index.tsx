import React, { ReactNode } from 'react';

import { Container, Wrapper } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png'

interface HeaderProps {
    children?: ReactNode;
}
export default function Header({ children }: HeaderProps) {


    return (
        <Container>
            {children
                ? <Wrapper className='container'>
                    {children}
                </Wrapper>
                : <Wrapper className='container'>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo Rick and Morty"
                            height={40}
                        />
                    </Link>
                </Wrapper>
            }
        </Container>
    )
}