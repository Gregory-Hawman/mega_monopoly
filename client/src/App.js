import { Routes, Route } from 'react-router-dom';
import Menu from "./components/page/Menu";
import Navbar from './components/page/Navbar';
import PlayerProfile from './components/page/PlayerProfile';
import Games from './components/page/Games';
import Worlds from './components/page/Worlds';
import Players from './components/game/Players';
import Banks from './components/game/Banks';
import Boards from './components/game/Boards';
import Login from './components/page/Login';
import Signup from './components/page/Signup';
import PrivateRoute from './utilities/PrivateRoute';
import PublicPage from "./components/page/PublicPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={ <PublicPage/> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/menu' element={ <PrivateRoute> <Menu /> </PrivateRoute>} />
        <Route path='/player-profile' element={ <PrivateRoute> <PlayerProfile /> </PrivateRoute> } />
        <Route path='/games' element={ <PrivateRoute> <Games /> </PrivateRoute>} />
        <Route path='/worlds' element={ <PrivateRoute> <Worlds /> </PrivateRoute>} />
        <Route path='/players' element={ <PrivateRoute> <Players /> </PrivateRoute>} />
        <Route path='/banks' element={ <PrivateRoute> <Banks /> </PrivateRoute>} />
        <Route path='/boards' element={ <PrivateRoute> <Boards /> </PrivateRoute>} />
        <Route path="*" element={() => "404 Page Not Found"} />
      </Routes>
    </div>
  );
}

export default App;
