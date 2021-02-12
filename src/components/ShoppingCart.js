import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { Image, TextInput } from "react-native";
import CreditCard from "./CreditCard";
import _ from "lodash";

export default class ShoppingCart extends Component {

  increament = (id, quantity) => {
    const { changeQuantity } = this.props;
    changeQuantity(id, quantity + 1);
  };

  delectProduct = (id) => {
    const { deleteProduct } = this.props;
    deleteProduct(id);
  };

  decrement = (id, quantity) => {
    const { changeQuantity } = this.props;
    if (quantity > 0) {
      changeQuantity(id, quantity - 1);
    }
  };

  getSubTotal = () => {
    const { products } = this.props;
    let totalQntyPrice = 0;
    _.forEach(products, (product) => {
      totalQntyPrice = totalQntyPrice + product.totalQuantityPrice;
    });
    return totalQntyPrice;
  };

  render() {
    const { products } = this.props;
    return (
      <View
        style={{ flex: 1, flexDirection: "row", padding: 50, flexWrap: "wrap" }}
      >
        <View style={{ flex: 4 }}>
          <Card
            containerStyle={{
              backgroundColor: "#f2f2f2",
              borderWidth: 0,
              opacity: 1,
              shadowOpacity: 0,
              shadowRadius: 0,
            }}
          >
            <Card.Title
              style={{ alignSelf: "flex-start", fontFamily: "RobotoMedium" }}
            >
              Shopping Cart
            </Card.Title>
            {products &&
              products.map((u, i) => {
                return (
                  <View style={{ paddingTop: 15, paddingBottom: 20 }} key={i}>
                    <View
                      key={i}
                      style={{ flexDirection: "row", marginVertical: 8 }}
                    >
                      {/* image */}
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      >
                        <Image
                          source={{ uri: u.avatar }}
                          style={{ width: 80, height: 80, borderRadius: 50 }}
                        />
                      </View>
                      {/* product name */}
                      <View
                        style={{
                          flex: 1.5,
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      >
                        <Text
                          style={{ fontWeight: "bold", fontFamily: "Roboto" }}
                        >
                          {u.name}
                        </Text>
                        <Text style={{ fontSize: 9, fontFamily: "Roboto" }}>
                          {u.code}
                        </Text>
                      </View>
                      {/* quantity */}
                      <View style={{ flex: 1, justifyContent: "center" }}>
                        <View
                          style={{ alignSelf: "center", flexDirection: "row" }}
                        >
                          <TouchableOpacity
                            onPress={() => this.decrement(u.id, u.quantity)}
                          >
                            <Text style={{ fontWeight: "bold" }}>-</Text>
                          </TouchableOpacity>
                          <TextInput
                            type="number"
                            editable={false}
                            value={u.quantity}
                            style={{
                              width: "20%",
                              marginHorizontal: 10,
                              borderRadius: 5,
                              borderColor: "#0000004d",
                              borderWidth: 0.5,
                              textAlign: "center",
                            }}
                          />
                          <TouchableOpacity
                            onPress={() => this.increament(u.id, u.quantity)}
                          >
                            <Text style={{ fontWeight: "bold" }}>+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      {/* price */}
                      <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text
                          style={{ alignSelf: "center", fontWeight: "bold" }}
                        >
                          ${u.totalQuantityPrice}
                        </Text>
                      </View>
                      {/* close */}
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => this.delectProduct(u.id)}
                        >
                          <Text style={{ alignSelf: "center" }}>X</Text>
                        </TouchableOpacity>
                        {/* <Text style={{  }}>X</Text> */}
                      </View>
                    </View>
                    <Card.Divider />
                  </View>
                );
              })}
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignSelf: "flex-start", flex: 3 }}>
                <Text
                  style={{
                    color: "#4781db",
                    alignSelf: "flex-start",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                  }}
                >
                  Continue Shopping
                </Text>
              </View>
              <View style={{ alignSelf: "flex-end", flex: 3 }}>
                <Text
                  style={{
                    alignSelf: "flex-end",
                    fontWeight: "bold",
                    color: "gray",
                    fontFamily: "Roboto",
                  }}
                >
                  Subtotal: {""}
                  <Text
                    style={{ fontWeight: "bold", color: "black", fontSize: 24 }}
                  >
                    ${this.getSubTotal()}
                  </Text>
                </Text>
              </View>
            </View>
          </Card>
        </View>
        <View style={{ flex: 1.5 }}>
          <Card containerStyle={{ backgroundColor: "#404049" }}>
            <Card.Title
              style={{
                alignSelf: "flex-start",
                color: "white",
                fontFamily: "Roboto",
              }}
            >
              Card Details
            </Card.Title>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 9,
                  color: "#393a4030",
                  fontFamily: "Roboto",
                }}
              >
                Card Type
              </Text>
              <CreditCard />
            </View>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  headBlock: {
    flex: 4,
    flexDirection: "row",
  },
});
