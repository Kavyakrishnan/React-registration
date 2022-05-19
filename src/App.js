import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Component/Login';
import Register from './Component/Register';

function App() {
  return (
    <div>
      <Login/><Register/>
    </div>
  );
}

export default App;
