import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const GalleryView = ({galleries}) => {
    const {galleryId} = useParams();
    
    
    const gallery = galleries.find((element)=> element.id === parseInt(galleryId));
    
    
    
    return <h2> {gallery.name}</h2>
}

export default GalleryView