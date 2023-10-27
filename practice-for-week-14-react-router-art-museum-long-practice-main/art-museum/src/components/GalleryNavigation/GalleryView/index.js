import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ArtImageTile from "../../ArtImageTile";

const GalleryView = ({galleries}) => {
    const {galleryId} = useParams();
    
    
    const gallery = galleries.find((element)=> element.id === parseInt(galleryId));
    const artworks = gallery.objects
    const artImages = artworks.map((artwork)=>{
        return <ArtImageTile art={artwork} galleryId={gallery.id}/>
    })
    
    return (
        <div>
            <h2> {gallery.name}</h2>
            {artImages}
        </div>
    )
}

export default GalleryView