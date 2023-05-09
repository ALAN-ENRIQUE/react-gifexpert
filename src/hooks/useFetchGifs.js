import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
const [images, setImages] = useState([])
const [isLoading, setisLoading] = useState(true)

const getImagenes = async () => {
  const newImagenes = await getGifs(category)
  setImages(newImagenes)
  setisLoading(false)
}


  useEffect(() => {
    getImagenes();
    // getGifs(category)
      // .then(setCounter)
  }, [])

    return {
        images,
        isLoading
    }
}
