import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SignIn from './wip components/SignIn';
import SignUp from './wip components/SignUp';
import SignOut from './wip components/SignOut';

function App() {

    return (
      <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="/sign-in">
                <SignIn />
              </Route>
              <Route path="/sign-up">
                <SignUp />
              </Route>
              <Route path="/sign-out">
                <SignOut />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;