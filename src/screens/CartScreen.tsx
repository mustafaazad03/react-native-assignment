import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CartList from "../components/CartList";
import { useCart } from "../context/CartContext";

const CartScreen = () => {
	const { cartItems } = useCart();
	const navigation = useNavigation<any>();

	const handleCartItemPress = (item: any) => {
		navigation.navigate("Details", { pizza: item });
	};

	return (
		<View>
			<Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart</Text>
			<Text>Total Items: {cartItems.length}</Text>
			<CartList cartItems={cartItems} onCartItemPress={handleCartItemPress} />
		</View>
	);
};

export default CartScreen;
