import React from 'react';

class CartItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            price: 0,
            qty: 1
        }
        this.multipleItemsPrice_count = this.multipleItemsPrice_count.bind(this)
    }

    multipleItemsPrice_count(obj){
        
        switch (obj.type) {
            case 'item_qty':
                let price = this.props.data.price * obj.qty;
                this.setState({
                    qty: obj.qty,
                    price
                })
                break;
        
            default:
                break;
        }
    }

    componentWillMount(){
        this.setState({
            price: this.props.data.price
        })
    }

    render(){
        return(
            <tr>
                <td>
                    <figure className="media">
                    <div className="img-wrap"><img src={this.props.data.image} alt="product_image" className="img-thumbnail img-sm" /></div>
                    <figcaption className="media-body">
                        <h6 className="title text-truncate">{this.props.data.name} </h6>
                        <dl className="dlist-inline small">
                        <dt>Size: </dt>
                        <dd>Normal</dd>
                        </dl>
                        <dl className="dlist-inline small">
                        <dt>Color: </dt>
                        <dd>black, white</dd>
                        </dl>
                    </figcaption>
                    </figure> 
                </td>
                <td> 
                    <select onChange={(e) => {
                        let _e = {type: 'item_qty', id: this.props.item_key, qty: e.target.value};
                        this.multipleItemsPrice_count(_e)
                        this.props.methods(_e)
                    }} className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>	
                    <option value="3">3</option>	
                    <option value="4">4</option>	
                    </select> 
                </td>
                <td> 
                    <div className="price-wrap"> 
                        <var className="price">USD {this.state.price} </var>
                        <small>{this.state.qty} x {this.props.data.price} = USD {this.state.price} </small>
                    </div> {/* price-wrap .// */}
                </td>
                <td className="text-right"> 
                    <button onClick={() => {
                        this.props.methods({type: 'wishItem', id: this.props.item_key})
                    }} data-original-title="Save to Wishlist" className="btn-sm btn btn-outline-success" data-toggle="tooltip">

                        <i className="fa fa-heart" />

                    </button> 
                    <button style={{marginLeft: 10}} onClick={() => {
                        this.props.methods({type: 'remove', id: this.props.item_key})
                    }} className="btn-sm btn btn-outline-danger"> × Remove</button>
                </td>
            </tr>
        )
    }
}

export default CartItem;