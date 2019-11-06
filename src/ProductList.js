import React, {Component} from 'react';
import AddedProduct from './AddedProduct'; 
import ProductForm from './ProductForm' ; 
import {Button} from 'react-bootstrap'; 

const productArray = [
    {
      index:1,
      value:"Gloss",
      done:false },
      {
        index:2,
        value:"lipstick",
        done:false
      },
      {
        index:3,
        value:"Powder",
        done:false
      }
    
    ]; 
class ProductList extends Component {
  
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem=this.removeItem.bind(this); 
        this.markTodoDone = this.markTodoDone.bind(this);
        this.state = {
          productItem: productArray,
        }   
     }
     addItem(todoItem) {
        productArray.unshift({
          index: this.state.productItem.length+1, 
          value: todoItem.newItemValue, 
          done: false
        });
        this.setState({productItem: productArray});
      }

     removeItem (itemIndex) {
        productArray.splice(itemIndex, 1);
        this.setState({productItem: productArray});
      }

      markTodoDone(itemIndex) {
        let todo = productArray[itemIndex];
        productArray.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? productArray.push(todo) : productArray.unshift(todo);
        this.setState({productItem: productArray});  
      }

      clearList = (itemIndex) => {
        productArray.splice(itemIndex,productArray.length);
        this.setState({
        productItem: []
        });
          } 


    render() {
    
    return(

        <div id="main">
            <p>Task List Page </p>
            <AddedProduct productItems={this.state.productItem} 
            removeItem={this.removeItem} 
            markTodoDone={this.markTodoDone}/>
            <ProductForm addItem={this.addItem} />
           

        <Button className="form-inline variant"  variant="outline-danger" onClick={this.clearList}> 
        Remove All List   </Button>
       

        </div>
    )
}}

export default ProductList;
