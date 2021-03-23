	
import React, {Component} from 'react';
import ShoppingItem from './Note';
 
class Shopping extends Component {
  constructor() {
    super();
  }
 
  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            <ShoppingItem/>
            <ShoppingItem/>
            <ShoppingItem/>
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
}
 
export default Shopping;