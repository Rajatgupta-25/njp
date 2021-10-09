import './App.css';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import LatestEvents from './component/LatestEvent';
import Members from './component/Member';
import Menu from './component/Menus';
import JoinNJP from './component/Join';
import AdiShankaracharya from './component/AdiShankaracharyaAbout';
import AboutSwami from './component/SwamiNischalananda';
import AboutTimeline from './component/Timeline';
import GurudevGallery from './component/Gallery';
import Shishya from './component/DikshitShishya';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/latestEvents" component={LatestEvents}/>
            <Route exact path="/members" component={Members}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/join" component={JoinNJP}/>
            <Route exact path="/aboutAdiShankaracharyaJi" component={AdiShankaracharya}/>
            <Route exact path="/aboutSwamiNischalanandaSaraswatiJi" component={AboutSwami}/>
            <Route exact path="/dikshitShishya" component={Shishya}/>
            <Route exact path="/timeline" component={AboutTimeline}/>
            <Route exact path="/gallery" component={GurudevGallery}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
