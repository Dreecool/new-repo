import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import PrivateRoutes from './privateRoute/privateRoute';
import WelcomePage from './pages/welcomePage';

function App() {

  return (

   <>

      <BrowserRouter>

        <Routes>

            <Route path='/' element={<LoginPage/>}/>
            <Route path='/reg' element={<RegisterPage/> }/>

            <Route  element={<PrivateRoutes/>}>

              <Route path='/welcome' element={<WelcomePage/>} exact/>

            </Route>

        

        </Routes>


      </BrowserRouter>


   </>



  );
}

export default App;
