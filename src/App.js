import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Alert from "./components/alert/Alert";
import { AlertState } from "./context/alert/AlertState";
import { GithubState } from './context/github/githubState';


function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert alert ={{text: 'Text Alert!'}}/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="profile/:name" element={<Profile/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>

  );
}

export default App;
