import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="HomeList"
			component={HomeScreen}
			options={{ title: "Home", headerShown: false }}
		/>
		<Stack.Screen
			name="Details"
			component={DetailsScreen}
			options={{ title: "Details", headerShown: false }}
		/>
	</Stack.Navigator>
);

const CartStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="CartList"
			component={CartScreen}
			options={{ title: "Cart", headerShown: false }}
		/>
		<Stack.Screen name="Details" component={DetailsScreen} />
	</Stack.Navigator>
);

const AppNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen
			name="Home"
			component={HomeStack}
			options={{ headerShown: false }}
		/>
		<Tab.Screen
			name="Cart"
			component={CartStack}
			options={{ headerShown: false }}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
