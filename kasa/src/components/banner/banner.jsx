function ImageComponent({ image, text, titre }) {
  return (

    <>
      <img src={image} className="banner__image" alt="Bannière du site" />
      <span className="banner__filtre"></span>
      <p className="banner__text">
        {text}
      </p>
    </>
  )
}

export default ImageComponent
