import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Cors?</Accordion.Header>
              <Accordion.Body>
                <p>
                  Cross-origin resource sharing (CORS) is a browser security
                  feature that restricts cross-origin HTTP requests that are
                  initiated from scripts running in the browser. If your REST
                  API's resources receive non-simple cross-origin HTTP requests,
                  you need to enable CORS support.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {" "}
                Why are you using firebase? What other options do you have to
                implement authentication?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Firebase provides tools to grow your app and business, for
                  startups & global enterprises. Get your app up and running
                  quickly & securely with fully managed backend infrastructure.
                  Accelerate Development. Customize Your App. 15+ Products &
                  Solutions. Backed by Google.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How does the private route work?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  The private route component is similar to the public route,
                  the only change is that redirect URL and authenticate
                  condition. If the user is not authenticated he will be
                  redirected to the login page and the user can only access the
                  authenticated routes If he is authenticated Logged in.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What is Node? How does Node work?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  It is a used as backend service where javascript works on the
                  server-side of the application. This way javascript is used on
                  both frontend and backend. Node. js runs on chrome v8 engine
                  which converts javascript code into machine code, it is highly
                  scalable, lightweight, fast, and data-intensive.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Blog;
