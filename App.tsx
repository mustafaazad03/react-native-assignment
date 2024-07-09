import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { CartProvider } from "./src/context/CartContext";

const App = () => (
	<NavigationContainer>
		<CartProvider>
			<AppNavigator />
		</CartProvider>
	</NavigationContainer>
);

export default App;
