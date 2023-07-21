const ImageComponent = ({ image, text }) => {
  return (
    
  <section className="banner">
    <img src={image} className="banner__image" alt="Image Component" />
    <span className="banner__filtre"></span>
    <p className="banner__text">
        {text}
      </p>
  </section>
)}

export default ImageComponent
