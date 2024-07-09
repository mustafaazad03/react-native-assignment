// src/components/CartList.tsx
import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

const CartList = ({ cartItems, onCartItemPress }: any) => {
	const renderItem = ({ item }: any) => (
		<TouchableOpacity onPress={() => onCartItemPress(item)}>
			<View>
				<Text>
					{item.name} - Quantity: {item.quantity}
				</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<FlatList
			data={cartItems}
			renderItem={renderItem}
			keyExtractor={(item) => item.id.toString()}
		/>
	);
};

export default CartList;
