import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>
    </div>
   </Router>
  );
}

export default App;
