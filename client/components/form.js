  import React, { useState } from 'react'
  import { Form, FormGroup, Label, Input, Row, Button, Alert } from 'reactstrap'
  import axios from 'axios'

function FormData(){

  const [budget, setBudget] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    subject: '',
    body: '',
  })

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  })

  const onChangeInput = e => setBudget({ 
    ...budget, 
    [e.target.name]: e.target.value
  })

  const sendBudget = async e => {
    e.preventDefault()
    setResponse({ formSave: true })

    try {
      const res = await axios.post('http://localhost:5050/budgets', budget)
      
      if (res.status === 201) {
        setResponse({ 
          formSave: false,
          type: 'success',
          message: res.data
        })
      } else {
        setResponse({
          formSave: false,
          type: 'error',
          message: res.data
        })
      }

    } catch {
      setResponse({
        type: 'network_error',
        message: 'Sorry :( Server not responding'
      })
    }
  }

  return(
    <Form onSubmit={sendBudget}>

      { /* Response messages */ }
      { response.type === 'error' && 
        <Alert color="danger">
          {response.message}
        </Alert> 
      }     
      { response.type === 'success' && 
        <Alert color="success">
          {response.message}
        </Alert> 
      } 
      { response.type === 'network_error' && 
        <Alert color="danger">
          {response.message}
        </Alert> 
      }

      { /* Form component */ }
      <Row>
        <FormGroup className="col-md-4">
          <Label for="examplePassword">Name</Label>
          <Input 
            type="text" 
            name="customer_name" 
            id="Name" 
            placeholder="Gabriel Lopes" 
            onChange={onChangeInput}
          />
        </FormGroup>
        <FormGroup className="col-md-4">
          <Label for="exampleEmail">Email</Label>
          <Input 
            type="email" 
            name="customer_email" 
            id="email" 
            placeholder="budgetsapp@exmple.com"
            onChange={onChangeInput}
          />
        </FormGroup>    
        <FormGroup className="col-md-4">
          <Label for="exampleEmail">Phone</Label>
          <Input 
            type="number" 
            name="customer_phone" 
            id="phone" 
            placeholder="(11) 98765-4321"
            onChange={onChangeInput}
          />
        </FormGroup>     
      </Row>
      <Row>
        <FormGroup className="col-md-6">
          <Label for="subject">Subject</Label>
          <Input 
            type="text" 
            name="subject" 
            id="subject" 
            placeholder="About my budget" 
            onChange={onChangeInput}
          />

          { response.formSave ?
            <Button className="form-btn shadow w-100 mt-5" disabled>Sending...</Button> : 
            <Button className="form-btn shadow w-100 mt-5">Request a budget</Button>
          }
        </FormGroup>
        <FormGroup className="col-md-6">
          <Label for="subject">Budget</Label>
          <Input 
            type="textarea" 
            name="body" 
            id="budget" 
            rows="5"
            placeholder="Lorem ipsum dolor sit amet..." 
            onChange={onChangeInput}
          />
        </FormGroup>
      </Row>
    </Form>
  )
}

export default FormData