import {NavLink} from "react-router-dom"
import Gallery from "./gallery"
import './GalleryNavigation.css'

const GalleryNavigation = ({galleries}) => {
    console.log(typeof galleries)
    
    const gallery = galleries.map(gallery => {
        return (
            // <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}><li>{gallery.name}</li></NavLink>
            <Gallery key={gallery.id} gallery={gallery}/>
        )
    })
    return (
        <div>
            <h1>Galleries</h1>
            <NavLink exact to="/">Home</NavLink>
            <ul>{gallery}</ul>
        </div>
    )
}

export default GalleryNavigation