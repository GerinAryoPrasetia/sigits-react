import './App.css';
import './pages/Home';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch
} from 'react-router-dom';
import Details from './components/Details';
import Graph from './pages/Graph';
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/details' element={<Graph />}></Route>
    </Routes >
  );
}

export default App;
