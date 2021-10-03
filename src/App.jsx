

import Pagina1 from 'pages/pagina1';
import Pagina2 from 'pages/pagina2';
import Pagina4 from 'pages/pagina4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/styles.css';
import './styles/stylesali.css';
import Login from 'pages/login';
import PaginaP from 'pages/paginaP';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/pagina4'>
              <Pagina4 />
            </Route>
            <Route path='/pagina1'>
              <Pagina1 />
            </Route>
            <Route path='/pagina2'>
              <Pagina2 />
            </Route>
            <Route path='/paginaP'>
              <PaginaP />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        </Router>      
    </div>
  );
}

export default App;
