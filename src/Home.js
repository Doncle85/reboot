import React, {Component} from "react";
import {Link} from "react-router-dom";

class Home extends Component {


    render() {
        let image = process.env.PUBLIC_URL+"/images/logo.png";
        return (
            <div style={{
                backgroundImage: `url(${image})`}}>
                <div className="container-fluid" className="text-center">
                    <div className="card" >

                        <div className="card-body" >
                            <h5 className="card-title">BetFriend</h5>
                            <p className="card-text">Le site qui vous permets de parier entre ami(e)s</p>
                            <button>
                                <Link className="nav-link" to="/Portal">Ready ?</Link>
                            </button>
                        </div>
                    </div>


                    <div className="card" >

                        <div className="card-body">

                            <h5 className="card-title">Le principe</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                pellentesque lorem eget enim fermentum aliquet. Nullam placerat nibh a nulla sollicitudin,
                                id gravida risus interdum. Cras volutpat pellentesque magna a convallis. Suspendisse id quam
                                dignissim, scelerisque nisl quis, lacinia neque. Pellentesque et dui varius, commodo ante
                                id, commodo augue. Aenean sed sollicitudin magna, ut hendrerit velit. Duis leo ipsum,
                                faucibus commodo tortor non, feugiat vulputate quam. Aliquam erat volutpat. Donec mauris
                                massa, venenatis nec elementum a, gravida quis ipsum. Duis et finibus tortor, nec consequat
                                mi. Nam sit amet velit quis ipsum pharetra scelerisque. Praesent a porttitor odio.

                                Integer viverra dapibus odio, sed imperdiet lorem interdum id. Aenean sed nisl enim. Quisque
                                finibus sit amet ligula id tempor. Sed tincidunt, urna vitae finibus vehicula, ex tellus
                                tristique urna, ut tempus nunc metus in arcu. Praesent venenatis, nibh pharetra fringilla
                                posuere, enim libero euismod nisl, ac fringilla dolor eros feugiat nisi. Proin convallis
                                nisl magna, in feugiat nulla fringilla id. Suspendisse quis diam et quam vestibulum
                                eleifend. Suspendisse sit amet laoreet dui. Maecenas in diam tortor. Mauris quis diam nec
                                nisl iaculis ultrices eget quis augue. Donec non euismod erat. Pellentesque habitant morbi
                                tristique senectus et netus et malesuada fames ac turpis egestas. Donec consectetur lacus
                                sit amet augue rhoncus, et laoreet enim fringilla. Ut maximus a quam ut lacinia. Ut ac
                                ullamcorper leo.</p>

                            <button type="button" className="btn btn-danger">
                                <Link className="nav-link" to="/Portal" style={{color:"black"}}>Ready ?</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;