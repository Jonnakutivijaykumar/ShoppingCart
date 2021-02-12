import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ShoppingCart from "../components/ShoppingCart";
import { changeQuantity, deleteProduct } from "../actions/shoppingCart";

class ShoppingCartPage extends Component {
  render() {
    const { state, products, changeQuantity, deleteProduct } = this.props;
    console.log(products);
    console.log(state);
    return (
      <ShoppingCart
        products={products}
        changeQuantity={changeQuantity}
        deleteProduct={deleteProduct}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
  products: state.shoppingCart.shoppingCart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeQuantity,
      deleteProduct,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
