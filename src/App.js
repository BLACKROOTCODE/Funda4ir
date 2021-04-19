import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

//React router import
import { Switch, Route} from 'react-router-dom';

//import pages
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Explore from './components/pages/Explore';
import Test from './components/pages/Test';

function App() {
  
  return (
    <div>
    <Navbar/> 
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/explore" component={Explore}/>
      <Route component={NotFound}/>
      <Route path="/test-your-knowledge" component={Test}/>
    </Switch >
    <Footer/>
    
    </div>
  );
  
}


export default App;
