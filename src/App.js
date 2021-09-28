import './App.css';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import LatestEvents from './component/LatestEvent';
import Members from './component/Member';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/latestEvents" component={LatestEvents}/>
            <Route exact path="/members" component={Members}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
