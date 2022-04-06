import React from 'react'
import Navbar from "./Navbar";
import News from './News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  //const apikey=process.env.API_KEY;
  return (
    <BrowserRouter>
    <div className="App">
      
        <Navbar/>
        <Routes>
        <Route exact path="/business" element={<News  key="business" pageSize={6} country="in" category="business"/>} />
        <Route exact path="/sports" element={<News  key="sports" pageSize={6} country="in" category="sports"/>} />
        <Route exact path="/science" element={<News  key="science" pageSize={6} country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={6} country="in" category="entertainment"/>} />
        <Route exact path="/" element={<News  key="general" pageSize={6} country="in" category="general"/>} />
        <Route exact path="/health" element={<News   key="health" pageSize={6} country="in" category="health"/>} />
        <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology"/>} />
        </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
