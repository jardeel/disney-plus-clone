import React from 'react';
// import { BrowserRouter as Router, Se, Route, Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: '/detail',
    element: <Detail/>
  }
])

function App() {
  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router}/>
      {/* <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <Detail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
