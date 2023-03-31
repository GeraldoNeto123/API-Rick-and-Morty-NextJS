import React, { ReactNode } from 'react';

import { Container, Wrapper } from './styles';

interface HeaderProps {
    children: ReactNode;
}
export default function Header({ children }: HeaderProps) {


    return (
        <Container>
            <Wrapper className='container'>
                {children}
            </Wrapper>
        </Container>
    )
}