import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Profile from "./containers/Profile";
import TopUp from "./containers/TopUp";
import EditProfile from "./containers/EditProfile";
import ComingSoon from "./containers/ComingSoon";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/editprofile" component={EditProfile} exact />
          <Route path="/topup" component={TopUp} exact />
          <Route path="/comingSoon" component={ComingSoon} exact />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;