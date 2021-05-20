import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { getJSONCart_localStorage } from "./functions/localstorage";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Cart from "./Pages/Cart";
import ProductDetaile from "./Pages/Product-detaile";
import asyncComponent  from "./Hoc/asyncComponent";


import firebase from "firebase";
const AsyncComponent = asyncComponent(() => {
    return import('./Pages/Cart')
});

// helo



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      auth: false,
      db: {
        products: {}
      }
    }
    
  }

  
  



  componentWillMount(){

    (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
             window.requestAnimationFrame(smoothscroll);
             window.scrollTo (0,currentScroll - (currentScroll/5));
        }
    })();
    
    Array.prototype.diff = function(a) {
        return this.filter(function(i) {return a.indexOf(i) < 0;});
    };


    // Initialize App
    // persist Local states
    if (window.localStorage.getItem('app-json') === null) {
        let json = {cart: [], app_title: 'shoping cart'}
        window.localStorage.setItem('app-json', JSON.stringify(json))
    }

    if (getJSONCart_localStorage()) {        
        let cart = getJSONCart_localStorage();

        this.props.dispatch({
            type: 'cart',
            data: cart
        })
    }






    // Initialize Firebase
    var config = {
      
    };
    if (!firebase.apps.length) {
      // firebase.initializeApp({});
      firebase.initializeApp(config);
   }
    this.database = firebase.database().ref("eshop");




    var database = firebase.database();


    // axios.put('https://test-project-f9628.firebaseio.com/rest/saving-data/fireblog/user2.json', {
    //   firstName: 'iftikhar',
    //   lastName: 'hussain',
    //   email: 'iftikhar0750@gmail.com
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  }

  componentDidUpdate(){


      
  }

    snapshotToArray(snapshot) {
        var returnArr = [];

        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;

            returnArr.push(item);
        });

        return returnArr;
    };


    objectToArray(object){
        if (typeof object === 'object') {
            let ar = [];
            for(let c in object){
                object[c].key = c;
                ar.push(object[c]);
            }
            return ar;
        }
    }


  componentDidMount(){
    
    // axios.defaults.baseURL = 'https://api.example.com';
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    axios({
        method:'get',
            url:'https://test-project-f9628.firebaseio.com/eshop/products.json',
            responseType:'json'
        })
    .then((response)  => {
        let array =  this.objectToArray(response.data)
        let _state = {...this.state};
        _state.db.products = array;
        this.setState({_state});

        // pass to redux store
        this.props.dispatch({'type': 'products', data: this.state.db.products})
        
    }).catch((error) => {
        console.error(error)
    });





    /*  DATABASE MIGERATION */

    this.database.child('features').child('home_page').remove();
    this.database.child('features').child('home_page').push(
      {name:'Fast Delivery', condition: 'from $100', icon: '/images/char_1.png'},
    )
    this.database.child('features').child('home_page').push(
      {name:'Full Cashback', condition: 'from $200', icon: '/images/char_2.png'},
    )
    this.database.child('features').child('home_page').push(
      {name:'Free Coupon', condition: 'from $200', icon: '/images/char_3.png'},
    )
    this.database.child('features').child('home_page').push(
      {name:'100% Original', condition: 'Branded & local product', icon: '/images/char_4.png'},
    )

    /* PRODUCTS */
    this.database.child('products').remove();
    this.database.child('currency').set('dollar')
    this.database.child('products').push(
      {name:'Samsung A8', description: ' ', company: 'Samsung', model: 'A8', discount: '10', category: 'mobile', price: '1200', image: '/images/items/samsung_a8.png'},
    )
    this.database.child('products').push(
        {name:'Samsung S6', description: ' ', company: 'Samsung', model: 'S6', discount: '5', category: 'mobile', price: '500', image: '/images/items/samsung_s6.png'},
    )
    this.database.child('products').push(
        {name:'Samsung S7', description: ' ', company: 'Samsung', model: 'S7', discount: '8', category: 'mobile', price: '600', image: '/images/items/samsung_s7.png'},
    )


    this.database.child('products').push(
        {name:'Iphone 5s', description: ' ', company: 'Apple', model: '5s', discount: '0', category: 'mobile', price: '400', image: '/images/items/iphone5.png'},
    )
    this.database.child('products').push(
        {name:'Iphone 6', description: ' ', company: 'Apple', model: '6', discount: '0', category: 'mobile', price: '600', image: '/images/items/iphone6.png'},
    )
    this.database.child('products').push(
        {name:'Iphone 7', description: ' ', company: 'Apple', model: '7', discount: '0', category: 'mobile', price: '650', image: '/images/items/iphone7.png'},
    )
    this.database.child('products').push(
        {name:'Iphone X', description: ' ', company: 'Apple', model: 'X', discount: '10', category: 'mobile', price: '1150', image: '/images/items/4.jpg'},
    )


    this.database.child('products').push(
        {name:'Female Hand bag', description: ' ', company: null, model: null, discount: '10', category: 'female', price: '20', image: '/images/items/3.jpg'},
    )
    this.database.child('products').push(
        {name:'juicer machine', description: ' ', company: null, model: null, discount: '50', category: 'kitchen', price: '120', image: '/images/items/2.jpg'},
    )
    this.database.child('products').push(
        {name:'Couch', description: ' ', company: null, model: null, discount: '25', category: 'furniture', price: '200', image: '/images/items/5.jpg'},
    )
    this.database.child('products').push(
        {name:'Chair', description: ' ', company: null, model: null, discount: '40', category: 'furniture', price: '200', image: '/images/items/6.jpg'},
    )
    this.database.child('products').push(
        {name:'Wrist watches', description: ' ', company: 'Apple', model: null, discount: '0', category: 'watch', price: '200', image: '/images/items/7.jpg'},
    )
    this.database.child('products').push(
        {name:'I Mac', description: ' ', company: 'Apple', model: 'Pro', discount: '2', category: 'Computer', price: '2000', image: '/images/items/comp.png'},
    )
    this.database.child('products').push(
        {name:'Stream Iron', description: ' ', company: null, model: null, discount: '5', category: 'electronics', price: '100', image: '/images/items/1.jpg'},
    )
    
    
    this.database.child('products').push(
      {name:'Apple', description: ' ', model: 'Air', discount: '12%', category: 'mobile', price: '1500', image: '/images/apple_air.jpg'},
    )
    
    /* FEATURE PRODUCTS*/
    this.database.child('products').child('feature_product').push(
      {ref: '-LS_tT6H9t7cO8CGwWxN', dataTime: '1/1/2019 20:20'}
    )
    this.database.child('products').child('feature_product').push(
      {ref: '-LS_ySCDJo3Sg0PGhltd', dataTime: '2/1/2019 10:20'}
    )

    /* RECENTLY VIEWED */
    this.database.child('products').child('recently_viewed').push(
      {ref: '-LS_ySCDJo3Sg0PGhltd', dataTime: '2/1/2019 10:20'}
    )





  }
  // removeItem(e){
  //   this.database.child('products').child('item2').remove();
  // }



  render() {
    
      var routes = (

        //  Route params
        //  https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
        //  component    — A React component. When a route with a component prop matches, the route will return a new element whose type is the provided React component (created using React.createElement).
        //  render       — A function that returns a React element [5]. It will be called when the path matches. This is similar to component, but is useful for inline rendering and passing extra props to the element.
        //  children     — A function that returns a React element. Unlike the prior two props, this will always be rendered, regardless of whether the route’s path matches the current location.
          
          <Switch>
              <Route exact path="/" component={() => {
                  return <Home  auth={false} />
              }} />

              <Route exact path='/product/:name/imap/:key' component={(props) => {
                return <ProductDetaile {...props} />
              }}/>

              <Route path="/listing" component={Listing} />
              
              <Route path="/cart" component={ AsyncComponent } />
              {/* <Route path="/profile" component={() => {
                  return <Redirect to="/" />
              }} /> */}
              {/* <Route path="/:route" component={() => {
                  // return <PageNotFound auth={false} />
                  return <Redirect to="/" />
              }} /> */}
              <Route component={() => <h2>Page not found</h2>} />

          </Switch>
        );

    if (this.state.auth) {
        routes = (
            <Switch>
                <Route exact path="/login" component={() => {
                    return <Redirect to="/" />
                }} />
                <Route exact path="/register" component={() => {
                    return <Redirect to="/" />
                }} />
                <Route path="/" component={() => {
                    return <Home auth={true} />
                }} />
            </Switch>
        );            
    }
    
    return(
        <div style={{'height':'100%'}}>
            <Router>
                {routes}
            </Router>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (obj) => {
            dispatch(obj)
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
