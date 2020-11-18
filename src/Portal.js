import React, {Component} from 'react';
import Login from './Login';
import Register from './Register';


class Portal extends Component {
    render() {
        return (
            <div className={"container mt-4"}>
                <div className="row">
                    <Login/>
                    <Register/>
                </div>
            </div>
        )
    }
}
export default Portal;