import './App.css';
import FeedPage from './pages/FeedPage';
import LoadingScreen from './pages/LoadingScreen';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RouteProtection from './utils/RouteProtection';
import AuthProtection from './utils/AuthProtection';


function App() {
  return (

<>
<Router>
  
<Routes>
<Route path='/login' element={<AuthProtection><Login/></AuthProtection>}/>
<Route path='/signup' element={<AuthProtection><Signup/></AuthProtection>}/>
<Route path='/' element={<RouteProtection><FeedPage/></RouteProtection>}/>
<Route path='/loading' element={<LoadingScreen/>}/>

</Routes>

</Router>
</>

)
}

export default App;
