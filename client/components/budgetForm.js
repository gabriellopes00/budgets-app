  import React, { useState } from 'react'
  import {
    Button,
    Form,
    FormGroup,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from 'reactstrap'

  import { Editor } from '@tinymce/tinymce-react'

function BudgetForm(props){

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <>
      <Button onClick={toggle}>callas</Button>

      <Modal role="document" className="modal-lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Budget Response</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Editor //TinyMCE
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

export default BudgetForm