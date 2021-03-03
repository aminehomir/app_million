import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>phone</label>
                    <input type="text" className="form-control" placeholder="phone" />
                </div>
                phone
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                     
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
             
            </form>
        );
    }
}
