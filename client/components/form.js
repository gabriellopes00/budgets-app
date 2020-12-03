  import React, { useState } from 'react'
  import { 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Row, 
    Alert, 
    Button, 
    Modal
  } from 'reactstrap'
  import axios from 'axios'

function FormData(){

  // Data
  const [budget, setBudget] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    subject: '',
    body: '',
  })

  // Set form status function
  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  })

  // Get data function, on Input change
  const onChangeInput = e => setBudget({ 
    ...budget, 
    [e.target.name]: e.target.value
  })

  // Send data to server function
  const sendBudget = async e => {
    e.preventDefault()
    setResponse({ formSave: true })

    try {
      // Api request
      const res = await axios.post('http://localhost:5050/budgets', budget)
      
      // Registered -> status code == 201
      if (res.status === 201) {
        setResponse({ 
          formSave: false,
          type: 'success',
          message: 'Budget registered successfully ! Please check your email box.'
        })
      } 

    } catch (error) {   
      // Server not responding -> status code 500
      if(error.message == 'Network Error'){
        setResponse({
          type: 'network_error',
          message: 'Sorry :( Server is not responding, please try again later.'
        })
      } else { //Bad request -> status code 400
        setResponse({
          formSave: false,
          type: 'error',
          message: 'Invalid data received, please try again :('
        })
      }
    }
    finally { setVisible(true) }
  }

  // Alerts modal close button
  const [visible, setVisible] = useState(true)
  const onDismiss = () => setVisible(false)

  return(
    <Form onSubmit={sendBudget}>

      { /* Response messages */ }
      { response.type === 'error' && 
        <Modal isOpen={ visible }  className="p-0">
          <Alert color="danger" className="m-0" toggle={onDismiss}>
            {response.message}
          </Alert> 
        </Modal>
      }     
      { response.type === 'success' && 
        <Modal isOpen={ visible }  className="p-0">
          <Alert color="success" className="m-0" toggle={onDismiss}>
            {response.message}
          </Alert> 
        </Modal>
      } 
      { response.type === 'network_error' && 
        <Modal isOpen={ visible }  className="p-0">
          <Alert color="danger" className="m-0" toggle={onDismiss}>
            {response.message}
          </Alert> 
        </Modal> 
      }

      { /* Form component */ }
      <Row>
        <FormGroup className="col-md-4">
          <Label for="examplePassword">Name</Label>
          <Input
            required 
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
            required 
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
            required 
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
            required 
            type="text" 
            name="subject" 
            id="subject" 
            placeholder="About my budget" 
            onChange={onChangeInput}
          />

          { response.formSave ?
            <Button 
              type="submit" 
              className="form-btn shadow w-100 mt-5" 
              disabled
            >Sending...</Button> : 
            <Button 
              type="submit" 
              className="form-btn shadow w-100 mt-5"
            >Request a budget</Button>
          }
        </FormGroup>
        <FormGroup className="col-md-6">
          <Label for="subject">Budget</Label>
          <Input
            required 
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