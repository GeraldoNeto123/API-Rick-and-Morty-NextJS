import React, { useRef } from 'react';

import { FormSearchName } from './styles';
import Image from 'next/image';
import logo from '@/public/assets/logo.png'
import Input from '@/components/Input';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import HeaderComponent from '@/components/Header';

export default function Header() {
    const router = useRouter();
    const { name } = router.query;
    const nameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                page: 1,
                name: nameRef.current?.value
            }
        })
    }

    return (
        <HeaderComponent>
            <Link href="/">
                <Image
                    src={logo}
                    alt="Logo Rick and Morty"
                    height={40}
                />
            </Link>
            <FormSearchName onSubmit={handleSubmit}>
                <Input
                    ref={nameRef}
                    defaultValue={name || ''}
                    type='search'
                    name='name'
                    placeholder='Qual personagem você quer ver?'
                />

                <button type="submit" className='btn btn-primary'>Buscar</button>
            </FormSearchName>
        </HeaderComponent>
    )
}