import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBanner from '../Header/page-banner';
import Header from "../Header";
import Footer from "../Footer";



class ProductDetaile extends Component {

  constructor(props){
    super(props);
    this.state = {
      product: {
        category: "wait ...",
        company: "wait ...",
        description: "wait ...",
        discount: "wait ...",
        image: "/images/ajax-loader2.gif",
        model: "wait ...",
        name: "wait ...",
        price: "wait ..."
      }
    }
  }

componentWillMount(){
    // Get product key from router props
    let product_key = this.props.match.params.key;
    if (this.props.products && this.props.products.length >= 1) {       
        this.props.products.map( (product) => {
            if (product_key === product.key) {
                this.setState({ product })
            }
        })
    }
}
componentDidMount(){
    window.$("html, body").animate({ scrollTop: window.$(".products").offset().top }, "slow");
}

  componentWillReceiveProps(props){
    // Get product key from router props

    let product_key = props.match.params.key;
    if (props.products && props.products.length >= 1) {       
        props.products.map( (product) => {
            if (product_key === product.key) {
                this.setState({ product })
            }
        })
    }
  }

  addToCart(element){
    alert(element.target)
  }
 
  render() {
    return (
        <div className="App">
            <Header />
                <div className="body_part">
                    <PageBanner {...this.props}/>    
                    <section className="products">
                        <div className="container">
                            <div className="card">
                            <div className="row">
                                <aside className="col-sm-5 border-right">
                                <article className="gallery-wrap"> 
                                    <div className="img-big-wrap">
                                    <div> <a href="images/items/1.jpg" data-fancybox><img src={this.state.product.image} alt="product_image" /></a></div>
                                    </div> {/* slider-product.// */}
                                    <div className="img-small-wrap">
                                    <div className="item-gallery"> <img src={this.state.product.image} alt="product_other_image" /></div>
                                    <div className="item-gallery"> <img src={this.state.product.image} alt="product_other_image" /></div>
                                    <div className="item-gallery"> <img src={this.state.product.image} alt="product_other_image" /></div>
                                    <div className="item-gallery"> <img src={this.state.product.image} alt="product_other_image" /></div>
                                    </div> {/* slider-nav.// */}
                                </article> {/* gallery-wrap .end// */}
                                </aside>
                                <aside className="col-sm-7">
                                <article className="p-5">
                                    <h3 className="title mb-3">{this.state.product.name}</h3>
                                    <div className="mb-3"> 
                                    <var className="price h3 text-warning"> 
                                        <span className="currency">US </span><span className="num">{this.state.product.price}</span>
                                    </var> 
                                    {/* <span>/per kg</span>  */}
                                    </div> {/* price-detail-wrap .// */}
                                    <dl>
                                    <dt>Description</dt>
                                    <dd><p>Here goes description consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco </p></dd>
                                    </dl>
                                    <dl className="row">
                                    <dt className="col-sm-3">Model#</dt>
                                    <dd className="col-sm-9">{this.state.product.model}</dd>
                                    <dt className="col-sm-3">Color</dt>
                                    <dd className="col-sm-9">Black and white </dd>
                                    <dt className="col-sm-3">Delivery</dt>
                                    <dd className="col-sm-9">Not available</dd>
                                    </dl>
                                    <div className="rating-wrap">
                                    <ul className="rating-stars">
                                        <li style={{width: '80%'}} className="stars-active"> 
                                        <i className="fa fa-star" /> <i className="fa fa-star" /> 
                                        <i className="fa fa-star" /> <i className="fa fa-star" /> 
                                        <i className="fa fa-star" /> 
                                        </li>
                                        <li>
                                        <i className="fa fa-star" /> <i className="fa fa-star" /> 
                                        <i className="fa fa-star" /> <i className="fa fa-star" /> 
                                        <i className="fa fa-star" /> 
                                        </li>
                                    </ul>
                                    <div className="label-rating">132 reviews</div>
                                    <div className="label-rating">154 orders </div>
                                    </div> {/* rating-wrap.// */}
                                    <hr />
                                    <div className="row">
                                    <div className="col-sm-5">
                                        <dl className="dlist-inline">
                                        <dt>Quantity: </dt>
                                        <dd> 
                                            <select className="form-control form-control-sm" style={{width: 70}}>
                                            <option> 1 </option>
                                            <option> 2 </option>
                                            <option> 3 </option>
                                            </select>
                                        </dd>
                                        </dl>  {/* item-property .// */}
                                    </div> {/* col.// */}
                                    <div className="col-sm-7">
                                        <dl className="dlist-inline">
                                        <dt>Size: </dt>
                                        <dd>
                                            <label className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                            <span className="form-check-label">SM</span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                            <span className="form-check-label">MD</span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                            <span className="form-check-label">XXL</span>
                                            </label>
                                        </dd>
                                        </dl> 
                                    </div>
                                    </div>
                                    <hr />
                                    <button onClick={this.addToCart} className="btn  btn-primary"><i className="fas fa-shopping-cart" /> Add to cart </button>
                                </article>
                                </aside> 
                            </div> 
                            </div>
                        </div>
                    </section>
                </div>
            <Footer />
        </div>
    );
  }
}



const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductDetaile);
