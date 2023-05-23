import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";
import { 
  Events, 
  EventsOne, 
  EventsTwo 
} from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";



function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/services1" exact component={ServicesOne} />
        <Route path="/services/services2" exact component={ServicesTwo} />
        <Route path="/services/services3" exact component={ServicesThree} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/events" exact component={Events} />
        <Route path="/events/events1" exact component={EventsOne} />
        <Route path="/events/events2" exact component={EventsTwo} />
        <Route path="/support" exact component={Support} />
      </Switch>
    </Router>
  );
}
  
export default App;