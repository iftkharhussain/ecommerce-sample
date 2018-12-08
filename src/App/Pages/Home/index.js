import React, { Component } from 'react';

import Header from "../Header/index";
import Footer from "../Footer";
import Banner from './banner';
import OnSales from './onsales';
import Features from './features';
import Suggestion from "./suggestion";
// import RecentlyViewd from "./Recently_viewd";



class Home extends Component {



  componentDidMount(){


    window.jQuery(document).ready(($) => {
      if ($('.owl-init').length > 0) { // check if element exists
        $(".owl-init").each(function(){
                
                var myOwl = $(this);
                var data_items = myOwl.data('items');
                var data_nav = myOwl.data('nav');
                var data_dots = myOwl.data('dots');
                var data_margin = myOwl.data('margin');
                var data_custom_nav = myOwl.data('custom-nav');
                var id_owl = myOwl.attr('id');
    
                myOwl.owlCarousel({
                    loop: true,
                    margin: data_margin,
                    nav: eval(data_nav),
                    dots: eval(data_dots),
                    autoplay: false,
                    items: data_items,
                    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                    //items: 4,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: data_items
                        },
                        1000: {
                            items: data_items
                        }
                    }
                });
                // for custom navigation. See example page: example-sliders.html
                $('.'+data_custom_nav+'.owl-custom-next').click(function(){
                    $('#'+id_owl).trigger('next.owl.carousel');
                });
    
                $('.'+data_custom_nav+'.owl-custom-prev').click(function(){
                    $('#'+id_owl).trigger('prev.owl.carousel');
                });
            
            }); // each end.//
        } // end if
    })



  }

  componentWillUnmount(){
    console.log('component wil un mounted')
  }




  render() {
    return (
      <div className="App">
        <Header />

          <div className="body_part">
            <Banner />
            {/* <OnSales /> */}
            <Features />
            {/* <Suggestion /> */}
            {/* <RecentlyViewd /> */}
          </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
