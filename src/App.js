
import Home from "./components/Home";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import PasswordGen from './components/PasswordGen';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/PasswordGen" component={PasswordGen} />
        </Routes>
    </Router>
  );
}

export default App;
