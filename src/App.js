import { Route, Switch } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./components/admin-dashboard/admin-dashboard";
import Footer from "./components/footer/footer";
import NavBar from "./components/nav-bar/nav-bar";
import Login from "./pages/login-page/login-page";
import SignUp from "./pages/sign-up/sign-up";
import Welcome from "./pages/welcome-page/welcome";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
