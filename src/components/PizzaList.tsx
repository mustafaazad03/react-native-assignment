// src/components/PizzaList.tsx
import React from "react";
import { FlatList, View, Text, Button } from "react-native";
import { useCart } from "../context/CartContext";

const PizzaList = ({ pizzas, onPizzaPress }: any) => {
	const { addToCart } = useCart();

	const renderItem = ({ item }: any) => (
		<View>
			<Text>{item.name}</Text>
			<Button title="View Details" onPress={() => onPizzaPress(item)} />
			<Button title="Add to Cart" onPress={() => addToCart(item)} />
		</View>
	);

	return (
		<FlatList
			data={pizzas}
			renderItem={renderItem}
			keyExtractor={(item) => item.id.toString()}
		/>
	);
};

export default PizzaList;
