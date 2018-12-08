import React from 'react';
// import { Link, Redirect } from 'react-router-dom';

class Banner extends React.Component{
    render(){
        return(
        <section className="section-main bg padding-top-md">
            <div className="container">
                <div className="row-sm">
                <aside className="col-md-3">
                    <div className="card">
                    <header className="card-header bg-primary white">
                        <i className="icon-menu" /> Categories
                    </header>
                    <ul className="menu-category">
                        <li> <a href="#">Food &amp; Beverage </a></li>
                        <li> <a href="#">Home Equipments </a></li>
                        <li> <a href="#">Machinery Items </a></li>
                        <li> <a href="#">Toys &amp; Hobbies</a></li>
                        <li> <a href="#">Consumer Electronics</a></li>
                        <li> <a href="#">Beauty &amp; Personal Care</a></li>
                        <li className="has-submenu"> <a href="#">More category  <i className="icon-arrow-right pull-right" /></a>
                        <ul className="submenu">
                            <li> <a href="#">Food &amp; Beverage </a></li>
                            <li> <a href="#">Home Equipments </a></li>
                            <li> <a href="#">Machinery Items </a></li>
                            <li> <a href="#">Toys &amp; Hobbies</a></li>
                            <li> <a href="#">Consumer Electronics</a></li>
                            <li> <a href="#">Home &amp; Garden</a></li>
                            <li> <a href="#">Beauty &amp; Personal Care</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div> {/* card.// */}
                </aside>
                <div className="col-md-9">
                    <div className="owl-init slider-main owl-carousel" data-items={1} data-dots="true" data-nav="true">
                        <div className="item-slide">
                            <img src="/images/banners/header3.jpg" />
                        </div>
                        <div className="item-slide rounded">
                            <img src="/images/banners/header4.jpg" />
                        </div>
                        <div className="item-slide rounded">
                            <img src="/images/banners/header2.jpg" />
                        </div>
                    </div>
                </div> 
                </div>
            </div> 
        </section>
        )
    }
}

export default Banner