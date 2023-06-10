import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.dish) {

            return (
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            )
        } else {
            return (<div></div>)
        }
    }
}

export default DishDetail