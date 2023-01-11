import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="profile/:name" element={<Profile/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
