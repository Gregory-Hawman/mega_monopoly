import { Routes, Route } from 'react-router-dom';
import Menu from "./components/website_comps/Menu";
import Navbar from './components/website_comps/Navbar';
import PlayerProfile from './components/website_comps/PlayerProfile';
import Games from './components/website_comps/Games';
import Worlds from './components/website_comps/Worlds';
import Players from './components/in-game_comps/Players';
import Banks from './components/in-game_comps/Banks';
import Boards from './components/in-game_comps/Boards';
import Login from './components/website_comps/Login';
import Signup from './components/website_comps/Signup';
import PrivateRoute from './utilities/PrivateRoute';
import PublicPage from "./components/website_comps/PublicPage";

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