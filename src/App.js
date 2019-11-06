import React, { Component } from "react";
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Home from './Home' ; 
import axios from 'axios'; 
import SearchForm from './SearchForm' ; 
import Contact from './Contact'; 
import ProductList from './ProductList'; 
import './App.css';


class App extends Component {
  
constructor(props) {
  super(props)
  this.state={
    cosmetics:[]
  }
}

componentDidMount() {
  axios.get('https://picsum.photos/v2/list')
  .then(res => { 
    console.log(res.data)
    this.setState({
      cosmetics: res.data
    })
  })
  .catch(err => {console.log(err) }) 
  
   
  }

  render() {
console.log(this.state.cosmetics);
    return (

    

      <Router> 
        
         <nav> 
        <Link to='/'>Home  </Link> {' ❤ '}
        <Link to='/productList'> Products </Link> {' ❤ '}
        <Link to='/search' >Search </Link> {' ❤ '}
        <Link to='/contact'> Contact</Link>
        </nav>
        <div>
          
      <Switch>
      <Route exact path='/' component={Home} /> 
      <Route  path='/productList' component={ProductList} />  
      <Route  path='/search' component={() =>
      <SearchForm allcosmetics={this.state.cosmetics} />}
       />  
      <Route  path='/contact' component={Contact} /> 
    </Switch>

          </div>


        </Router > 


     

    );

  }

}

export default App;
