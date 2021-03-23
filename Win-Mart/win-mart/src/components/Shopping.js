import React, {Component} from 'react';
import ShoppingItem from './Note'
  class Shopping extends Component {
    constructor() {
      super();
      this.state = {
        ShoppingItems:[]
      }
    }
    addShoppingItem() {
      let ShoppingItems = this.state.ShoppingItems;
      ShoppingItems.push(
        {
          id: Date.now()
        }
      );
      this.setState(
        {
          ShoppingItems: this.state.ShoppingItems
        }
      );
    }
    // // passing in the id of the ShoppingItemcard from which the 'delete button' was clicked
  deleteShoppingItem(id){
    // // creating a new var that holds current ShoppingItems
    let newShoppingItemArr = this.state.ShoppingItems;
    // // mapping through array of all ShoppingItems that's saved in our state, passing in the current ShoppingItem along with the index of that current ShoppingItem
    newShoppingItemArr.map((ShoppingItem, index) => {
      // at ever ShoppingItem (from the array in our state) we check to see if the id passed in matches the id of the ShoppingItem we're currently on
      if (id === ShoppingItem.id) {
        // // if it matches we're removing just one item from that array
        newShoppingItemArr.splice(index,1);
      }
    });
    // // our array now has the same elements minus the one we just deleted
    // // update our state to show that new array which will trigger a re-render
    this.setState(
      {
        ShoppingItems: newShoppingItemArr
      }
    );
  }
    render() {
      return (
        <div>
          <div className="div-board">
            <div className="row">
            {
            this.state.ShoppingItems.map(item => {
                return <ShoppingItem department={item.department} title={item.title}/>
              })
          }
              <ShoppingItem department ="Apperal" title="List of clothing and shoes available" />
              <ShoppingItem department ="Electronics" title ="List of Electronics available " />
              <ShoppingItem department ="Groceries" title ="Groceries that are available "/>
              <ShoppingItem department ="Furniture" title ="List of furniture"/>
              <ShoppingItem department ="Extras" title ="Home essentials"/>
            </div>
          </div>
          <div>
          <button className="btn btn-success add-button" onClick={this.addShoppingItem.bind(this)}>
            Add
          </button>
          </div>
        </div>
      );
    }
  }
  export default Shopping;