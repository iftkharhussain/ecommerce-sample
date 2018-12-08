import React from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';



class Nav extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cart: 0
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            cart: props.cart
        })
    }
    componentWillMount(){
        this.setState({
            cart: this.props.cart
        })
    }


    render(){
        return(
            <header className="section-header">
                <section className="header-main shadow-sm">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-sm-4">
                        <div className="brand-wrap">
                            <Link className="widget-header mr-3" to="/">
                                <img className="logo" src="/images/shopit-logo-teal.png" alt="logo" />
                            </Link>
                            {/* <h2 class="logo-text">LOGO</h2> */}
                        </div> {/* brand-wrap.// */}
                    </div>
                    <div className="col-lg-4 col-xl-5 col-sm-8">
                    <form action="#" className="search-wrap">
                        <div className="input-group w-100">
                        <input type="text" className="form-control" style={{width: '55%'}} placeholder="Search" />
                        <select className="custom-select" name="category_name">
                            <option value>All type</option><option value="codex">Special</option>
                            <option value="comments">Only best</option>
                            <option value="content">Latest</option>
                        </select>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                            <i className="fa fa-search" />
                            </button>
                        </div>
                        </div>
                    </form> {/* search-wrap .end// */}
                    </div> {/* col.// */}
                    <div className="col-lg-5 col-xl-4 col-sm-12">
                    <div className="widgets-wrap float-right">
                        <Link className="widget-header mr-3" to="/cart">
                            <div className="icontext">
                                <div className="icon-wrap"><i className="icon-sm round border fa fa-shopping-cart" /></div>
                                <div className="text-wrap">
                                <span className="small badge badge-danger">{this.state.cart.length}</span>
                                <div>Cart</div>
                                </div>
                            </div>
                        </Link>
                        
                        <div className="widget-header dropdown">
                        <a href="#" data-toggle="dropdown" data-offset="20,10">
                            <div className="icontext">
                            <div className="icon-wrap"><i className="icon-sm round border fa fa-user" /></div>
                            <div className="text-wrap">
                                <small>Sign in | Join</small>
                                <div>My account <i className="fa fa-caret-down" /> </div>
                            </div>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <form className="px-4 py-3">
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="email@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                            <hr className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Have account? Sign up</a>
                            <a className="dropdown-item" href="#">Forgot password?</a>
                        </div> 
                        </div>  
                    </div> {/* widgets-wrap.// */}
                    </div> {/* col.// */}
                </div> {/* row.// */}
                </div> {/* container.// */}
            </section> {/* header-main .// */}
        </header>

        )
    }
}

let mapStateToProps = state => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);