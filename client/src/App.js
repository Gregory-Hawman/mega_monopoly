import Menu from "./components/Menu";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Players from './components/Players';
import Banks from './components/Banks';
import Boards from './components/Boards';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Menu /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='/players' element={ <Players /> } />
        <Route path='/banks' element={ <Banks /> } />
        <Route path='/boards' element={ <Boards /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={ <Signup /> } />
      </Routes>
    </div>
  );
}

export default App;
