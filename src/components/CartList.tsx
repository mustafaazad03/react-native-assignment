import {
	FlatList,
	View,
	Text,
	TouchableOpacity,
	ListRenderItemInfo,
} from "react-native";

interface CartItem {
	id: number;
	name: string;
	quantity: number;
}

interface CartListProps {
	cartItems: CartItem[];
	onCartItemPress: (item: CartItem) => void;
}

const CartList = ({ cartItems, onCartItemPress }: CartListProps) => {
	const renderItem = ({ item }: ListRenderItemInfo<CartItem>) => (
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
