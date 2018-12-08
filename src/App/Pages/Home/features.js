import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart_LocalStorage, getJSONCart_localStorage } from "../../functions/localstorage";

class Features extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            products: false,
            cart: []
        }
        this.addToCart = this.addToCart.bind(this);
    }

   
    componentWillMount(){

        this.setState({
            products: this.props.products,
            cart: this.props.cart
        })
    
    }



    componentWillReceiveProps(props){

        this.setState({
            products: props.products,
            cart: props.cart
        })
        
    }

    removeDomClass(element, _class){
        if (element.classList.contains(_class)) {
            element.classList.remove(_class);
        } 
    }
    addDomClass(element, _class){
        element.classList.add(_class);
    }



    searchInArrayObject(nameKey, myArray){
        
        if (myArray.length > 0) {
            for (let i=0; i < myArray.length; i++) {
                if (myArray[i] === nameKey) {
                    return true;
                }
            }
        }
        return false;
    }

    addToCart(product_id, element){

        // Persist to local storage
        addToCart_LocalStorage(product_id)

        // Persist to App state
        this.props.dispatch({type: 'cart', data: product_id});


        let button = element.target;
        let product_card = button.closest(".card-product");  
        product_card.classList.add('product-added');

    }
    render(){
        return(
            <section className="products">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <h4 className="sec-heading">Feature products</h4>
                    </div>
                    {
                        
                        this.state.products.length > 0 ? this.state.products.map((product) => {
                            let product_key = product.key;
                            let url = `/product/${product.name}/imap/${product.key}`; 
                            return (
                                <div key={product.key} className="col-md-2dot4">
                                    <figure className="card card-product">
                                        <div className="img-wrap"> <img src={product.image} alt="product"/>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <Link to={{ pathname: url, search: '', hash: '', key: 0} } >
                                                {product.name} 
                                            </Link>
                                            <div className="action-wrap">
                                            
                                                <div className="price-wrap h5">
                                                    <span className="price-new">
                                                        ${product.price} {(product.discount > 0) ? <small><small style={{color:'green',fontWeight: 600}}> -{product.discount}  % </small></small> : ''}
                                                    </span>
                                                    {
                                                        (this.searchInArrayObject(product_key, this.state.cart)) ? 
                                                        <span className="addtocart"><i className="fa fa-shopping-cart"></i>&nbsp; Added</span> : 
                                                        <button className="btn btn-primary btn-sm float-right" onClick={(e) => {
                                                            e.preventDefault();
                                                            this.addToCart(product_key, e)
                                                        }}>Add to cart  </button> 
                                                    }
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div> 
                            )
                        })
                        : <div className="col-12"><h4 style={{textAlign: 'center'}}>Loading ...</h4></div>
                    }
                    
                    </div>
                </div>
            </section>

        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Features);