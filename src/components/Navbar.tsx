import { Nav, Container as NavbarBs } from "react-bootstrap"
import { Container, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <header className='mb-3 py-3 shadow-sm bg-white w-100 sticky'>
            <Container className="d-flex justify-content-between">
                <Nav >
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button onClick={openCart} style={{ position: "relative" }} className="btn rounded-circle btn-lg" variant="outline-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 20 20"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>
                        <div className="rounded-circle d-flex bg-danger justify-content-center align-items-center text-white px-1 small" style={{ position: "absolute", top: 0, right: 0, height: "20px", }}>{cartQuantity}</div>
                    </Button>
                )}
            </Container>
        </header >
    )
}

export default Navbar