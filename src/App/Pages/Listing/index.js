import React, { Component } from 'react';
import PageBanner from '../Header/page-banner';
import SearchListing from "./search-listing";
import Header from "../Header";
import Footer from "../Footer";

class Listing extends Component {


  render() {
    return (
        <div className="App">
            <Header />

            <div className="body_part">
                <PageBanner />
                <SearchListing />
            </div>

            <Footer />
        </div>
    );
  }
}

export default Listing;
