import { Container, Row, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link'




export const WithLayout = ( Component ) =>
    () =>
        <>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>
                        Two
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link href="/users">
                                <a className="nav-link">
                                Users
                                </a>
                            </Link>
                            <Link href="/users/new">
                                <a className="nav-link">
                                New Users
                                </a>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row>
                    <Component/>
                </Row>
                Footer...
            </Container>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
            <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="anonymous"></script>
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        </>
        ;