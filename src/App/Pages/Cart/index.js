import React, { Component } from 'react';
import { removeToCart_LocalStorage } from "../../functions/localstorage";
import CartItem from "./cart-item";
import {connect} from 'react-redux';
import PageBanner from '../Header/page-banner';
import CartModalBox from "./cart-modal-box";
import Header from "../Header";
import Footer from "../Footer";


class Cart extends Component {


    constructor(props){
        super(props)
        this.state = {
            products: [],
            cart: [],
            cart_items : [],
            total_price: 0
        }
        this.authPlaceOrder = this.authPlaceOrder.bind(this)
        this.formSerialize = this.formSerialize.bind(this)
        this.showModalBox = this.showModalBox.bind(this)
        this.cartItem_methods = this.cartItem_methods.bind(this)
        this.updatePrice_checkout = this.updatePrice_checkout.bind(this)
        this.findCartElement_AndPushToCart_items = this.findCartElement_AndPushToCart_items.bind(this)
    }


    findCartElement_AndPushToCart_items(callback){
        // get cart related items from products
        let object = this.state.products;
        let cart = this.state.cart;
        
        if (object) {
            let cart_items =  [];
            object.map((_obj) => {
                cart.map((item) => {
                    if (item === _obj.key) {
                        _obj.qty = 1;
                        cart_items.push(_obj)
                    }
                })
            })

            this.setState({
                cart_items
            }, () => {
                callback()
            })
        }
    
    }

    componentWillMount(){
        this.setState({
            products: this.props.products,
            cart: this.props.cart
        }, () => {
            this.findCartElement_AndPushToCart_items( this.updatePrice_checkout )
        })

    }


    componentWillReceiveProps(props){
        this.setState({
            products: props.products,
            cart: props.cart
        }, () => {
            this.findCartElement_AndPushToCart_items( this.updatePrice_checkout )
        })

    }


    componentDidMount() {
        
    }

    showModalBox(){
        // trigger modal box for auth and place order
        window.jQuery(document).ready( function ($) {     
            $('#cart_modal_box').modal('show')
        })
    }
    
    formSerialize(form) {
        const data = new FormData(form);
        return new URLSearchParams(data).toString();
    }

    authPlaceOrder(formJson){

        let {cart_items, total_price} = this.state;
        let placeOrderTo = {placeOrderTo: formJson}
        total_price = {total_price: total_price}
        cart_items.push(placeOrderTo, total_price)
        alert(JSON.stringify(cart_items));
    }


    cartItem_methods(obj){

        switch (obj.type) {
            case 'remove':

                // remove from localStorage
                removeToCart_LocalStorage(obj.id);

                
                let NewCartArray = this.state.cart_items.filter((item) => {
                    return item.key !== obj.id
                })
                this.setState({
                    ...this.state,
                    cart_items: NewCartArray
                }, () => {
                    this.updatePrice_checkout()
                })

                // remove from app store
                this.props.dispatch({type: 'cart_remove_item', data: obj.id})

                break;
                
            case 'item_qty':
                
                this.state.cart_items.map((item) =>  {
                    if (item.key === obj.id) {
                        item.qty = obj.qty
                    }
                })
                this.setState({ 
                    ...this.state,
                    cart_items: this.state.cart_items
                }, () =>  {
                    this.updatePrice_checkout()
                })
               
                break;

            default:
                break;
        }

    }

    updatePrice_checkout(){
        let cart_items = this.state.cart_items;
        if (cart_items) {
            let total_price = 0;


            cart_items.map( (item) => {
                total_price+= parseInt(item.price * parseInt(item.qty))
            })



            this.setState({
                total_price: parseInt(total_price)
            })


        }
    }

  render() {
    return (
        <div className="App">
            <Header />

                <div className="body_part">
                    <PageBanner />
                    < CartModalBox formData={this.authPlaceOrder} />
                    <section className="section-content bg padding-y border-top">
                        <div className="container">
                        <div className="row">
                            <main className="col-sm-9">
                            <div className="card">
                                <table className="table table-hover shopping-cart-wrap">
                                    <thead className="text-muted">
                                        <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col" width={120}>Quantity</th>
                                        <th scope="col" width={220}>Price &nbsp; <small>(USD each)</small></th>
                                        <th scope="col" className="text-right" width={200}>Action</th>
                                        </tr>
                                    </thead>



                                    <tbody>
                                        {
                                            this.state.cart_items.length > 0 ?
                                            this.state.cart_items.map((item) => {
                                                return <CartItem methods={this.cartItem_methods} item_key={item.key} key={item.key} data={item} />
                                            })
                                            : <tr><td colSpan="4" style={{textAlign: 'center', color: 'gray'}}><b>No products in your bucket .</b></td></tr>
                                        }
                                    </tbody>



                                </table>
                            </div> {/* card.// */}
                            </main> {/* col.// */}
                            <aside className="col-sm-3">
                            <dl className="dlist-align">
                                <dt>Total price: </dt>
                                <dd className="text-right">USD {this.state.total_price}</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>Discount:</dt>
                                <dd className="text-right">USD 0</dd>
                            </dl>
                            <dl className="dlist-align h4">
                                <dt>Total:</dt>
                                <dd className="text-right"><strong>USD {this.state.total_price}</strong></dd>
                            </dl>
                            <hr />
                            <button disabled={ this.state.cart.length > 0 ? '' : "disabled" } onClick={this.showModalBox} className="btn btn-block btn-outline-primary">Place order</button>
                           
                            <hr />
                            <figure className="itemside mb-3">
                                <aside className="aside"><img src="/images/icons/pay-visa.png" /></aside>
                                <div className="text-wrap small text-muted">
                                Pay 84.78 AED ( Save 14.97 AED )
                                By using ADCB Cards 
                                </div>
                            </figure>
                            <figure className="itemside mb-3">
                                <aside className="aside"> <img src="/images/icons/pay-mastercard.png" /> </aside>
                                <div className="text-wrap small text-muted">
                                Pay by MasterCard and Save 40%. <br />
                                Lorem ipsum dolor 
                                </div>
                            </figure>
                            </aside> 
                        </div>
                        </div> 
                    </section>
                    <section className="section-name bg padding-y">
                        <div className="container">
                        <h4>Instruction</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </section>
                </div>

            <Footer />
        </div>
    );
  }
}


let mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (obj) => {
            dispatch(obj)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
