import { FlatList, View, Text, Button, ListRenderItemInfo } from "react-native";
import { useCart } from "../context/CartContext";

interface Pizza {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

interface PizzaListProps {
	pizzas: Pizza[];
	onPizzaPress: (pizza: Pizza) => void;
}

const PizzaList = ({ pizzas, onPizzaPress }: PizzaListProps) => {
	const { addToCart } = useCart();

	const renderItem = ({ item }: ListRenderItemInfo<Pizza>) => (
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
