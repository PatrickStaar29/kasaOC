import Tabl from "../data/data"

function Card(){
    return (
        <>
            {Tabl.map((item, index) => (
                <div key={index}className="grid__card">
                    <img src={item.cover} alt="" className="grid__img"/>
                    <span className="grid__filtre"></span>
                    <h2 className="grid__texte">{item.title}</h2>
                </div>
            ))}
        </>
    )
}
export default Card