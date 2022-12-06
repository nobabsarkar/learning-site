import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./CardDetails.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CardDetails = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <Card ref={ref}>
            <Card.Header>
              <h3>Course Name: {details.name}</h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <img
                  className="w-100 card_details"
                  src={details.picture}
                  alt=""
                />
              </Card.Title>
              <Card.Text>
                <p>
                  you can download this card. and you can checkout this card
                </p>
              </Card.Text>

              <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => (
                  <Button variant="primary me-3" onClick={toPdf}>
                    Download
                  </Button>
                )}
              </Pdf>
              <Button variant="warning">
                <Link to="/checkout">Get Premium Access</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
