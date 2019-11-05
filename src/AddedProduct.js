import React, {Component} from 'react';
import ProductItem from './ProductItem';




class  AddedProduct  extends Component {
render () {

  const allproduct = this.props.productItems.map((task, index) => {
    return (<ProductItem item={task} key={index} index={index} 
      removeItem={this.props.removeItem} 
      markTodoDone={this.props.markTodoDone} />);
  });

  return (
    <ul className="list-group">
      {allproduct}
    </ul>
  ); }}
  

export default AddedProduct;