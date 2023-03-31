import ReactDOM from 'react-dom';
import { Overlay } from './styles';
import { useEffect, useRef } from 'react';

interface LoaderProps {
    isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
    const ref = useRef<Element | null>(null)
    const mounted = useRef<boolean>(false);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>("#loader-root");
        mounted.current = true;
    }, [])

    if (!isLoading) {
        return null;
    }

    return (mounted && ref.current)
        ? ReactDOM.createPortal(
            <Overlay>
                <div className="loader" />
            </Overlay>,
            ref.current,
        )
        : null;
}