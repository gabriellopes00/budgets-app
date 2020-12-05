  import React, { useState } from 'react'
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap'

  import Image from 'next/image'

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fas } from '@fortawesome/free-solid-svg-icons'

  library.add(fas)

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
              <NavLink href="/">
                <FontAwesomeIcon icon="home" className="mr-1" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/budgets">
                <FontAwesomeIcon icon="stream" className="mr-1" />
                Budgets
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/gabriellopes00/budgets-app">
                <FontAwesomeIcon icon="code-branch" className="mr-1" />
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar