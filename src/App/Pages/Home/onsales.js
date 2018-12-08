import React from 'react';
// import { Link, Redirect } from 'react-router-dom';

class OnSales extends React.Component{
    render(){
        return(
            <section className="products">
                <div className="container">
                    <div className="row">
                    {/* <div class="col-12">
                                <h2 class="sec-heading">Sales products</h2>
                            </div> */}
                    <header className="clearfix col-12">
                        <div className="title-text">
                        <span className="h4">Owl slider - custom control</span>
                        <div className="btn-group btn-group-sm float-right">
                            <button type="button" className="custom-nav-first owl-custom-prev btn btn-secondary"> &lt; </button>
                            <button type="button" className="custom-nav-first owl-custom-next btn btn-secondary"> &gt; </button>
                        </div>
                        </div>
                    </header>
                    <div className="owl-carousel owl-init slide-items col-12" id="slide_custom_nav" data-custom-nav="custom-nav-first" data-items={4} data-margin={30} data-dots="true" data-nav="false">
                        <div className="item-slide">
                        <figure className="card card-product">
                            <div className="img-wrap"><img src="images/items/1.jpg" /></div>
                            <figcaption className="info-wrap">
                            <h4 className="title">Another name of item</h4>
                            <p className="desc">Some small description goes here</p>
                            <div className="rating-wrap">
                                <ul className="rating-stars">
                                <li style={{width: '80%'}} className="stars-active"> 
                                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                </li>
                                <li>
                                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 
                                </li>
                                </ul>
                                <div className="label-rating">132 reviews</div>
                                <div className="label-rating">154 orders </div>
                            </div> {/* rating-wrap.// */}
                            </figcaption>
                            <div className="bottom-wrap">
                            <a href="#" className="btn btn-sm btn-primary float-right">Order Now</a>	
                            <div className="price-wrap h5">
                                <span className="price-new">$1280</span> <del className="price-old">$1980</del>
                            </div> {/* price-wrap.// */}
                            </div> {/* bottom-wrap.// */}
                        </figure>
                        </div> {/* col // */}
                        <div className="item-slide">
                        <figure className="card card-product">
                            <div className="img-wrap"><img src="images/items/1.jpg" /></div>
                            <figcaption className="info-wrap">
                            <h4 className="title">Another name of item</h4>
                            <p className="desc">Some small description goes here</p>
                            <div className="rating-wrap">
                                <ul className="rating-stars">
                                <li style={{width: '80%'}} className="stars-active"> 
                                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                </li>
                                <li>
                                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 
                                </li>
                                </ul>
                                <div className="label-rating">132 reviews</div>
                                <div className="label-rating">154 orders </div>
                            </div> {/* rating-wrap.// */}
                            </figcaption>
                            <div className="bottom-wrap">
                            <a href="#"className="btn btn-sm btn-primary float-right">Order Now</a>	
                            <div className="price-wrap h5">
                                <span className="price-new">$1280</span> <del className="price-old">$1980</del>
                            </div> {/* price-wrap.// */}
                            </div> {/* bottom-wrap.// */}
                        </figure>
                        </div> {/* col // */}
                        <div className="item-slide">
                        <figure className="card card-product">
                            <div className="img-wrap"><img src="images/items/2.jpg" /> </div>
                            <figcaption className="info-wrap">
                            <h4 className="title">Good product</h4>
                            <p className="desc">Some small description goes here</p>
                            <div className="rating-wrap">
                                <ul className="rating-stars">
                                <li style={{width: '80%'}} className="stars-active"> 
                                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                </li>
                                <li>
                                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 
                                </li>
                                </ul>
                                <div className="label-rating">132 reviews</div>
                                <div className="label-rating">154 orders </div>
                            </div> {/* rating-wrap.// */}
                            </figcaption>
                            <div className="bottom-wrap">
                            <a href="#"className="btn btn-sm btn-primary float-right">Order Now</a>	
                            <div className="price-wrap h5">
                                <span className="price-new">$1280</span> <del className="price-old">$1980</del>
                            </div> {/* price-wrap.// */}
                            </div> {/* bottom-wrap.// */}
                        </figure>
                        </div> {/* col // */}
                        <div className="item-slide">
                        <figure className="card card-product">
                            <div className="img-wrap"><img src="images/items/3.jpg" /></div>
                            <figcaption className="info-wrap">
                            <h4 className="title">Product name goes here</h4>
                            <p className="desc">Some small description goes here</p>
                            <div className="rating-wrap">
                                <ul className="rating-stars">
                                <li style={{width: '80%'}} className="stars-active"> 
                                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                </li>
                                <li>
                                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 
                                </li>
                                </ul>
                                <div className="label-rating">132 reviews</div>
                                <div className="label-rating">154 orders </div>
                            </div> {/* rating-wrap.// */}
                            </figcaption>
                            <div className="bottom-wrap">
                            <a href="#"className="btn btn-sm btn-primary float-right">Order Now</a>	
                            <div className="price-wrap h5">
                                <span className="price-new">$1280</span> <del className="price-old">$1980</del>
                            </div> {/* price-wrap.// */}
                            </div> {/* bottom-wrap.// */}
                        </figure>
                        </div> {/* col // */}
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default OnSales