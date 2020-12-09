import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardFooter
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function BudgetCard(){

  const [budget, setBudget] = useState([])

  useEffect(async () => {
    try {
      const budgets = await axios.get('http://localhost:5050/budgets')
      setBudget(budgets.data)
    } catch {
      alert('Sorry, server is not responding :( Please try again later.')
    }
  }, [])

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
                  </Card>
                </Col>
              </>
            )
          }))
        }
      </Row>
    </>
  )
}

export default BudgetCard
