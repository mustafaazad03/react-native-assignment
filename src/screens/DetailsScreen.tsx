import React from "react";
import { View, Text, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useCart } from "../context/CartContext";

const DetailsScreen = () => {
	const route = useRoute<any>();
	const navigation = useNavigation();
	const { addToCart } = useCart();
	const pizza = route.params?.pizza;

	const handleAddToCart = () => {
		addToCart(pizza);
	};

	return (
		<View>
			<Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
			<Text>Name: {pizza?.name}</Text>
			<Text>Description: {pizza?.description}</Text>
			<Text>Price: {pizza?.price}</Text>
			<Button title="Add to Cart" onPress={handleAddToCart} />
			<Button title="Back" onPress={() => navigation.goBack()} />
		</View>
	);
};

export default DetailsScreen;
