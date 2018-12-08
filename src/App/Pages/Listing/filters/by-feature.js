import React from 'react';
// import { Link, Redirect } from 'react-router-dom';

class ByFeature extends React.Component{
    render(){
        return(
            <article className="card-group-item">
                <header className="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse44">
                    <i className="icon-action fa fa-chevron-down" />
                    <h6 className="title">By Feature </h6>
                </a>
                </header>
                <div className="filter-content collapse show" id="collapse44">
                <div className="card-body">
                    <form>
                    <label className="form-check">
                        <input className="form-check-input" defaultValue type="checkbox" />
                        <span className="form-check-label">
                        <span className="float-right badge badge-light round">5</span>
                        Samsung
                        </span>
                    </label>  {/* form-check.// */}
                    <label className="form-check">
                        <input className="form-check-input" defaultValue type="checkbox" />
                        <span className="form-check-label">
                        <span className="float-right badge badge-light round">13</span>
                        Mersedes Benz
                        </span>
                    </label> {/* form-check.// */}
                    <label className="form-check">
                        <input className="form-check-input" defaultValue type="checkbox" />
                        <span className="form-check-label">
                        <span className="float-right badge badge-light round">12</span>
                        Nissan Altima
                        </span>
                    </label>  {/* form-check.// */}
                    <label className="form-check">
                        <input className="form-check-input" defaultValue type="checkbox" />
                        <span className="form-check-label">
                        <span className="float-right badge badge-light round">32</span>
                        Another Brand
                        </span>
                    </label>  {/* form-check.// */}
                    </form>
                </div> {/* card-body.// */}
                </div> {/* collapse .// */}
            </article>
        )
    }
}

export default ByFeature;