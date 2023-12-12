function ImageComponent({ image, text}) {
  return (

    <>
      <img src={image} className="banner__image" alt="Bannière du site" />
      <span className="banner__filtre"></span>
      <h1 className="banner__text">
        {text}
      </h1>
    </>
  )
}

export default ImageComponent
