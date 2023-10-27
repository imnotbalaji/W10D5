import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryNavigation/GalleryView";
import {Route} from 'react-router-dom';

function App() {
  
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records} />
      
      <Route path="/galleries/:galleryId" >
        <GalleryView galleries = {harvardArt.records}/>
      </Route>

      {/* <Route path = "" component = {}/> */}
    </div>
    
    
  );
}

export default App;
