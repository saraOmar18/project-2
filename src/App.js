import React, { Component } from "react";
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Home from './Home' ; 
import axios from 'axios'; 
import SearchForm from './SearchForm' ; 
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
        <Link to='/tasklist'> Tasks </Link> {' ❤ '}
        <Link to='/gallery' >Gallery </Link> {' ❤ '}
        </nav>
        <div>
          
      <Switch>
      <Route exact path='/' component={Home} /> 
      <Route  path='/tasklist' component={ProductList} />  
      <Route  path='/gallery' component={() =>
      <SearchForm allcosmetics={this.state.cosmetics} />}/>  
    </Switch>

          </div>


        </Router > 


     

    );

  }

}

export default App;
