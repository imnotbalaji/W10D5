import {NavLink} from "react-router-dom"

const Gallery = (props) => {
    return (
        <NavLink to={`/galleries/${props.gallery.id}`} ><li>{props.gallery.name}</li></NavLink>
    )
}

export default Gallery