import  "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/Form.css';
//importamos los componentes creados

import About from './components/paginas/about';
import Contact from './components/paginas/contact';
import Home from './components/paginas/home';
import Inscribirse from './components/paginas/inscribirse';
import NavBar from './layouts/navbar';

function App() {
  return (
    
    <main>
    <div className="conteiner" >
      
        <Router>

        <Routes>

          <Route path='/' element={ <NavBar /> }>
            
            <Route index element={ <Home /> } />
            <Route path='about' element={ <About /> } />
            <Route path='contact' element={ <Contact /> } />
            <Route path='inscribirse' element={ <Inscribirse /> } />
            
            <Route path='*' element={ <Navigate replace to="/" /> }/>

          </Route>
          
        </Routes>
  </Router>
  
            <b>Copyright&copy;Circulo 2022. </b>
    
    </div>
    </main>
  );
}

export default App;
