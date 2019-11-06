import React from 'react' ; 
import {Carousel} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import img1 from './beautiful.jpg';
import img2 from './white-and-pink.jpg';
import img3 from './ina-soulis.jpg'; 
import img4 from './bloom.jpg'; 
import img5 from './assorted-color.jpg'; 

const Home=(props) => {
    return(
        <div>
           <br/> 
           
          
            <Container className="cont"> 
            
            <Carousel>
               
                <img  src={img1}  height="350px" ></img>
                <img  src={img2}  height="350px" ></img>
                <img  src={img3}  height="350px" ></img>
                <img  src={img4}  height="350px" ></img>
                <img  src={img5}  height="350px" ></img>

               
               
            </Carousel>


           
            

            </Container>
            <h1> Welcome To Our Website </h1>

           
        
        
     </div> 
    )
}
export default Home;
