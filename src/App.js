
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';




import HomePage from './components/Home';
import NotFoundPage from './components/NotFoundPage';



function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<HomePage  />} />
        <Route path='*' element={<NotFoundPage  />} />
      </Routes>
    </Router>
  );
}

export default App;
