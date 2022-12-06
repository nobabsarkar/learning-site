import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const SignUp = () => {
  const { createUser, userName } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userName(name);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="login_form">
            <h2 className="text-center text-primary">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  name="image"
                  type="text"
                  placeholder="Enter Your Image Url"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Button variant="warning" type="submit">
                Sign Up
              </Button>
              <p>
                Already Have an Account? Please <Link to="/login">Login</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
