
import './App.css';
import {Routes, Route, HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';



import HomePage from './components/Home';
import NotFoundPage from './components/NotFoundPage';



function App() {
  return(
<HashRouter>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/endpoint" element={<NotFoundPage/>} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
</HashRouter>
  );
}

export default App;
