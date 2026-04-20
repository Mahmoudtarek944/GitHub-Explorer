import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="#" className="text-light">
            <div className="d-flex gap-3">
              <i className="bi bi-github"></i>
              <h6 className="mt-1">GitHub Explorer</h6>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="bg-light text-center "
          />
          <Navbar.Collapse
            id="navbarScroll"
            className="d-felx justify-content-end"
          >
            <Nav className="my-2 my-lg-0 me-3" navbarScroll>
              <Nav.Link
                href="/"
                className={
                  window.location.pathname === "/"
                    ? "text-light fw-medium rounded-3 bg-black"
                    : "text-light fw-medium  rounded-3 "
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/bookmarks"
                className={
                  window.location.pathname === "/bookmarks"
                    ? "text-light fw-medium rounded-3 bg-black"
                    : "text-light fw-medium  rounded-3 "
                }
              >
                Bookmarks
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
