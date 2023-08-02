function ImageComponent({ image, text }) {
  return (

    <>
      <img src={image} className="banner__image" alt="Image Component" />
      <span className="banner__filtre"></span>
      <p className="banner__text">
        {text}
      </p>
    </>
  )
}

export default ImageComponent
