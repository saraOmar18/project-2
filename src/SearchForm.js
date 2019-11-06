import React from 'react'; 
import Cosmetics from './Cosmetics' ; 

const SearchForm=(props) => {
  console.log(props.allcosmetics);

  const all=props.allcosmetics.map((item,index) => {
      return <Cosmetics url={item.download_url} key={index}/> 

    })
    
    return(
        <div>
         {all}
        </div>
        
    )
} 
export default SearchForm ; 