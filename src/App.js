import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Comprar from './pages/comprar';
import Contato  from './pages/contato';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"></Link>
        <Link to="/sobre"></Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comprar" component={Comprar} />
        <Route path="/sobre" component={Sobre} />
        <Route exact path="/contato" component={Contato} />
      </Switch>
    </Router>
  );
}
 
export default App;