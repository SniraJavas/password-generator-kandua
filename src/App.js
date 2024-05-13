
import Home from "./components/Home";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import PasswordGen from './components/PasswordGen';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/PasswordGen" element={<PasswordGen/>} />
        </Routes>
    </Router>
  );
}

export default App;
