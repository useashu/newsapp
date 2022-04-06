import React from 'react'
import Navbar from "./Navbar";
import News from './News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const apikey=process.env.API_KEY;
  return (
    <BrowserRouter>
    <div className="App">
      
        <Navbar/>
        <Routes>
        <Route exact path="/business" element={<News apikey={apikey} key="business" pageSize={6} country="in" category="business"/>} />
        <Route exact path="/sports" element={<News apikey={apikey} key="sports" pageSize={6} country="in" category="sports"/>} />
        <Route exact path="/science" element={<News apikey={apikey} key="science" pageSize={6} country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News apikey={apikey} key="entertainment" pageSize={6} country="in" category="entertainment"/>} />
        <Route exact path="/" element={<News apikey={apikey} key="general" pageSize={6} country="in" category="general"/>} />
        <Route exact path="/health" element={<News apikey={apikey}  key="health" pageSize={6} country="in" category="health"/>} />
        <Route exact path="/technology" element={<News apikey={apikey} key="technology" pageSize={6} country="in" category="technology"/>} />
        </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
