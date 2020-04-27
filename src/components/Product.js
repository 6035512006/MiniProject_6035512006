import React from 'react'
import RX782 from '../images/RX782.PNG'
import ZAKU from '../images/ZAKU.PNG'
import GOUF from '../images/GOUF.PNG'
import ASTAROTH  from '../images/ASTAROTH.PNG'
import BANSHEE from '../images/BANSHEE.PNG'
import BARBATOS from '../images/BARBATOS.PNG'
import GRAZE from '../images/GRAZE.PNG'
import MSN06S from '../images/MSN06S.PNG'
import BALL from '../images/BALL.PNG'

class Product extends React.Component {

    render() {
        return (
            <div className="container">

                <div className="image">
                    <image src={RX782} />
                    <h3>HG RX-78-2 GUNDAM</h3>
                    <h3>340 Bath</h3>
                    <a className="add cart1" href="#">Add to Cart</a>
                </div>
                <div className="image">
                    <image src={ZAKU} />
                    <h3>HG MS-05S ZAKU I</h3>
                    <h3>580 Bath</h3>
                    <a className="add cart2" href="#">Add to Cart</a>
                </div>
                <div className="image">
                    <image src={GOUF} />
                    <h3>HG MS-07B GOUF</h3>
                    <h3>510 Bath</h3>
                    <a className="add cart3" href="#">Add to Cart</a>
                </div>

                <div className="image">
                    <image src={ASTAROTH} />
                    <h3>HG GUNDAM ASTAROTH</h3>
                    <h3>340 Bath</h3>
                    <a className="add cart4" href="#">Add to Cart</a>
                </div>
                <div className="image">
                    <image src={BANSHEE} />
                    <h3>HG UNICORN GUNDAM BANSHEE</h3>
                    <h3>610 Bath</h3>
                    <a className="add cart5" href="#">Add to Cart</a>
                </div>
                <div className="image">
                    <image src={BARBATOS} />
                    <h3>HG GUNDAM BARBATOS LUPUS</h3>
                    <h3>340 Bath</h3>
                    <a className="add cart6" href="#">Add to Cart</a>
                </div>

                <div className="image">
                    <image src={GRAZE} />
                    <h3>HG RYUSEI-GO GRAZE CUSTOM II</h3>
                    <h3>410 Bath</h3>
                    <a className="add cart7" href="#">Add to Cart</a>
                </div>
                <div className="image">
                    <image src={MSN06S} />
                    <h3>HG MSN-06S SINANJU</h3>
                    <h3>880 Bath</h3>
                    <a className="add cart8" href="#">Add to Cart</a>
                </div>
                <div className="image">
                    <image src={BALL} />
                    <h3>HG BALL TWIN SET</h3>
                    <h3>440 Bath</h3>
                    <a className="add cart9" href="#">Add to Cart</a>
                </div>
            </div>
        )
    }
}

export default Product