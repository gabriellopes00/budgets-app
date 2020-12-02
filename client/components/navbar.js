  import React, { useState } from 'react'
  import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container
  } from 'reactstrap'  

  // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  // import { library } from '@fortawesome/fontawesome-svg-core'
  // import { faCheckSquare, faGift } from '@fortawesome/free-solid-svg-icons'

  // library.add(faGift)

  import Image from 'next/image'

function NavBar(){

  // Navbar button
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return(
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">
          <Image  
            src="/main.svg" 
            alt="Logo"
            width={ 30 }
            height={ 30 }
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Budgets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/gabriellopes00/budgets-app">                
                {/* <FontAwesomeIcon icon="faGift" /> */}
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar