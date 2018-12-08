import React, { Component } from 'react';
import ByCategory from "./filters/by-category";
import ByPrice from "./filters/by-price";
import ByFeature from "./filters/by-feature";

class SearchListing extends Component {

  constructor(props){
    super(props);
    this.state = {
      features: this.props.features
    }
  }

  render() {
    return (
        <section className="section-content bg padding-y">
            <div className="container">
                <div className="row">
                <aside className="col-sm-3">
                    <div className="card card-filter">


                        <ByCategory />
                        <ByPrice />
                        <ByFeature />

                        
                    </div> {/* card.// */}
                </aside> {/* col.// */}
                <main className="col-sm-9">
                    <article className="card card-product">
                    <div className="card-body">
                        <div className="row">
                        <aside className="col-sm-3">
                            <div className="img-wrap"><img src="images/items/2.jpg" /></div>
                        </aside> {/* col.// */}
                        <article className="col-sm-6">
                            <h4 className="title"> Ut wisi enim ad minim veniam</h4>
                            <div className="rating-wrap  mb-2">
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
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                            <dl className="dlist-align">
                            <dt>Color</dt>
                            <dd>Black and white</dd>
                            </dl>  {/* item-property-hor .// */}
                            <dl className="dlist-align">
                            <dt>Material</dt>
                            <dd>Syntetic, wooden</dd>
                            </dl>  {/* item-property-hor .// */}
                            <dl className="dlist-align">
                            <dt>Delivery</dt>
                            <dd>Russia, USA, and Europe</dd>
                            </dl>  {/* item-property-hor .// */}
                        </article> {/* col.// */}
                        <aside className="col-sm-3 border-left">
                            <div className="action-wrap">
                            <div className="price-wrap h4">
                                <span className="price"> $56 </span>	
                                <del className="price-old"> $98</del>
                            </div> {/* info-price-detail // */}
                            <p className="text-success">Free shipping</p>
                            <br />
                            <p>
                                <a href="#" className="btn btn-primary"> Buy now </a>
                                <a href="#" className="btn btn-secondary"> Details</a>
                            </p>
                            <a href="#"><i className="fa fa-heart" /> Add to wishlist</a>
                            </div> {/* action-wrap.// */}
                        </aside> {/* col.// */}
                        </div> {/* row.// */}
                    </div> {/* card-body .// */}
                    </article> {/* card product .// */}
                    <article className="card card-product">
                    <div className="card-body">
                        <div className="row">
                        <aside className="col-sm-3">
                            <div className="img-wrap"><img src="images/items/1.jpg" /></div>
                        </aside> {/* col.// */}
                        <article className="col-sm-6">
                            <h4 className="title"> Ut wisi enim ad minim veniam</h4>
                            <div className="rating-wrap mb-2">
                            <ul className="rating-stars">
                                <li style={{width: '50%'}} className="stars-active"> 
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
                            <div className="label-rating">12 reviews</div>
                            <div className="label-rating">154 orders </div>
                            </div> {/* rating-wrap.// */}
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                            <dl className="dlist-align">
                            <dt>Color</dt>
                            <dd>Black and white</dd>
                            </dl>  {/* item-property-hor .// */}
                            <dl className="dlist-align">
                            <dt>Material</dt>
                            <dd>Syntetic, wooden</dd>
                            </dl>  {/* item-property-hor .// */}
                            <dl className="dlist-align">
                            <dt>Delivery</dt>
                            <dd>Russia, USA, and Europe</dd>
                            </dl>  {/* item-property-hor .// */}
                        </article> {/* col.// */}
                        <aside className="col-sm-3 border-left">
                            <div className="action-wrap">
                            <div className="price-wrap h4">
                                <span className="price"> $245 </span>	
                                <del className="price-old"> $528</del>
                            </div> {/* info-price-detail // */}
                            <p className="text-success">Free shipping</p>
                            <br />
                            <p>
                                <a href="#" className="btn btn-primary"> Buy now </a>
                                <a href="#" className="btn btn-secondary"> Details</a>
                            </p>
                            <a href="#"><i className="fa fa-heart" /> Add to wishlist</a>
                            </div> {/* action-wrap.// */}
                        </aside> {/* col.// */}
                        </div> {/* row.// */}
                    </div> {/* card-body .// */}
                    </article> {/* card product .// */}
                </main> {/* col.// */}
                </div>
            </div>
        </section>
    );
  }
}

export default SearchListing;
