import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PizzaList from "../components/PizzaList";

const HomeScreen = () => {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigation = useNavigation<any>();

	useEffect(() => {
		fetchPizzas();
	}, []);

	const fetchPizzas = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(
				"https://private-anon-b26f96742a-pizzaapp.apiary-mock.com/restaurants/1/menu?category=Pizza&orderBy=rank"
			);
			const data = await response.json();
			setPizzas(data);
		} catch (error) {
			console.error("Error fetching pizzas:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handlePizzaPress = (pizza: any) => {
		navigation.navigate("Details", { pizza });
	};

	return (
		<View>
			<Text style={{ fontSize: 20, fontWeight: "bold" }}>Pizza Listing</Text>
			{isLoading ? (
				<Text>Loading pizzas...</Text>
			) : (
				<PizzaList pizzas={pizzas} onPizzaPress={handlePizzaPress} />
			)}
		</View>
	);
};

export default HomeScreen;
