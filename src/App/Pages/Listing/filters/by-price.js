import React from 'react';
// import { Link, Redirect } from 'react-router-dom';

class ByPrice extends React.Component{
    render(){
        return(
            <article className="card-group-item">
                <header className="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse33">
                    <i className="icon-action fa fa-chevron-down" />
                    <h6 className="title">By Price</h6>
                </a>
                </header>
                <div className="filter-content collapse show" id="collapse33">
                <div className="card-body">
                    <input type="range" className="custom-range" min={0} max={100} name />
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Min</label>
                        <input className="form-control" placeholder="$0" type="number" />
                    </div>
                    <div className="form-group text-right col-md-6">
                        <label>Max</label>
                        <input className="form-control" placeholder="$1,0000" type="number" />
                    </div>
                    </div> {/* form-row.// */}
                    <button className="btn btn-block btn-outline-primary">Apply</button>
                </div> {/* card-body.// */}
                </div> {/* collapse .// */}
            </article>
        )
    }
}

export default ByPrice;