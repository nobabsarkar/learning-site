import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { Link, navigate, useLocation, useNavigate } from "react-router-dom";
import app from "./../../firebase/firebase.config";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UserContext/UserContext";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError("Wrong Password");
      });
  };

  const googleLogin = (event) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const githubLogin = (event) => {
    event.preventDefault();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="login_form">
            <h2 className="text-center text-primary">Login</h2>
            <form onSubmit={handleSubmit}>
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
              <p className="text-danger">{error}</p>
              <Button variant="warning" type="submit">
                Login
              </Button>
            </form>
            <Button onClick={googleLogin} variant="outline-dark mt-2 me-2">
              Login With Google
            </Button>
            <Button onClick={githubLogin} variant="outline-dark mt-2">
              Login With Github
            </Button>
            <p className="mt-3">
              New This Site? Please <Link to="/signup">Sign Up</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
