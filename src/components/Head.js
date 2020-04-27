import React from 'react'

class Head extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <h1><font color="white">Gundam Shop</font></h1>
                        <ul>
                            <li><a href="#">
                                <ion-icon name="home-outline"></ion-icon>Home
                            </a></li>
                            <li><a href="#">
                                <ion-icon name="call-outline"></ion-icon>Contact
                            </a></li>
                            <li><a href="#">
                                <ion-icon name="cart-outline"></ion-icon>Cart<span> 0</span>
                            </a></li>
                        </ul>
                    </nav>
                </header>

            </div>
        )
    }
}




export default Head