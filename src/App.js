import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/LandingPage' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
