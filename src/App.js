import "./App.css";
import Main from "./layout/Main";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Courses from "./components/Courses/Courses";
import CardDetails from "./components/CardDetails/CardDetails";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./routes/PrivateRoute";
import Blog from "./components/Blog/Blog";
import NotFound from "./NotFound/NotFound";
import Faq from "./components/Faq/Faq";

// all routes is here

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/carddetails/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-server-10-nobabsarkar.vercel.app/card/${params.id}`
          ),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
