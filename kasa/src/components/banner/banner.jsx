const ImageComponent = ({ image }) => {
  return (
  <section className="banner">
    <img src={image} className="banner__image" alt="Image Component" />
    <span className="banner__filtre"></span>
  </section>
)}

export default ImageComponent
