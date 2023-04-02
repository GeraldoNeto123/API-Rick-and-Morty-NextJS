import { Info } from '@/types/types'
import ReactPaginate from 'react-js-pagination';

import { Container } from './styles';
import { useRouter } from 'next/router';

interface PaginationProps {
    paginationInfo: Info;
    handlePagination: (pageNumber: number) => void,
}

export default function Pagination({ paginationInfo, handlePagination }: PaginationProps) {
    const router = useRouter();
    const { page } = router.query;

    return (
        <Container>
            <span>
                <strong>Total de registros: </strong>
                {paginationInfo?.count || 0}
            </span>

            <br />
            <br />

            <ReactPaginate
                activePage={Number(page || 1)}
                itemsCountPerPage={20}
                totalItemsCount={paginationInfo?.count || 0}
                pageRangeDisplayed={5}
                onChange={handlePagination}
                innerClass="pagination"
                activeClass="item-active"
                itemClass="btn btn-border-radius-right btn-border-radius-left"
                hideNavigation
            />
        </Container>
    )
}