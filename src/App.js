import "./App.css";
import Nav from "./Nav.js";
import About from "./About.js";
import Shop from "./Shop.js";
import ItemDetail from "./ItemDetail.js";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import useAuth from "./useAuth";

const fakeAuth = {
  isAuthenticated: false,
  authanticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const Protected = () => <h3>Protected Page</h3>;
const Login = ({ handler, auth }) => {
  const [redirectToReferer, setRedirectToReferer] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Login loca : ", location);

  if (auth === true) {
    return (
      <Navigate replace={true} to={location.state?.from?.pathname || "/"} />
    );
  }
  return <p>You must be logged in....</p>;
  /* return (
    <div>
      <p>You must log in to view this page</p>
      <button onClick={handler}> Login</button>
    </div>
  );*/
};
function App() {
  const [isAuth, login, logout] = useAuth(false);
  return (
    <Router>
      <div>
        <Nav />
        {isAuth ? (
          <div>
            <p>You're logged in...</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>You're logged out...</p>
            <button onClick={login}>Login</button>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ItemDetail />} />
          <Route
            path="/login"
            element={<Login handler={login} auth={isAuth} />}
          />
          <Route
            exact
            path="/protected"
            element={<ProtectedRoute auth={isAuth} />}
          >
            <Route exact path="/protected" element={<Protected />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
export default App;
