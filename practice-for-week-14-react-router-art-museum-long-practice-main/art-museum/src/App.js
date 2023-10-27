import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryNavigation/GalleryView";
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/Home";
import Errors from "./components/Errors";
function App() {
  
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route path="/galleries/:galleryId" >
          <GalleryView galleries = {harvardArt.records}/>
        </Route>
        <Route path="/errors">
          <Errors />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/errors" />
        
      </Switch>
      {/* <Route path = "" component = {}/> */}
    </div>
    
    
  );
}

export default App;
