import {NavLink} from "react-router-dom"
import Gallery from "./gallery"

const GalleryNavigation = ({galleries}) => {
    console.log(galleries)
    
    const gallery = galleries.map(gallery => {
        return (
            // <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}><li>{gallery.name}</li></NavLink>
            <Gallery key={gallery.id} gallery={gallery}/>
        )
    })
    return (
        <div>
            <h1>Galleries</h1>
            <NavLink to="/">Home</NavLink>
            <ul>{gallery}</ul>
        </div>
    )
}

export default GalleryNavigation