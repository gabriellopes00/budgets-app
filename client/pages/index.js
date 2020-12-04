  import React from 'react'
  import { Container, Jumbotron, } from 'reactstrap'

  import Form from '../components/form'
  import NavBar from '../components/navbar'

function layout() {
  return (
    <div>

      <NavBar />

      <Jumbotron className="m-0 p-5">
        <Container>
          <h1 className="display-3 text-center">Well come to <a className="link" href="https://github.com/gabriellopes00/budgets-app">Budgets App</a> </h1>
          <p className="lead text-center">Make your budget right now and receive a confirmation email immediately</p>
          <hr className="my-2 mb-5" />
          <p className="lead text-center">Fill out the form to request a budget</p>

          <Form />

        </Container>
      </Jumbotron>
    </div>
  )
}

export default layout