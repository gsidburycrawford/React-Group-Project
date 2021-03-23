import React, {Component} from 'react';
import PropTypes from 'prop-types'; // be sure to include this!

class ShoppingItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h4>{this.props.department}</h4>
            <h5>{this.props.title}</h5>
            <p>{this.props.price}</p>
            <button className="btn btn-info">Add to Card</button>
            <button className="btn btn-danger">More Info</button>
          </div>
        </div>
      </div>
    );
  }
}

ShoppingItem.defaultProps = {
  title: "[INSERT NAME HERE]",
  department: "[INSERT DEPARTMENT HERE]",
  description: "INSERT DESCRIPTION HERE]",
  price: "[INSERT PRICE HERE]",
};

ShoppingItem.propTypes = {
  title: PropTypes.string,
  department: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};

export default ShoppingItem;