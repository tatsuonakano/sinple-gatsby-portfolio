//Header
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from "react"
import '../../styles/layout.scss';

const Header = () => (

  <>
    {[false,].map((expand) => (
      <Navbar key={expand} sticky="top" bg="dark" variant="dark" expand={expand} className="mb-3 shadow-lg" >
        <Container fluid>
          <Navbar.Brand className="headerTitleStyle" href="/">ポートフォリオ</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                ポートフォリオ
           </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>


                <NavDropdown
                  title="記事カテゴリー一覧"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">カテゴリーリンク</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                
                <NavDropdown
                  title="記事タグ一覧"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
               </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
               </NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="#action2">問い合わせ</Nav.Link>
                <Nav.Link href="#action2">プライバシーポリシー</Nav.Link>
                <Nav.Link href="#action2">サイト運営者について</Nav.Link>
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
)

export default Header
