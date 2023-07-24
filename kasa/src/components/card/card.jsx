import { Link } from "react-router-dom"

function Card({data}){
    return (
        <Link to={`/logement/${data.id}`}>
            <div className="grid__card">
                <img src={data.cover} alt="" className="grid__img"/>
                <span className="grid__filtre"></span>
                <h2 className="grid__texte">{data.title}</h2>
            </div>
        </Link>
    )
}
export default Card