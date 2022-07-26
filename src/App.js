import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import UpdateDetail from './pages/Home/UpdateDetail/UpdateDetail';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/Signup/Signup';
import ManageStock from './pages/ManageStock/ManageStock';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';
import RequireAuth from './pages/Shared/RequireAuth';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/inventory/:updateId' element={<RequireAuth><UpdateDetail /></RequireAuth>}></Route>
      <Route path='/manageStock' element={<ManageStock />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='*' element={<NotFound />}></Route>
     </Routes>
     
     {/* <Footer /> */}
    </div>

  );
}

export default App;
