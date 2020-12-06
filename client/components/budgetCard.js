  import React, { useState, useEffect } from 'react'
  import {
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    CardFooter,
    Button,
    Form,
    FormGroup,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from 'reactstrap'

  import axios from 'axios'

  import { Editor } from '@tinymce/tinymce-react'

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  library.add(fas)

function BudgetCard(){

  const [budget, setBudget] = useState([])
  useEffect(async () => {
    const budgets = await axios.get('http://localhost:5050/budgets')
    setBudget(budgets.data)
  }, [])

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  // const [content, setContent] = useState()

  // const loadBudget = (budget) => {
  //   console.log(budget);
  //   console.log(content);
  // }

  return(
    <>
      <Row>
        {
          budget.map((budget => {
            return(
              <>
                <Col className="mb-3" sm="6">
                  <Card body>
                    <CardTitle tag="h5">{ budget.subject }</CardTitle>
                    <hr />
                    <CardText>{ budget.body }</CardText>
                    <CardFooter className="text-muted">
                      <FontAwesomeIcon className="m-1" icon="user"/> { budget.customer_name }<br/>
                      <FontAwesomeIcon className="m-1" icon="mail-bulk"/> { budget.customer_email } <br/>
                      <FontAwesomeIcon className="m-1" icon="phone"/> { budget.customer_phone } <br/>
                    </CardFooter>
                    <Button
                      className="mt-2 form-btn-outline"
                      onClick={
                        // loadBudget(budget),
                        toggle
                      }
                    >
                      Send response
                    </Button>
                  </Card>
                </Col>
            </>
            )
          }))
        }
      </Row>

      {/* Modal form */}
      <Modal role="document" className="modal-lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Budget Response</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Editor //Tiny MCE
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
                }}
              />
            </FormGroup>
            <Button className="form-btn">Submit</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="form-btn-outline" >Send Response</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

    </>
  )
}

export default BudgetCard
