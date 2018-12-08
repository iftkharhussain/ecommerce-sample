import React from 'react';
import { Link } from 'react-router-dom';
// import { Link, Redirect } from 'react-router-dom';

class PageBanner extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product: null,
            search: null
        }
    }

    componentWillMount(){
        console.log(this.props)
        if (this.props.match) {
            if (this.props.match.params) {
                this.setState({
                    product: this.props.match.params.name
                })
            }
        }
    }


    render(){
        return(
            <section className="section-pagetop bg-secondary">
                <div className="container clearfix">
                    <h2 className="title-page">{
                        (this.state.product) ? this.state.product : 'Search about "item"'
                    }</h2>
                    <nav className="float-left">
                    <ol className="breadcrumb text-white">
                        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        <li className="breadcrumb-item"><Link to={'/'}>
                            {(this.state.product) ? 'Products': 'Search'}
                        </Link></li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {(this.state.product) ? this.state.product : ''}
                        </li>
                    </ol>  
                    </nav>
                </div> {/* container //  */}
            </section>
        )
    }
}

export default PageBanner;