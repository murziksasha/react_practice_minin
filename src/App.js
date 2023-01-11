import {BrowserRouter, Routes} from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container pt-4">
        <Routes>

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
