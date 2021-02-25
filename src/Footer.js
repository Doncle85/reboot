import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            < footer className="footer mt-auto py-1 bg-primary" style={{position:"absolute", bottom:"0" ,width:"100%"}}>
                <div className="container">
                    <span className="text-muted">Copyright 2020 BetFriend</span>
                </div>
            </footer>

        )
    }
}

export default Footer;