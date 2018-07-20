import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Header from "../headers/Header";
import Subheader from "../headers/Subheader";
import CartPageContent from "./CartPageContent";
import Footer from "../footer/Footer";



class CartPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header/>
                <Subheader title='Корзина' cart/>
                <CartPageContent/>
                <Footer/>
            </div>
        )
    }
}

export default CartPage;