import React from "react";
import { Container, Jumbotron } from "reactstrap";

import NavBar from "../components/navbar";
import BudgetCard from "../components/BudgetCard";

function layout() {
  return (
    <div>
      <NavBar />

      <Jumbotron className="m-0 w-100 h-100 p-5">
        <Container>
          <BudgetCard />
        </Container>
      </Jumbotron>
    </div>
  );
}

export default layout;
