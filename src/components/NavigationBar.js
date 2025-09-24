import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">FATAHFILM</Navbar.Brand>
                    <nav>
                        <Nav.Link href="#trending">TRANDING</Nav.Link>
                        <Nav.Link href="#horor">HOROR</Nav.Link>
                    </nav>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavigationBar