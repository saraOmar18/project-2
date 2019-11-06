import React from 'react'; 
import Cosmetics from './Cosmetics' ; 
import { Container}from 'react-bootstrap'; 


const SearchForm=(props) => {

  const all=props.allcosmetics.map((item,index) => {
      return <Cosmetics url={item.download_url} key={index}/> 

    })
    
    return(
        <Container className="row">
          
           {all}
           
       
        </Container>
         
        
        
    )
} 
export default SearchForm ; 