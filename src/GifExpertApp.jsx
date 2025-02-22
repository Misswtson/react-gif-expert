import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState(['Star Wars']);
    const onAddCategory = (newCategory) => {
      if( categories.includes( newCategory )) return;
      setCategories([ newCategory, ...categories]);
}
  return (
    <>
    <h2>Gifs Expert App</h2>

     <AddCategory 
     onNewCategory= { (event) => onAddCategory(event)}
     />

    { 
      categories.map( (category ) => (
        <GifGrid 
        key={ category }
        category={ category }
        /> 
        ))
    } 
   
    </>
  )
}
