import React from 'react';

class CartModalBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            shippingAddress: null
        }
    }

    onChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    render() { 
        return (
            <div className="modal fade" id="cart_modal_box" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" >New message</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="row" id="order" action="/" method="post" onSubmit={(e) =>  {
                            e.preventDefault();
                            let  {name, email, password, shippingAddress} = this.state;
                            this.props.formData({name, email, password, shippingAddress})
                        }}>
                            <div className="form-group col">
                                <label className="col-form-label">Name</label>
                                <input onChange={this.onChangeInput} type="text" placeholder="Your name" className="form-control form-control-sm" name="name" />
                            </div>
                            <div className="form-group col">
                                <label className="col-form-label">Email</label>
                                <input onChange={this.onChangeInput} type="email" placeholder="Your email" className="form-control form-control-sm" name="email" />
                            </div>
                            <div className="form-group col">
                                <label className="col-form-label">Password</label>
                                <input onChange={this.onChangeInput} type="password" placeholder="Put 8 digits password here !" className="form-control form-control-sm" name="password" />
                            </div>
                            <div className="form-group col-12">
                                <label className="col-form-label">Shipping address</label>
                                <textarea onChange={this.onChangeInput} className="form-control" name="shippingAddress" placeholder="place address here" defaultValue={""} rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" form="order" className="btn btn-primary">Place order</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CartModalBox;