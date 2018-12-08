import React from 'react';
// import { Link, Redirect } from 'react-router-dom';

class Suggestion extends React.Component{
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
                    <div className="owl-carousel owl-init slide-items col-12" id="slide_custom_nav" data-custom-nav="custom-nav-first" data-items={5} data-margin={20} data-dots="true" data-nav="false">
                        <div className="item-slide">
                        <figure className="card card-product">
                            <span className="badge-new"> NEW </span>
                            <div className="img-wrap"> <img src="images/items/1.jpg" /> </div>
                            <figcaption className="info-wrap text-center">
                            <h6 className="title text-truncate"><a href="#">First item name</a></h6>
                            </figcaption>
                        </figure> {/* card // */}
                        </div>
                        <div className="item-slide">
                        <figure className="card card-product">
                            <div className="img-wrap"> <img src="images/items/2.jpg" /> </div>
                            <figcaption className="info-wrap text-center">
                            <h6 className="title text-truncate"><a href="#">Second item name</a></h6>
                            </figcaption>
                        </figure> {/* card // */}
                        </div>
                        <div className="item-slide">
                        <figure className="card card-product">
                            <div className="img-wrap"> <img src="images/items/3.jpg" /> </div>
                            <figcaption className="info-wrap text-center">
                            <h6 className="title text-truncate"><a href="#">Third item name</a></h6>
                            </figcaption>
                        </figure> {/* card // */}
                        </div>
                        <div className="item-slide">
                        <figure className="card card-product">
                            <div className="img-wrap"> <img src="images/items/4.jpg" /> </div>
                            <figcaption className="info-wrap text-center">
                            <h6 className="title text-truncate"><a href="#">Good item name</a></h6>
                            </figcaption>
                        </figure> {/* card // */}
                        </div>
                        <div className="item-slide">
                        <figure className="card card-product">
                            <div className="img-wrap"> <img src="images/items/5.jpg" /> </div>
                            <figcaption className="info-wrap text-center">
                            <h6 className="title text-truncate"><a href="#">Another item name</a></h6>
                            </figcaption>
                        </figure> {/* card // */}
                        </div>
                        <div className="item-slide">
                        <figure className="card card-product">
                            <div className="img-wrap"> <img src="images/items/3.jpg" /> </div>
                            <figcaption className="info-wrap text-center">
                            <h6 className="title text-truncate"><a href="#">Third item name</a></h6>
                            </figcaption>
                        </figure> {/* card // */}
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Suggestion