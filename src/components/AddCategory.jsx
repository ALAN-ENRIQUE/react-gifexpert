import { useState } from "react"
import { GifExpertApp } from "../GifExpertApp"


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange= ({target}) => {

        setInputValue(target.value)
    }

    const onSubmit = (evento) => {
        evento.preventDefault()
        // console.log(inputValue)
        if (inputValue.trim().length <= 1 ) return;
        setInputValue('')
        onNewCategory( inputValue.trim() );
    }


  return (
    <form onSubmit={onSubmit}>
        <input type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={ onInputChange}
    />
    </form>
    
  )
}
