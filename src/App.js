 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Home } from './components/Home';
import { SuperHeroes } from './components/SuperHeroes';
import{RQSuperHeroes}from './components/RQSuperHeroes'
 
 
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/superheros' element={<SuperHeroes/>}></Route>
      <Route path='/rqsuper' element={<RQSuperHeroes/>}></Route>
    </Routes>
    </BrowserRouter>

    
     
        {/* <nav>
          <ul>
            <li>
          
            <Link to="/rqsuper">Public Page</Link>
            
            </li>
            <li>
              <a>Traditional Super Heroes</a>
            </li>
            <li>
              <a>RQ Super Heroes</a>
            </li>
          </ul>
        </nav> */}
        
      </div>
    
  )
}

export default App