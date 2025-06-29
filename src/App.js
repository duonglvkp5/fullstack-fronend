import './App.scss';
import Nav from './components/Navigation/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <div className='app-container'>
          <Nav />
          <Switch>
            <Route path="/" exact> Home
            </Route>
            <Route path="/news"> New
            </Route>
            <Route path="/about"> about
            </Route>
            <Route path="/contact">contact
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">404 not found</Route>
          </Switch>
        </div>

      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
  );
}

export default App;
