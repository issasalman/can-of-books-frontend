import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from "./BestBooks";
import Profile from "./Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }
 
  render() {
    return (
      <>
     <Header user={this.state.user} onLogout={this.logoutHandler} />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={(props) => <BestBooks {...props} />} />

            <Route path="/profile">
             <Profile/>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </>
    )
  }
}

export default App;
