import React from 'react'
import RX782 from '../images/RX782.PNG'
import ZAKU from '../images/ZAKU.PNG'
import GOUF from '../images/GOUF.PNG'

class Product1 extends React.Component {

    render() {
        return (
            <div className="container">

                <div className="image">
                    <image src={RX782} />
                    <h3>RX-78-2</h3>
                    <h3>610 Bath</h3>
                    <a href="#">Add to Cart</a>
                </div>

                <div className="image">
                    <image src={ZAKU} />
                    <h3>RX-78-2</h3>
                    <h3>610 Bath</h3>
                    <a href="#">Add to Cart</a>
                </div>

                <div className="image">
                    <image src={GOUF} />
                    <h3>RX-78-2</h3>
                    <h3>610 Bath</h3>
                    <a href="#">Add to Cart</a>
                </div>
            </div>
        )
    }
}

export default Product1