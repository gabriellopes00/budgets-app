  import React, { useState } from 'react'
  import { Card, Button, CardTitle, CardText } from 'reactstrap'
  import axios from 'axios'

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  library.add(fas)

function budgetCard(){

  const [budget, setBudget] = useState('testeweeee ')

  return(
    <Card>{budget}</Card>
  )
}

export default budgetCard
