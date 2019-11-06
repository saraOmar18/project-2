import React from 'react'; 
import {Container} from 'react-bootstrap'; 
const Cosmetics=(props) => {
    
    return(
      <Container className="cont">
      <div className="column">
      
        
           <li>  
          <img id="gallery" src={props.url} width="500px" height="500px" ></img>
          </li>

      </div>
      </Container>
    )
} 
export default Cosmetics ; 