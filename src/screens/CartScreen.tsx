import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CartList from "../components/CartList";
import { CartItem, useCart } from "../context/CartContext";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
	Cart: undefined;
	Details: { pizza: CartItem };
};

type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

const CartScreen = () => {
	const { cartItems } = useCart();
	const navigation = useNavigation<CartScreenNavigationProp>();

	const handleCartItemPress = (item: CartItem) => {
		navigation.navigate("Details", { pizza: item });
	};

	return (
		<View>
			<Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart</Text>
			<Text>Total Items: {cartItems.length}</Text>
			<CartList
				cartItems={cartItems}
				onCartItemPress={handleCartItemPress as any}
			/>
		</View>
	);
};

export default CartScreen;
