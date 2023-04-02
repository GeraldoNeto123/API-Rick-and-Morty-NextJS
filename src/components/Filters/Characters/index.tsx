import { useRouter } from "next/router"
import { Container, Option } from "./styles"

export default function FilterCharacter() {
    const router = useRouter()
    const { status } = router.query;

    const handleStatus = (status: "alive" | "dead" | "unknown") => {
        return router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                page: 1,
                status
            }
        })
    }

    return (
        <Container className="shadow-default border-radius">
            <label>Status</label>
            <Option className="btn" active={status === 'alive'} onClick={() => handleStatus('alive')}>Alive</Option>
            <Option className="btn" active={status === 'dead'} onClick={() => handleStatus('dead')}>Dead</Option>
            <Option className="btn" active={status === 'unknown'} onClick={() => handleStatus('unknown')}>Unknown</Option>
        </Container>
    )
}