import {useState} from 'react'
import { AddCategory,GifGrid } from './components';

//Recuerda que comentando lo que haras, copilot entederá mejor.


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  
  const onAddCategory = (newCategory) => {
    // const nuevoItem = 'Nuevo elemento';
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([...categories, newCategory]);
    // console.log(newCategory)
  }

  return (
    <>
      <div>GifExpertApp</div>

      <AddCategory onNewCategory={ (value) => onAddCategory(value)} />
      
      {
      categories.map((category) =>(
        <GifGrid key={category} category={category}/>
        ))
      }
      
    </>
  );
};
