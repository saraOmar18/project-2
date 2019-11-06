import React from 'react';
import {Button} from 'react-bootstrap'; 

class ProductItem extends React.Component {
  
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
      }

      onClickClose() {
        let index = parseInt(this.props.index);
        this.props.removeItem(index);
      }
      onClickDone() {
        let index = parseInt(this.props.index);
        this.props.markTodoDone(index);
      }
      render () {
        let todoClass = this.props.item.done ? 
            "done" : "undone";
        return(
          <li className="list-group-item ">
            <div className={todoClass}>
              <span  className="glyphicon glyphicon-ok" aria-hidden="true" onClick={this.onClickDone}></span>
              {this.props.item.value}
              <Button variant="outline" type="button" className="close" onClick={this.onClickClose}>&times;</Button>
            </div> 
          </li>     
        );
      }
    }
     
    

export default ProductItem ; 