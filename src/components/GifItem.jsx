

export const GifItem = ({id,title,url}) => {
    console.log(id,title,url)
  return (
    <div className="card">
        <p>{title}</p>
        <img src={url} alt="Imagen" />
        
    </div>
  )
}
