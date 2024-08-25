import { useState } from 'react'
import { useRoutes, Link } from "react-router-dom";
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import './App.css'

function App() {
  let routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/view/:id", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
    { path: "/add", element: <AddCreator /> },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>Creator Gallery</h1>
        <Link to="/"><button className="headerBtn"> Home </button></Link>
        <Link to="/add"><button className="headerBtn"> Add </button></Link>
      </div>
      <br/>
        {routes}
    </div>
  )
}

export default App;
