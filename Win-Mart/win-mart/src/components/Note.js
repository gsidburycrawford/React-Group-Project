import React, {Component} from 'react';
import PropTypes from 'prop-types'; // be sure to include this!
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardColumns } from "react-bootstrap";

class ShoppingItem extends Component {
  constructor() {
    super();
  }

  state = { showing: false };
  render() {
    const { showing } = this.state;
    return (
    <div className="col-md-6">
    <Card>
          <Card.Img 
          variant="top" 
          src={this.props.itemImg} 
 
          onClick={() => this.setState({ showing: !showing })}
          />
          <Card.Body>
            <Card.Title>{this.props.department}</Card.Title>
            <Card.Text>
            {this.props.title}
            <br />
            { showing
                    ? <div><br/>{this.props.description}</div>
                    : null
            }
            <br/>
            {this.props.price}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    );
  }
}
ShoppingItem.defaultProps = {
    itemImg: "https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
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