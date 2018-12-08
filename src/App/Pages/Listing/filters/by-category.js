import React from 'react';
// import { Link, Redirect } from 'react-router-dom';

class ByCategory extends React.Component{
    render(){
        return(
            <article className="card-group-item">
                <header className="card-header">
                <a className aria-expanded="true" href="#" data-toggle="collapse" data-target="#collapse22">
                    <i className="icon-action fa fa-chevron-down" />
                    <h6 className="title">By Category</h6>
                </a>
                </header>
                <div style={{}} className="filter-content collapse show" id="collapse22">
                <div className="card-body">
                    <form className="pb-3">
                    <div className="input-group">
                        <input className="form-control" placeholder="Search" type="text" />
                        <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fa fa-search" /></button>
                        </div>
                    </div>
                    </form>
                    <ul className="list-unstyled list-lg">
                    <li><a href="#">Cras justo odio <span className="float-right badge badge-light round">142</span> </a></li>
                    <li><a href="#">Dapibus ac facilisis  <span className="float-right badge badge-light round">3</span></a></li>
                    <li><a href="#">Morbi leo risus <span className="float-right badge badge-light round">32</span></a></li>
                    <li><a href="#">Another item <span className="float-right badge badge-light round">12</span></a></li>
                    </ul>  
                </div> {/* card-body.// */}
                </div> {/* collapse .// */}
            </article>
        )
    }
}

export default ByCategory;